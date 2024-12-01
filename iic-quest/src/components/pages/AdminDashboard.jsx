import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Clock, Search, Filter, Download, Trash2, AlertCircle, ChevronDown, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Interested in participating in the hackathon',
      status: 'pending',
      date: new Date(),
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'Question about team formation',
      status: 'resolved',
      date: new Date(),
    },
  ]);

  const stats = [
    {
      label: 'Total Inquiries',
      value: inquiries.length,
      icon: <MessageSquare className="w-4 h-4" />,
      color: 'bg-blue-500',
    },
    {
      label: 'Pending',
      value: inquiries.filter(i => i.status === 'pending').length,
      icon: <Clock className="w-4 h-4" />,
      color: 'bg-yellow-500',
    },
    {
      label: 'Resolved',
      value: inquiries.filter(i => i.status === 'resolved').length,
      icon: <Users className="w-4 h-4" />,
      color: 'bg-green-500',
    },
  ];

  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = 
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || inquiry.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  const handleStatusChange = (id, newStatus) => {
    setInquiries(inquiries.map(inquiry =>
      inquiry.id === id ? { ...inquiry, status: newStatus } : inquiry
    ));
  };

  const handleDelete = (id) => {
    setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
  };

  const exportData = () => {
    const csvContent = 
      "data:text/csv;charset=utf-8," + 
      "Name,Email,Message,Status,Date\n" +
      inquiries.map(i => 
        `${i.name},${i.email},${i.message},${i.status},${i.date}`
      ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "inquiries.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-white to-secondary/20">
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="relative h-48 bg-gradient-to-r from-primary to-secondary">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-24 bg-gradient-to-t from-black/50 to-transparent">
              <h1 className="text-3xl font-bold text-white mb-2">IIC Quest Control Center</h1>
              <p className="text-white/80">Your central hub for participant communication and inquiry management</p>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                        <div className={`${stat.color.replace('bg-', 'text-')}`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        Last 24h
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                      <div className={`h-full ${stat.color} bg-opacity-50 w-2/3`}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Search and Filters */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search inquiries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="relative min-w-[160px]">
                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="w-full pl-12 pr-10 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 appearance-none bg-white transition-colors"
                    >
                      <option value="all">All Inquiries</option>
                      <option value="pending">Pending</option>
                      <option value="resolved">Resolved</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
                  </div>
                  <button
                    onClick={exportData}
                    className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-600 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 bg-gray-50">Name</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 bg-gray-50">Email</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 bg-gray-50">Message</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 bg-gray-50">Status</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600 bg-gray-50">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInquiries.map((inquiry) => (
                      <tr 
                        key={inquiry.id}
                        className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                              {inquiry.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-medium text-gray-900">{inquiry.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-600">{inquiry.email}</td>
                        <td className="py-4 px-6 text-gray-600">
                          <p className="truncate max-w-xs">{inquiry.message}</p>
                        </td>
                        <td className="py-4 px-6">
                          <select
                            value={inquiry.status}
                            onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                              inquiry.status === 'resolved'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="resolved">Resolved</option>
                          </select>
                        </td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => handleDelete(inquiry.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredInquiries.length === 0 && (
                  <div className="text-center py-12">
                    <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No inquiries found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
