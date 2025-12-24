'use client';

import { Search, Bell, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-6">
          <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-orange-500 text-white text-xs">
              2
            </Badge>
          </button>

          <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Mail className="w-5 h-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-orange-500 text-white text-xs">
              4
            </Badge>
          </button>

          <div className="flex items-center gap-3 ml-2">
            <span className="text-sm text-gray-600">Hello, Alia</span>
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
