import React, { createContext, useContext, useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/Dashboard';
import Inventory from './pages/admin/Inventory';
import Salesmen from './pages/admin/Salesmen';
import Reports from './pages/admin/Reports';
import Branding from './pages/admin/Branding';
import SalesmanDashboard from './pages/salesman/Dashboard';
import POS from './pages/salesman/POS';
import Sidebar from './components/Sidebar';
import { ShopSettings } from './types';

// Global Context
interface AppContextType {
  shopSettings: ShopSettings;
  updateShopSettings: (settings: Partial<ShopSettings>) => void;
  currentUser: { name: string; role: 'admin' | 'salesman' } | null;
  setCurrentUser: (user: { name: string; role: 'admin' | 'salesman' } | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex h-screen bg-background-light overflow-hidden">
      <div className={`fixed inset-0 z-40 bg-black/50 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        {/* Mobile Header Toggle */}
        <div className="md:hidden flex items-center p-4 bg-surface-light border-b border-slate-200">
           <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 rounded-md hover:bg-slate-100">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
           </button>
           <span className="ml-2 font-bold text-lg">Nexus Retail</span>
        </div>
        {children}
      </div>
    </div>
  );
};

const SalesmanLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-background-light flex flex-col overflow-hidden">
      {children}
    </div>
  );
};

export default function App() {
  const [shopSettings, setShopSettingsState] = useState<ShopSettings>({
    name: 'Nexus Retail',
    logo: '',
    themeColor: '#0bda62'
  });
  
  const [currentUser, setCurrentUser] = useState<{ name: string; role: 'admin' | 'salesman' } | null>(null);

  const updateShopSettings = (newSettings: Partial<ShopSettings>) => {
    setShopSettingsState(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <AppContext.Provider value={{ shopSettings, updateShopSettings, currentUser, setCurrentUser }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route path="/admin/*" element={
            <AdminLayout>
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="salesmen" element={<Salesmen />} />
                <Route path="reports" element={<Reports />} />
                <Route path="branding" element={<Branding />} />
              </Routes>
            </AdminLayout>
          } />

          {/* Salesman Routes */}
          <Route path="/salesman/*" element={
            <SalesmanLayout>
              <Routes>
                <Route path="dashboard" element={<SalesmanDashboard />} />
                <Route path="pos" element={<POS />} />
              </Routes>
            </SalesmanLayout>
          } />
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  );
}