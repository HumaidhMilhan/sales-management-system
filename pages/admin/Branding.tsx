import React from 'react';
import { ArrowLeft, Edit, Upload, Store, Save } from 'lucide-react';
import { useApp } from '../../App';
import { CURRENT_ADMIN_AVATAR } from '../../mockData';

const Branding: React.FC = () => {
  const { shopSettings, updateShopSettings } = useApp();

  return (
    <div className="flex-1 flex flex-col h-full relative">
      <header className="flex shrink-0 items-center justify-between px-6 py-3 bg-white border-b border-slate-100 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-bold leading-tight">Shop Branding</h1>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <span className="size-2 rounded-full bg-primary"></span>
              <span>Admin Mode</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
            <img src={CURRENT_ADMIN_AVATAR} alt="Admin" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto relative p-6 gap-6 pb-24 bg-background-light">
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 px-1">Identity</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <label className="block text-sm font-medium leading-6 text-slate-900 mb-2">Shop Name</label>
            <div className="relative">
              <input 
                type="text" 
                value={shopSettings.name}
                onChange={(e) => updateShopSettings({ name: e.target.value })}
                className="block w-full rounded-lg border-0 py-3 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" 
                placeholder="Enter your shop name" 
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <Edit className="text-slate-400 w-5 h-5" />
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">This name will appear on receipts and the header.</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <label className="block text-sm font-medium leading-6 text-slate-900 mb-3">Shop Logo</label>
            <div className="flex items-center gap-4">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-full border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center group cursor-pointer hover:border-primary transition-colors">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2_sRp-UvZAQwPef3XXizqZwXQmpKzKikeUyuwtOXVz-Z8zX5kDnAQpICjq4n5zQ9QlOiwf4x6xfOFLOPHYiyy7YHpEI-pwr2b7zFb9sYJeTOMQ_ID_xgCAcAZ1bnJYca8OHKq3G-ilOZQKUSikIlrHW6N6RNQqnnA6_OPTV1v7FXzH_PxPGEU7bRkf7tIBqhwovWYfGpc4_Vxsuc6VKTqlKrsX_OTbcGENgUW6vGcOOF0Z7_XcK-qEw9Z3Ak3DoOiuTrMtnQ2JxnS" className="h-full w-full object-cover opacity-80 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Upload className="text-primary w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button type="button" className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50">Change Logo</button>
                <span className="text-xs text-slate-500">JPG, PNG or SVG. Max 2MB.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Live Preview</h2>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Updated</span>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="border-b border-slate-100 bg-slate-50 flex">
              <button className="flex-1 py-3 text-sm font-medium text-primary border-b-2 border-primary">App Header</button>
              <button className="flex-1 py-3 text-sm font-medium text-slate-500 hover:text-slate-700">Invoice</button>
            </div>
            <div className="p-6 bg-slate-100 flex items-center justify-center">
              <div className="w-full max-w-sm rounded-lg bg-white shadow-md overflow-hidden border border-slate-200 transform scale-95">
                <div className="bg-white p-3 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="h-4 w-auto text-slate-900 font-bold text-xs flex items-center">{shopSettings.name}</div>
                      <div className="h-2 w-16 bg-slate-200 rounded-sm mt-1"></div>
                    </div>
                  </div>
                  <div className="size-8 rounded-full bg-slate-100"></div>
                </div>
                <div className="p-3 bg-background-light min-h-[60px] flex gap-2">
                  <div className="h-16 w-1/3 bg-slate-200 rounded-md"></div>
                  <div className="h-16 w-1/3 bg-slate-200 rounded-md"></div>
                  <div className="h-16 w-1/3 bg-slate-200 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 px-1">Theme Colors</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <div className="grid grid-cols-4 gap-4">
              <div 
                className="flex flex-col gap-2 items-center cursor-pointer group"
                onClick={() => updateShopSettings({ themeColor: '#0bda62' })}
              >
                <div className="size-12 rounded-full bg-[#0bda62] ring-2 ring-offset-2 ring-primary ring-offset-white shadow-sm"></div>
                <span className="text-xs font-medium text-slate-900">Emerald</span>
              </div>
              <div className="flex flex-col gap-2 items-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <div className="size-12 rounded-full bg-[#3b82f6]"></div>
                <span className="text-xs font-medium text-slate-500">Ocean</span>
              </div>
              <div className="flex flex-col gap-2 items-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <div className="size-12 rounded-full bg-[#ef4444]"></div>
                <span className="text-xs font-medium text-slate-500">Rose</span>
              </div>
              <div className="flex flex-col gap-2 items-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <div className="size-12 rounded-full bg-[#f59e0b]"></div>
                <span className="text-xs font-medium text-slate-500">Amber</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-0 left-0 right-0 md:absolute md:left-0 md:right-0 p-4 bg-white border-t border-slate-100 z-30">
        <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-white shadow-lg shadow-primary/30 hover:bg-primary-hover transition-all active:scale-[0.98] font-bold text-base">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Branding;