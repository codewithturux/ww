import React, { useState } from 'react';
import { Download, Filter, FileText, BarChart3 } from 'lucide-react';

interface Report {
  id: number;
  name: string;
  type: 'sales' | 'users' | 'inventory' | 'financial';
  description: string;
  lastGenerated: string;
  size: string;
}

const availableReports: Report[] = [
  {
    id: 1,
    name: 'Sales Report',
    type: 'sales',
    description: 'Comprehensive sales data including revenue, orders, and trends',
    lastGenerated: '2024-01-18',
    size: '2.4 MB',
  },
  {
    id: 2,
    name: 'User Analytics',
    type: 'users',
    description: 'User registration, activity, and engagement metrics',
    lastGenerated: '2024-01-17',
    size: '1.8 MB',
  },
  {
    id: 3,
    name: 'Inventory Report',
    type: 'inventory',
    description: 'Stock levels, product performance, and inventory turnover',
    lastGenerated: '2024-01-16',
    size: '3.1 MB',
  },
  {
    id: 4,
    name: 'Financial Summary',
    type: 'financial',
    description: 'Revenue, expenses, profit margins, and financial KPIs',
    lastGenerated: '2024-01-15',
    size: '1.2 MB',
  },
];

const typeColors = {
  sales: 'bg-blue-100 text-blue-800',
  users: 'bg-green-100 text-green-800',
  inventory: 'bg-yellow-100 text-yellow-800',
  financial: 'bg-purple-100 text-purple-800',
};

const Reports: React.FC = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '2024-01-01',
    endDate: '2024-01-31',
  });
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredReports = availableReports.filter(
    report => selectedType === 'all' || report.type === selectedType
  );

  const handleGenerateReport = (_reportId: number) => {
    // In a real app, this would trigger report generation
    alert('Report generation started! You will be notified when it\'s ready.');
  };

  const handleDownloadReport = (_reportId: number) => {
    // In a real app, this would download the actual report
    alert('Report download started!');
  };

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Reports
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Report Filters
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={dateRange.startDate}
              onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={dateRange.endDate}
              onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Report Type</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="sales">Sales</option>
              <option value="users">Users</option>
              <option value="inventory">Inventory</option>
              <option value="financial">Financial</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredReports.map((report) => (
          <div key={report.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-gray-400" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {report.name}
                    </h3>
                    <p className="text-sm text-gray-500">{report.description}</p>
                  </div>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${typeColors[report.type]}`}>
                  {report.type}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-500">
                <div>
                  <span className="font-medium">Last Generated:</span>
                  <br />
                  {new Date(report.lastGenerated).toLocaleDateString()}
                </div>
                <div>
                  <span className="font-medium">File Size:</span>
                  <br />
                  {report.size}
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => handleDownloadReport(report.id)}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
                <button
                  onClick={() => handleGenerateReport(report.id)}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Generate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Report Generation Statistics
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">24</div>
            <div className="text-sm text-gray-500">Reports Generated This Month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">156</div>
            <div className="text-sm text-gray-500">Total Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">2.3s</div>
            <div className="text-sm text-gray-500">Avg. Generation Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">45.2 MB</div>
            <div className="text-sm text-gray-500">Total Data Processed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;