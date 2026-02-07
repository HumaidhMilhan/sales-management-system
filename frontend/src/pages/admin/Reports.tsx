import React from 'react';
import { ArrowLeft, Download, Calendar, Badge, TrendingUp, AlertOctagon } from 'lucide-react';
import { INVOICES, CURRENT_ADMIN_AVATAR } from '../../mockData';

const Reports: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full relative">
      <header className="flex shrink-0 items-center justify-between px-6 py-3 bg-white border-b border-slate-100 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-bold leading-tight">Reports</h1>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <span className="size-2 rounded-full bg-primary"></span>
              <span>Admin View</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
            <img src={CURRENT_ADMIN_AVATAR} alt="User" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light pb-20">
        <div className="sticky top-0 z-10 flex flex-col gap-3 p-4 bg-background-light/95 backdrop-blur-sm border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-800">Date Range</h2>
            <div className="flex bg-white rounded-lg p-1 shadow-sm ring-1 ring-slate-200">
              <button className="px-3 py-1 text-xs font-semibold rounded bg-primary text-white shadow-sm">Daily</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded">Monthly</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded">Yearly</button>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Calendar className="w-4 h-4" />
              </div>
              <input className="block w-full rounded-xl border-none bg-white py-2.5 pl-9 pr-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary" readOnly type="text" value="Oct 24, 2023"/>
            </div>
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Badge className="w-4 h-4" />
              </div>
              <select className="block w-full rounded-xl border-none bg-white py-2.5 pl-9 pr-8 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-primary">
                <option>All Salesmen</option>
                <option>Sarah J.</option>
                <option>Mike R.</option>
                <option>Emily W.</option>
              </select>
            </div>
          </div>
        </div>

        <div className="px-4 mt-4 mb-6">
          {/* Chart Section */}
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="text-primary w-5 h-5" />
                Sales Trend
              </h3>
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">+12.5% vs yesterday</span>
            </div>
            <div className="h-32 flex items-end justify-between gap-1 mt-2">
              {[40, 60, 45, 80, 65, 85, 100].map((h, i) => (
                 <div key={i} className={`w-full rounded-t-sm h-full relative group ${i >= 4 ? 'bg-primary' : 'bg-slate-100'}`} style={{ opacity: i >= 4 ? (i === 6 ? 1 : 0.6) : 1 }}>
                   <div className="absolute bottom-0 inset-x-0 bg-current rounded-t-sm" style={{ height: `${h}%` }}></div>
                 </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-slate-400">
              <span>10am</span><span>12pm</span><span>2pm</span><span>4pm</span><span>6pm</span><span>8pm</span><span>Now</span>
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-slate-900">Recent Invoices</h3>
              <a href="#" className="text-sm font-medium text-primary hover:text-green-600">View All</a>
            </div>
            <div className="rounded-2xl bg-white overflow-hidden shadow-sm ring-1 ring-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold border-b border-slate-100">
                    <tr>
                      <th className="px-4 py-3">Inv #</th>
                      <th className="px-4 py-3">Time</th>
                      <th className="px-4 py-3">Salesman</th>
                      <th className="px-4 py-3 text-right">Amount</th>
                      <th className="px-4 py-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {INVOICES.map((inv) => (
                      <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-900">{inv.id}</td>
                        <td className="px-4 py-3 text-slate-500">{inv.time}</td>
                        <td className="px-4 py-3 text-slate-600">{inv.salesman}</td>
                        <td className="px-4 py-3 text-right font-bold text-slate-900">${inv.amount.toFixed(2)}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium 
                            ${inv.status === 'paid' ? 'bg-green-100 text-green-700' : 
                              inv.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-red-100 text-red-700'}`}>
                            {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Expiry Alerts */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <AlertOctagon className="text-red-500 w-5 h-5" />
                Expiry Alert
              </h3>
              <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700">
                5 Critical
              </span>
            </div>
            <div className="grid gap-3">
               <div className="flex items-center gap-3 p-3 rounded-xl bg-white ring-1 ring-red-200 shadow-sm border-l-4 border-l-red-500">
                  <div className="size-12 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPKhrCYg3eHiHf_AJZT59VkNDktR79c_MBw_ww9RfvjB5RZkJSlJrz6yczxz-WNBcqwkP1QaaXYM5esjW9zZ3S2weCL6TDjA4fVir5AOJ_jNEmLAfU70y7QG05UO8rCsgRPNJipYhfazmdVQpF3Gtuzi2jspet06bMMHxoa1PX4hDEOj1rKWNqx_KFFV1Re3GI3EKxwj9lXbgy85WBJ91laSvCcmgecgsLgigyqzXLrdj5kb0P1eYVD0QTNf3_og4Kd4vOsMPsuzHE" className="h-full w-full object-cover grayscale" alt="Oat Milk Barista" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900 truncate">Oat Milk Barista</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-medium text-red-600">Expired: Yesterday</span>
                      <span className="size-1 rounded-full bg-slate-300"></span>
                      <span className="text-xs text-slate-500">Batch #9001</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-lg font-bold text-slate-900">12</span>
                    <span className="text-[10px] uppercase text-slate-500 font-medium">Units</span>
                  </div>
               </div>
               
               <div className="flex items-center gap-3 p-3 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm border-l-4 border-l-yellow-500">
                  <div className="size-12 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBED-H0Myla8q0De7pARP-LxU0Loz0eWIRavNqjzE9d_tn4wA2dsgE8-ZKY8e-Pd9RlEOwIgcZHdXmtZfmKK0koPU89-KaDDGBe6MmdUAN_tvPye3YTNa7Wc9rgHt5toSWLBQJJ5Ce1yw4bVQfQNYxIVyfTa-2AtqdCcYOcroOfBZJN1vDGIwW6s-DZBYuWyhDCABYZOgn34DD9P1P_Amu9h1WyTnjRsd_0UU2D3nfh61hl4uKjoopdLR_Zp4E-OeyslPCLOdHMOhcP" className="h-full w-full object-cover" alt="Fresh Whipping Cream" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900 truncate">Fresh Whipping Cream</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-medium text-yellow-600">Expires: Tomorrow</span>
                      <span className="size-1 rounded-full bg-slate-300"></span>
                      <span className="text-xs text-slate-500">Batch #9022</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-lg font-bold text-slate-900">4</span>
                    <span className="text-[10px] uppercase text-slate-500 font-medium">Units</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
