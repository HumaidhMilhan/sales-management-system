import React from 'react';
import { 
  TrendingUp, 
  Wallet, 
  LineChart, 
  Package, 
  AlertTriangle, 
  BellRing, 
  Clock, 
  MoreHorizontal,
  Bell
} from 'lucide-react';
import { CURRENT_ADMIN_AVATAR } from '../../mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full relative">
      <header className="flex shrink-0 items-center justify-between px-6 py-3 bg-surface-light border-b border-slate-100 z-20 shadow-sm">
        <div className="hidden md:block">
          <h1 className="text-xl font-bold text-slate-900">Admin Dashboard</h1>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-bold text-slate-900">Admin User</span>
            <span className="text-xs text-slate-500">Super Admin</span>
          </div>
          <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
            <img src={CURRENT_ADMIN_AVATAR} alt="Profile" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto bg-background-light p-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <div className="p-1.5 bg-green-100 rounded-md text-primary">
                  <Wallet className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider">Today's Sales</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-slate-900">$2,450</span>
                <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                  <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> 12%
                </span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <div className="p-1.5 bg-blue-100 rounded-md text-blue-600">
                  <LineChart className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider">Total Revenue</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-slate-900">$84.2k</span>
                <span className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                  <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> 5%
                </span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <div className="p-1.5 bg-purple-100 rounded-md text-purple-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider">Growth</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-slate-900">+24.5%</span>
                <span className="text-xs text-slate-400">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <div className="p-1.5 bg-orange-100 rounded-md text-orange-600">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider">Stock Count</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-slate-900">1,204</span>
                <span className="flex items-center text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                  <TrendingUp className="w-3.5 h-3.5 mr-0.5 rotate-180" /> 23 low
                </span>
              </div>
            </div>
          </div>

          {/* Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Expired Products */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-red-50/50">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <AlertTriangle className="text-red-500 w-5 h-5" />
                  Expired Products
                </h3>
                <button className="text-xs font-medium text-primary hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-4 py-2 font-medium">Product</th>
                      <th className="px-4 py-2 font-medium">Batch</th>
                      <th className="px-4 py-2 font-medium text-right">Qty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { name: 'Matcha Powder', batch: '#B992', qty: 12, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPKhrCYg3eHiHf_AJZT59VkNDktR79c_MBw_ww9RfvjB5RZkJSlJrz6yczxz-WNBcqwkP1QaaXYM5esjW9zZ3S2weCL6TDjA4fVir5AOJ_jNEmLAfU70y7QG05UO8rCsgRPNJipYhfazmdVQpF3Gtuzi2jspet06bMMHxoa1PX4hDEOj1rKWNqx_KFFV1Re3GI3EKxwj9lXbgy85WBJ91laSvCcmgecgsLgigyqzXLrdj5kb0P1eYVD0QTNf3_og4Kd4vOsMPsuzHE' },
                      { name: 'Pastry Dough', batch: '#A001', qty: 5, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHKspHNPe2FjaaE_p3UUF0RN9ukTwK_shXG7PKP2Ufd8qMbE-nz3vfPQDex68II1KiVRo8lGNuAmGSk9YRUd0dsXq1y3RS-QBpN6PsMdJxKVeSE6Y5KxtvH8muMg6-Wfbl_ENWtT5CHrUpuePpRl2ZYad-EBOB-rQPkfLSeqxBWyFwbpC5kcIioXu_6u-MibHPK9KldfjjxH3zr2jSkGeteWhU0NCGNscU68lumuZ0jmEsa3AAPDJ9yTsWNyILux5fz75YEx0UPPD1' },
                      { name: 'Milk 2%', batch: '#M202', qty: 8, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBED-H0Myla8q0De7pARP-LxU0Loz0eWIRavNqjzE9d_tn4wA2dsgE8-ZKY8e-Pd9RlEOwIgcZHdXmtZfmKK0koPU89-KaDDGBe6MmdUAN_tvPye3YTNa7Wc9rgHt5toSWLBQJJ5Ce1yw4bVQfQNYxIVyfTa-2AtqdCcYOcroOfBZJN1vDGIwW6s-DZBYuWyhDCABYZOgn34DD9P1P_Amu9h1WyTnjRsd_0UU2D3nfh61hl4uKjoopdLR_Zp4E-OeyslPCLOdHMOhcP' }
                    ].map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-900 flex items-center gap-2">
                          <div className="size-8 rounded bg-slate-100 overflow-hidden shrink-0">
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          {item.name}
                        </td>
                        <td className="px-4 py-3 text-slate-500">{item.batch}</td>
                        <td className="px-4 py-3 text-red-500 font-bold text-right">{item.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Near Expiry Alerts */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col">
              <div className="px-4 py-3 border-b border-slate-100 bg-orange-50/50">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <BellRing className="text-orange-500 w-5 h-5" />
                  Near-Expiry Alerts
                </h3>
              </div>
              <div className="p-4 space-y-3 flex-1">
                {[
                  { name: 'Vanilla Syrup (Stock: 24)', msg: 'Expires in 3 days. Consider discount promotion.', color: 'orange' },
                  { name: 'Almond Milk (Stock: 10)', msg: 'Expires in 5 days. Low priority.', color: 'yellow' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background-light border border-slate-200">
                    <div className={`bg-${item.color}-100 text-${item.color}-600 rounded-full p-1.5 mt-0.5 shrink-0`}>
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.msg}</p>
                    </div>
                    <button className="ml-auto text-primary text-xs font-bold uppercase tracking-wide hover:underline">Action</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue & Top Salesman */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900 text-sm">Revenue Growth</h3>
                <select className="bg-transparent text-xs font-medium text-slate-500 border-none focus:ring-0 cursor-pointer">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="h-40 flex items-end justify-between gap-2 pt-4 px-2">
                {[40, 65, 50, 85, 60, 75, 55].map((h, i) => (
                  <div key={i} className="w-full bg-slate-50 rounded-t-lg relative group h-full">
                    <div 
                      className={`absolute bottom-0 inset-x-0 rounded-t-lg transition-all duration-300 ${i === 3 ? 'bg-primary' : 'bg-primary/20 group-hover:bg-primary/40'}`}
                      style={{ height: `${h}%` }}
                    ></div>
                    {i === 3 && (
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-900 font-bold opacity-100">$2.4k</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 mt-2 px-1">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col">
              <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900 text-sm">Top Salesmen</h3>
                <button className="text-slate-400 hover:text-primary">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { name: 'Sarah Jenkins', sales: '142 Sales', rev: '$4.2k', rank: 1, color: 'bg-yellow-400' },
                  { name: 'John Doe', sales: '98 Sales', rev: '$2.8k', rank: 2, color: 'bg-slate-300' },
                  { name: 'Mike K.', sales: '76 Sales', rev: '$1.9k', rank: 3, color: 'bg-amber-700' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3">
                    <div className="relative">
                      <div className="size-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-xs">
                        {item.name.charAt(0)}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 ${item.color} text-white text-[10px] font-bold px-1 rounded-full border border-white`}>#{item.rank}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 truncate">{item.name}</p>
                      <p className="text-xs text-slate-500 truncate">{item.sales}</p>
                    </div>
                    <span className={`text-sm font-bold ${i === 0 ? 'text-primary' : 'text-slate-700'}`}>{item.rev}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
