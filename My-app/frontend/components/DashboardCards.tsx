'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  UtensilsCrossed,
  DollarSign,
  ShoppingBag,
  Users,
} from 'lucide-react';

const RESTAURANT_ID = 'fa3b242e-2705-4896-a83a-77ffb833551e';

/* ---------------- Circular Progress ---------------- */
function CircularProgress({ progress, icon: Icon, color }: any) {
  const circumference = 2 * Math.PI * 36;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="36"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-gray-100"
        />
        <circle
          cx="50%"
          cy="50%"
          r="36"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={color}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
      </div>
    </div>
  );
}

/* ---------------- Dashboard Cards ---------------- */
export default function DashboardCards() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/sales/summary?restaurant_id=${RESTAURANT_ID}`
        );
        const data = await res.json();
        setSummary(data);
      } catch (err) {
        console.error('Failed to fetch summary', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  const stats = [
    {
      title: 'Total Menu',
      value: '325',
      icon: UtensilsCrossed,
      progress: 70,
    },
    {
      title: 'Total Revenue',
      value: '$425k',
      icon: DollarSign,
      progress: 65,
    },
    {
      title: 'Total Orders',
      value: loading ? '...' : summary?.totalItemsSold ?? 0,
      icon: ShoppingBag,
      progress: 80,
    },
    {
      title: 'Total Customers',
      value: '985',
      icon: Users,
      progress: 90,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-0 shadow-sm">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {stat.title}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {stat.value}
                </h3>
              </div>
              <CircularProgress
                progress={stat.progress}
                icon={stat.icon}
                color="text-orange-500"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
