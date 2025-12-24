"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";

const RESTAURANT_ID = "fa3b242e-2705-4896-a83a-77ffb833551e";

type Sale = {
  id: string;
  item_name: string;
  quantity_sold: number;
  date: string;
  created_at: string;
};

export default function AnalysisPage() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchSales = async () => {
    try {
      const res = await fetch("http://localhost:5000/sales");
      const data = await res.json();

      // ✅ IMPORTANT FIX
      setSales(data.sales);
    } catch (err) {
      console.error("Failed to fetch sales", err);
    } finally {
      setLoading(false);
    }
  };

  fetchSales();
}, []);


  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 max-w-7xl mx-auto space-y-6">
          {/* Page Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Sales Analysis
            </h1>
            <p className="text-sm text-gray-500">
              View all orders and sales details
            </p>
          </div>

          {/* Table Card */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-0 overflow-x-auto">
              {loading ? (
                <div className="p-6 text-gray-500">
                  Loading orders...
                </div>
              ) : sales.length === 0 ? (
                <div className="p-6 text-gray-500">
                  No orders found.
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold text-gray-600">
                        Item
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-600">
                        Quantity
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-600">
                        Order Date
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-600">
                        Created At
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {sales.map((sale) => (
                      <tr
                        key={sale.id}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        <td className="py-3 px-4 font-medium text-gray-900">
                          {sale.item_name}
                        </td>
                        <td className="py-3 px-4">
                          {sale.quantity_sold}
                        </td>
                        <td className="py-3 px-4">
                          {sale.date}
                        </td>
                        <td className="py-3 px-4 text-gray-500">
                          {new Date(sale.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
