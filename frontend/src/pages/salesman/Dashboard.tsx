import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, TrendingUp, ReceiptText, AlertTriangle, History, ShoppingBag, Coffee, Utensils, LayoutDashboard, Package, User } from 'lucide-react';
import { useApp } from '../../App';

const SalesmanDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { shopSettings, currentUser } = useApp();

  return (
    <div className="flex-1 flex flex-col h-full bg-background-light">
      <header className="flex shrink-0 items-center justify-between px-5 py-4 bg-white border-b border-slate-100 z-20 shadow-sm">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{shopSettings.name} #42</span>
          <h1 className="text-xl font-bold leading-tight text-slate-900">Salesman Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end mr-1">
            <span className="text-sm font-semibold text-slate-800">{currentUser?.name || 'Salesman'}</span>
            <span className="text-xs text-slate-500">Sales Associate</span>
          </div>
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-primary/20 shadow-sm">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSY1BOJktDJsNtXxx8TAVUsC9jZrhgechBcASXxS4SlONcI-fuFEEz41WcujyQMi0TVqkdazqSREaf9w7QbrAxlSOo5WeXYRw3wbDvyvpsroAYitFZ6XZ-PT9hHx6YL1GFq4ngAgbm7Gv2ZsWW0xe4mDWywEspYlovFiBIXoV2qjltw-x5_koDWJxCsNo2Kcx49hEIMsMJ3c5Xuwjoo_LZFdzZuPoHNADCPL2IpcWai1iNCLXi77i7Pr9eYjdWEragPZe4mjGrH7B2" alt="Avatar" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto hide-scrollbar p-5 gap-6 pb-24">
        <section className="w-full">
          <button 
            onClick={() => navigate('/salesman/pos')}
            className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform group"
          >
            <div className="absolute right-0 top-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white/10 blur-2xl group-hover:bg-white/20 transition-colors"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-black/5 blur-xl"></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-center py-4">
              <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                <CreditCard className="text-4xl text-white w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-white">New Sale</h2>
              <p className="text-white/80 text-sm font-medium">Create Invoice / Start Checkout</p>
            </div>
          </button>
        </section>

        <section className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-2 text-slate-500">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase">Today's Sales</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">$1,240.50</p>
            <p className="text-xs text-green-600 mt-1 flex items-center">
               <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
               +12% vs yest.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-2 text-slate-500">
              <ReceiptText className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase">Invoices</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">24</p>
            <p className="text-xs text-slate-400 mt-1">Processed today</p>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <AlertTriangle className="text-amber-500 w-5 h-5" />
              Near-Expiry Alerts
            </h3>
            <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Action Needed</span>
          </div>
          <div className="rounded-xl bg-white shadow-sm border border-slate-100 overflow-hidden">
            <div className="flex items-center gap-3 p-3 border-b border-slate-50">
              <div className="size-12 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHKspHNPe2FjaaE_p3UUF0RN9ukTwK_shXG7PKP2Ufd8qMbE-nz3vfPQDex68II1KiVRo8lGNuAmGSk9YRUd0dsXq1y3RS-QBpN6PsMdJxKVeSE6Y5KxtvH8muMg6-Wfbl_ENWtT5CHrUpuePpRl2ZYad-EBOB-rQPkfLSeqxBWyFwbpC5kcIioXu_6u-MibHPK9KldfjjxH3zr2jSkGeteWhU0NCGNscU68lumuZ0jmEsa3AAPDJ9yTsWNyILux5fz75YEx0UPPD1" className="h-full w-full object-cover opacity-80" alt="Butter Croissant" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 truncate">Butter Croissant</h4>
                <p className="text-xs text-slate-500">Batch #9921 • Stock: 15</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Exp: Tomorrow</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3">
              <div className="size-12 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBED-H0Myla8q0De7pARP-LxU0Loz0eWIRavNqjzE9d_tn4wA2dsgE8-ZKY8e-Pd9RlEOwIgcZHdXmtZfmKK0koPU89-KaDDGBe6MmdUAN_tvPye3YTNa7Wc9rgHt5toSWLBQJJ5Ce1yw4bVQfQNYxIVyfTa-2AtqdCcYOcroOfBZJN1vDGIwW6s-DZBYuWyhDCABYZOgn34DD9P1P_Amu9h1WyTnjRsd_0UU2D3nfh61hl4uKjoopdLR_Zp4E-OeyslPCLOdHMOhcP" className="h-full w-full object-cover opacity-80" alt="Blueberry Muffin" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-900 truncate">Blueberry Muffin</h4>
                <p className="text-xs text-slate-500">Batch #8812 • Stock: 4</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Exp: Today</span>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <History className="text-primary w-5 h-5" />
              My Sales History
            </h3>
            <button className="text-xs font-medium text-primary hover:text-primary-dark">View All</button>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { id: 1024, items: 3, method: 'Card', amount: 42.50, time: '10:42 AM', icon: ShoppingBag },
              { id: 1023, items: 1, method: 'Cash', amount: 4.50, time: '10:15 AM', icon: Coffee },
              { id: 1022, items: 5, method: 'QR', amount: 28.00, time: '09:55 AM', icon: Utensils },
            ].map((order, i) => (
               <div key={i} className="group flex items-center justify-between p-4 rounded-xl bg-white border border-slate-100 shadow-sm active:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                      <order.icon className="text-xl w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Order #{order.id}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{order.items} items • Paid via {order.method}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">${order.amount.toFixed(2)}</p>
                    <p className="text-xs text-slate-400">{order.time}</p>
                  </div>
               </div>
            ))}
          </div>
        </section>
      </main>

      <nav className="shrink-0 border-t border-slate-200 bg-white pb-safe z-30">
        <div className="grid grid-cols-3 h-16 items-center">
          <button className="flex flex-col items-center justify-center gap-1 text-primary">
            <LayoutDashboard className="w-6 h-6" />
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-slate-600">
            <Package className="w-6 h-6" />
            <span className="text-[10px] font-medium">Stocks</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-slate-600">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default SalesmanDashboard;
