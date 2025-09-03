import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';

const areaData = [
  { name: 'Jan', users: 400, revenue: 2400 },
  { name: 'Feb', users: 300, revenue: 1398 },
  { name: 'Mar', users: 200, revenue: 9800 },
  { name: 'Apr', users: 278, revenue: 3908 },
  { name: 'May', users: 189, revenue: 4800 },
  { name: 'Jun', users: 239, revenue: 3800 },
  { name: 'Jul', users: 349, revenue: 4300 },
];

const barData = [
  { name: 'Mon', orders: 24 },
  { name: 'Tue', orders: 13 },
  { name: 'Wed', orders: 98 },
  { name: 'Thu', orders: 39 },
  { name: 'Fri', orders: 48 },
  { name: 'Sat', orders: 38 },
  { name: 'Sun', orders: 43 },
];

const pieData = [
  { name: 'Electronics', value: 400, color: '#3b82f6' },
  { name: 'Clothing', value: 300, color: '#ef4444' },
  { name: 'Books', value: 200, color: '#10b981' },
  { name: 'Home', value: 100, color: '#f59e0b' },
];

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
    },
    {
      title: 'Total Orders',
      value: '8,765',
      change: '+8%',
      changeType: 'positive' as const,
      icon: ShoppingCart,
    },
    {
      title: 'Revenue',
      value: '$54,321',
      change: '+23%',
      changeType: 'positive' as const,
      icon: DollarSign,
    },
    {
      title: 'Growth Rate',
      value: '15.3%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
    },
  ];

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Dashboard
          </h2>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Area Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Users & Revenue Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stackId="1"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="2"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Weekly Orders
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Charts Row */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Product Categories
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              { user: 'John Doe', action: 'Created new order #1234', time: '2 minutes ago' },
              { user: 'Jane Smith', action: 'Updated product inventory', time: '5 minutes ago' },
              { user: 'Mike Johnson', action: 'Registered new account', time: '10 minutes ago' },
              { user: 'Sarah Wilson', action: 'Completed order #1233', time: '15 minutes ago' },
              { user: 'Tom Brown', action: 'Left product review', time: '20 minutes ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.user}
                  </p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;