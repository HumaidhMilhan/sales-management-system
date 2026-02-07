import React from 'react';
import { ArrowLeft, Settings, Search, Filter, UserPlus, Phone, User, Edit, Ban, Trash2, CheckCircle } from 'lucide-react';
import { SALESMEN, CURRENT_ADMIN_AVATAR } from '../../mockData';

const Salesmen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full relative">
      <header className="flex shrink-0 items-center justify-between px-6 py-3 bg-white border-b border-slate-100 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-bold leading-tight">Salesman Management</h1>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <span className="size-2 rounded-full bg-primary"></span>
              <span>Admin: Michael R.</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
            <img src={CURRENT_ADMIN_AVATAR} alt="Admin" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-hidden relative bg-background-light">
        <div className="flex flex-col gap-4 p-4 pb-2 bg-background-light z-10">
          <div className="flex gap-2">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                className="block w-full rounded-xl border-none bg-white py-3 pl-10 pr-4 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6" 
                placeholder="Search by name, ID or phone..." 
              />
            </div>
            <button className="flex shrink-0 items-center justify-center size-11 rounded-xl bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:text-primary transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white py-3 shadow-lg shadow-primary/30 transition-all active:scale-[0.98]">
            <UserPlus className="w-5 h-5" />
            <span className="font-semibold">Add New Salesman</span>
          </button>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <div className="flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200">
              <div className="size-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-slate-600">Active: 4</span>
            </div>
            <div className="flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200">
              <div className="size-2 rounded-full bg-slate-400"></div>
              <span className="text-xs font-medium text-slate-600">Inactive: 1</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-20 space-y-3">
          {SALESMEN.map((salesman) => (
            <div key={salesman.id} className={`group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md ${salesman.status === 'inactive' ? 'opacity-75' : ''}`}>
              <div className="flex items-start p-4 gap-3">
                <div className={`size-14 shrink-0 rounded-full bg-slate-100 overflow-hidden border border-slate-200 ${salesman.status === 'inactive' ? 'grayscale' : ''}`}>
                  <img src={salesman.avatar} alt={salesman.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-slate-900 truncate">{salesman.name}</h3>
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">ID: {salesman.id}</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-0.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {salesman.username}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> {salesman.phone}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={salesman.status === 'active'} readOnly />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                  {salesman.status === 'inactive' && (
                    <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">Inactive</span>
                  )}
                </div>
              </div>
              <div className="border-t border-slate-100 bg-slate-50 p-2 flex items-center justify-between gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-600 hover:bg-white hover:text-primary rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <div className="w-px h-4 bg-slate-200"></div>
                {salesman.status === 'active' ? (
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-amber-600 hover:bg-white rounded-lg transition-colors">
                    <Ban className="w-4 h-4" />
                    Deactivate
                  </button>
                ) : (
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-green-600 hover:bg-white rounded-lg transition-colors">
                    <CheckCircle className="w-4 h-4" />
                    Activate
                  </button>
                )}
                <div className="w-px h-4 bg-slate-200"></div>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-red-600 hover:bg-white rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Salesmen;