import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, ShieldCheck, Badge, User, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useApp } from '../App';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useApp();
  const [role, setRole] = useState<'admin' | 'salesman'>('salesman');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentUser({
      name: username || (role === 'admin' ? 'Admin User' : 'Salesman User'),
      role
    });
    
    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/salesman/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light p-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center size-16 rounded-2xl bg-primary/10 text-primary mb-4 shadow-sm border border-primary/20">
            <Store className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Nexus Retail</h1>
          <p className="text-slate-500 text-sm mt-1">Universal Access Portal</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="p-1.5 m-4 bg-slate-100 rounded-xl flex relative">
            <button
              onClick={() => setRole('salesman')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                role === 'salesman' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Badge className="w-4 h-4" />
              Salesman
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                role === 'admin' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Admin
            </button>
          </div>

          <form onSubmit={handleLogin} className="px-6 pb-8 pt-2 space-y-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-xl border-slate-200 bg-slate-50 pl-10 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                  placeholder="Enter your ID"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-xs font-medium text-primary hover:text-primary-hover">Forgot?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full rounded-xl border-slate-200 bg-slate-50 pl-10 pr-10 py-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:shadow-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all active:scale-[0.98]"
            >
              Log In
              <LogIn className="ml-2 w-4 h-4" />
            </button>
          </form>

          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-center">
            <p className="text-xs text-slate-500">
              Having trouble? <a href="#" className="font-medium text-slate-700 hover:text-primary transition-colors">Contact Support</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Secure System Access</p>
          <div className="flex justify-center gap-4 mt-2 opacity-50 grayscale">
            <ShieldCheck className="text-slate-400 w-5 h-5" />
            <Lock className="text-slate-400 w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
