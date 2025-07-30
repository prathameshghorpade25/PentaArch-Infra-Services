'use client';

import { BarChart, Users, Folder, Mail, Settings, Bell, LogOut } from 'lucide-react';

const AdminDashboardPage = () => {
  const stats = [
    { title: 'Total Inquiries', value: '152', icon: Mail },
    { title: 'Active Projects', value: '12', icon: Folder },
    { title: 'Team Members', value: '25', icon: Users },
    { title: 'Page Visits', value: '1.2M', icon: BarChart },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-warm-neutral">
      {/* Sidebar */}
      <aside className="w-64 bg-charcoal p-6 flex-shrink-0 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-playfair font-bold text-white mb-10">Penta<span className="gradient-text">Arch</span></h1>
          <nav className="space-y-4">
            {[
              { icon: BarChart, label: 'Dashboard' },
              { icon: Mail, label: 'Enquiries' },
              { icon: Folder, label: 'Projects' },
              { icon: Users, label: 'Users' },
              { icon: Settings, label: 'Settings' },
            ].map(item => (
              <a href="#" className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
                <item.icon size={20} className="mr-3" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <a href="/admin" className="flex items-center p-2 rounded-lg text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-colors">
          <LogOut size={20} className="mr-3" />
          Logout
        </a>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-playfair font-bold text-white">Admin Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Bell size={24} className="text-gray-400" />
            <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center font-bold text-white">A</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map(stat => (
            <div className="bg-gray-800/50 p-6 rounded-2xl flex items-center justify-between border border-gray-700">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
              <div className="w-12 h-12 bg-rose-gold-gradient rounded-xl flex items-center justify-center">
                <stat.icon size={24} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for future content */}
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
          <p className="text-gray-400">Content management features for inquiries, projects, and other modules will be implemented here.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;

