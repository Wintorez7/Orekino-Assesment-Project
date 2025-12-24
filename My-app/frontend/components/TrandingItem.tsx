'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Image from 'next/image';

const trendingItems = [
  {
    rank: 1,
    name: 'Biryani Pulav',
    price: '$12.00',
    category: 'Main Course',
    sales: 158,
    percentage: '20%',
    trending: 'up',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
  },
  {
    rank: 2,
    name: 'Burgers',
    price: '$4.00',
    category: 'Snacks',
    sales: 18,
    percentage: '5%',
    trending: 'down',
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
  },
  {
    rank: 3,
    name: 'Dal Palak Recipe',
    price: '$6.00',
    category: 'Main Course',
    sales: 258,
    percentage: '15%',
    trending: 'up',
    image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg',
  },
  {
    rank: 4,
    name: 'Pan Noodles',
    price: '$12.00',
    category: 'Stir Fried',
    sales: 58,
    percentage: '10%',
    trending: 'down',
    image: 'https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg',
  },
  {
    rank: 5,
    name: 'Vegetable Jalfrezi',
    price: '$12.00',
    category: 'Main Course',
    sales: 215,
    percentage: '21%',
    trending: 'up',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
  },
];

export default function TrendingItems() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Trending Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingItems.map((item, index) => (
            <div
              key={item.rank}
              className={`flex items-center gap-4 pb-4 ${
                index < trendingItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="text-gray-400 font-medium w-8">#{item.rank}</span>

                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500">{item.price}</span>
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-100">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
                    item.trending === 'up' ? 'bg-green-50' : 'bg-blue-50'
                  }`}
                >
                  {item.trending === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div className="text-right min-w-20">
                  <p className="text-xl font-bold text-gray-900">{item.sales}</p>
                  <p className="text-xs text-gray-500">Sales ({item.percentage})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
