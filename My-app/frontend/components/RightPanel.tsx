'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/* ---------------- Dummy Activity Data ---------------- */
const activities = [
  {
    time: '10:10',
    message: 'Morbii quis ex eu arca aucter sagittis.',
    author: 'Johne',
    color: 'bg-blue-500',
  },
  {
    time: '08:40',
    message: 'Proin iaculis eros non adio emare efficitur.',
    author: 'Am-ila',
    color: 'bg-orange-500',
  },
  {
    time: '01:15',
    message: 'In mattis mi u posuere consectetur.',
    author: 'Sarah',
    color: 'bg-purple-500',
  },
];

/* ---------------- Charts ---------------- */
function MiniLineChart() {
  return (
    <svg width="100%" height="60" className="mt-2">
      <path
        d="M 0 40 Q 20 30, 40 35 T 80 25 T 120 30 T 160 20 T 200 25"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
      />
    </svg>
  );
}

function MiniAreaChart() {
  return (
    <svg width="100%" height="80" className="mt-2">
      <path
        d="M 0 60 Q 30 45, 60 50 T 120 35 T 180 40 T 240 25"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ---------------- Main Component ---------------- */
export default function RightPanel() {
  const RESTAURANT_ID = 'fa3b242e-2705-4896-a83a-77ffb833551e';

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    item_name: '',
    quantity_sold: '',
    date: '',
  });

  /* ---------------- Add Sale Handler ---------------- */
  const handleAddSale = async () => {
    if (
      formData.item_name.trim() === '' ||
      formData.quantity_sold === '' ||
      Number(formData.quantity_sold) <= 0 ||
      formData.date === ''
    ) {
      alert('Please fill all fields correctly');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('http://localhost:5000/sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          restaurant_id: RESTAURANT_ID,
          item_name: formData.item_name,
          quantity_sold: Number(formData.quantity_sold),
          date: formData.date,
        }),
      });

      if (!res.ok) throw new Error('Failed to add sale');

      setFormData({ item_name: '', quantity_sold: '', date: '' });
      setOpen(false);
      alert('Sale added successfully');
    } catch (err) {
      console.error(err);
      alert('Error adding sale');
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
      <div className="p-6 space-y-6">

        {/* Add Sale Button */}
        <Button onClick={() => setOpen(true)} className="w-full">
          + Add Sale
        </Button>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <h3 className="text-sm text-gray-500 mb-1">Total Sale</h3>
            <p className="text-3xl font-bold">$254.90</p>
            <MiniLineChart />
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <h3 className="text-sm font-medium">6 total orders</h3>
            <p className="text-3xl font-bold">845</p>
            <MiniAreaChart />
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map((a, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-sm font-medium">{a.time}</span>
                <div className={`w-1 ${a.color} rounded-full`} />
                <div>
                  <p className="text-sm">{a.message}</p>
                  <p className="text-xs text-gray-500">by {a.author}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Sale</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>Item Name</Label>
              <Input
                value={formData.item_name}
                onChange={(e) =>
                  setFormData({ ...formData, item_name: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Quantity Sold</Label>
              <Input
                type="number"
                value={formData.quantity_sold}
                onChange={(e) =>
                  setFormData({ ...formData, quantity_sold: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Date</Label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddSale} disabled={loading}>
              {loading ? 'Adding...' : 'Add Sale'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </aside>
  );
}
