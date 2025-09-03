import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 12000, orders: 120, users: 450 },
  { month: 'Feb', revenue: 15000, orders: 150, users: 520 },
  { month: 'Mar', revenue: 18000, orders: 180, users: 610 },
  { month: 'Apr', revenue: 22000, orders: 220, users: 720 },
  { month: 'May', revenue: 25000, orders: 250, users: 850 },
  { month: 'Jun', revenue: 28000, orders: 280, users: 950 },
];

const trafficData = [
  { day: 'Mon', desktop: 1200, mobile: 800, tablet: 300 },
  { day: 'Tue', desktop: 1100, mobile: 900, tablet: 350 },
  { day: 'Wed', desktop: 1300, mobile: 1100, tablet: 400 },
  { day: 'Thu', desktop: 1400, mobile: 1200, tablet: 450 },
  { day: 'Fri', desktop: 1600, mobile: 1400, tablet: 500 },
  { day: 'Sat', desktop: 1800, mobile: 1600, tablet: 550 },
  { day: 'Sun', desktop: 1500, mobile: 1300, tablet: 480 },
];

const Analytics: React.FC = () => {
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Analytics
          </h2>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="mt-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Revenue & Growth Metrics
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.6}
                name="Revenue ($)"
              />
              <Area
                type="monotone"
                dataKey="orders"
                stackId="2"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.6}
                name="Orders"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Traffic Analysis */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Weekly Traffic by Device
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="desktop" fill="#3b82f6" name="Desktop" />
              <Bar dataKey="mobile" fill="#ef4444" name="Mobile" />
              <Bar dataKey="tablet" fill="#10b981" name="Tablet" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            User Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-6">
            Key Performance Indicators
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-l-4 border-primary-500 pl-4">
              <div className="text-2xl font-bold text-gray-900">98.5%</div>
              <div className="text-sm text-gray-500">Customer Satisfaction</div>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <div className="text-2xl font-bold text-gray-900">2.4s</div>
              <div className="text-sm text-gray-500">Avg. Response Time</div>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="text-2xl font-bold text-gray-900">15.3%</div>
              <div className="text-sm text-gray-500">Conversion Rate</div>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <div className="text-2xl font-bold text-gray-900">$47.50</div>
              <div className="text-sm text-gray-500">Avg. Order Value</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;