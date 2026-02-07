import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Users, ScrollText, BarChart3, Store } from 'lucide-react';
import { useApp } from '../App';
import { CURRENT_ADMIN_AVATAR } from '../mockData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { shopSettings } = useApp();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Package, label: 'Products', path: '/admin/inventory' },
    { icon: Users, label: 'Salesmen', path: '/admin/salesmen' },
    { icon: ScrollText, label: 'Sales', path: '/admin/reports' },
    { icon: BarChart3, label: 'Reports', path: '/admin/reports' },
    { icon: Store, label: 'Branding', path: '/admin/branding' },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-surface-light border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="h-full flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
            {shopSettings.name.charAt(0)}
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 truncate">
            {shopSettings.name}
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-primary/10 text-primary shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="size-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white shadow-sm">
              <img src={CURRENT_ADMIN_AVATAR} alt="Admin" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-bold text-slate-900 truncate">Admin User</span>
              <span className="text-xs text-slate-500">View Profile</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
