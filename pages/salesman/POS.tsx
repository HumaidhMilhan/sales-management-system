import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, ScanLine, Plus, Minus, Printer, ArrowRight, User } from 'lucide-react';
import { useApp } from '../../App';
import { PRODUCTS } from '../../mockData';
import { Product, SaleItem } from '../../types';

const POS: React.FC = () => {
  const navigate = useNavigate();
  const { shopSettings, currentUser } = useApp();
  const [cart, setCart] = useState<SaleItem[]>([
     { product: PRODUCTS.find(p => p.name === 'Espresso Shot')!, quantity: 2 },
     { product: PRODUCTS.find(p => p.name === 'Blueberry Muffin')!, quantity: 1 }
  ]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light">
      <header className="flex shrink-0 items-center justify-between px-4 py-3 bg-white border-b border-slate-200 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/salesman/dashboard')} className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-700">
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-lg font-bold leading-tight">{shopSettings.name}</h1>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span>Oct 24, 10:42 AM</span>
              <span className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-primary"></span>
                Cashier: {currentUser?.name || 'Sarah J.'}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-600">
            <span>Terminal #04</span>
          </div>
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSY1BOJktDJsNtXxx8TAVUsC9jZrhgechBcASXxS4SlONcI-fuFEEz41WcujyQMi0TVqkdazqSREaf9w7QbrAxlSOo5WeXYRw3wbDvyvpsroAYitFZ6XZ-PT9hHx6YL1GFq4ngAgbm7Gv2ZsWW0xe4mDWywEspYlovFiBIXoV2qjltw-x5_koDWJxCsNo2Kcx49hEIMsMJ3c5Xuwjoo_LZFdzZuPoHNADCPL2IpcWai1iNCLXi77i7Pr9eYjdWEragPZe4mjGrH7B2" alt="Avatar" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {/* Product Grid */}
        <div className="flex flex-col flex-1 h-full overflow-hidden bg-background-light">
           <div className="flex flex-col gap-3 p-4 bg-background-light z-10">
              <div className="flex gap-2">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input className="block w-full rounded-xl border-none bg-white py-3 pl-10 pr-10 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6" placeholder="Search item or SKU..." type="text"/>
                  <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-primary transition-colors">
                    <ScanLine className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
                {['All', 'Drinks', 'Food', 'Snacks', 'Merch'].map((cat, i) => (
                  <button key={cat} className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white shadow-sm shadow-primary/30' : 'bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50'}`}>
                    {cat}
                  </button>
                ))}
              </div>
           </div>
           
           <div className="flex-1 overflow-y-auto px-4 pb-32 md:pb-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                {PRODUCTS.map((product) => (
                  <div 
                    key={product.id} 
                    onClick={() => product.stock > 0 && addToCart(product)}
                    className={`group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 hover:ring-primary/50 transition-all cursor-pointer ${product.stock === 0 ? 'opacity-60 grayscale-[50%] pointer-events-none' : ''}`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200 relative">
                       <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
                       <div className={`absolute top-2 right-2 flex items-center justify-center rounded-full px-2 py-0.5 backdrop-blur-sm ${product.stock === 0 ? 'bg-red-500/90 text-white' : 'bg-white/90 text-slate-700'}`}>
                         <span className="text-[10px] font-bold uppercase">{product.stock === 0 ? 'Expired' : `Qty: ${product.stock}`}</span>
                       </div>
                    </div>
                    <div className="flex flex-1 flex-col p-3">
                       <h3 className="text-sm font-semibold text-slate-900 line-clamp-1">{product.name}</h3>
                       <div className="mt-auto flex items-end justify-between pt-2">
                         <p className="text-base font-bold text-slate-700">${product.price.toFixed(2)}</p>
                         {product.stock > 0 ? (
                           <button className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                             <Plus className="w-4 h-4" />
                           </button>
                         ) : (
                           <span className="text-xs font-medium text-slate-500">Unavailable</span>
                         )}
                       </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Cart Sidebar */}
        <div className="fixed bottom-0 left-0 right-0 z-30 flex flex-col rounded-t-2xl bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.15)] border-t border-slate-200 transition-transform duration-300 ease-in-out md:static md:w-[380px] md:border-l md:border-t-0 md:shadow-none md:rounded-none">
          <div className="md:hidden flex items-center justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing">
            <div className="h-1.5 w-12 rounded-full bg-slate-200"></div>
          </div>
          
          <div className="flex flex-col h-full max-h-[85vh] md:max-h-full">
            <div className="px-4 pb-3 pt-2 md:pt-4 border-b border-slate-100">
               <div className="flex items-center justify-between mb-3">
                 <h2 className="text-lg font-bold text-slate-900">Invoice #INV-2023-001</h2>
                 <span className="px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700 rounded">Draft</span>
               </div>
               <div className="bg-slate-50 rounded-lg p-3">
                 <div className="flex justify-between items-start mb-2">
                   <div className="flex items-center gap-2">
                     <div className="size-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                       <User className="w-4 h-4" />
                     </div>
                     <div>
                       <p className="text-sm font-semibold text-slate-900">John Doe</p>
                       <p className="text-xs text-slate-500">+1 (555) 012-3456</p>
                     </div>
                   </div>
                   <button className="text-primary text-xs font-medium hover:underline">Edit</button>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-[2fr_1fr_1fr] px-4 py-2 bg-slate-50 text-xs font-medium text-slate-500 uppercase">
              <span>Item</span>
              <span className="text-center">Qty</span>
              <span className="text-right">Total</span>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 min-h-[150px]">
              {cart.map((item) => (
                <div key={item.product.id} className="grid grid-cols-[2fr_1fr_1fr] items-center gap-2 py-2 border-b border-slate-50 last:border-0">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900">{item.product.name}</span>
                    <span className="text-xs text-slate-500">${item.product.price.toFixed(2)}/unit</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center rounded-lg bg-slate-100 h-7 w-20">
                      <button onClick={() => updateQuantity(item.product.id, -1)} className="w-6 flex items-center justify-center text-slate-500 hover:text-slate-800">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-full text-center text-xs font-semibold text-slate-900">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, 1)} className="w-6 flex items-center justify-center text-primary hover:text-green-600">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right font-semibold text-slate-900">${(item.product.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto bg-white border-t border-slate-100 p-4 pb-6 md:pb-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
               <div className="flex flex-col gap-1 mb-4">
                 <div className="flex justify-between text-xs text-slate-500">
                   <span>Subtotal</span>
                   <span>${subtotal.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between text-xs text-slate-500">
                   <span>Tax (8%)</span>
                   <span>${tax.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between items-end mt-1">
                   <span className="text-sm font-bold text-slate-900">Grand Total</span>
                   <span className="text-2xl font-bold text-primary leading-none">${total.toFixed(2)}</span>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-3">
                 <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                   <Printer className="w-5 h-5" />
                   Save & Print
                 </button>
                 <button className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover transition-colors">
                   Checkout
                   <ArrowRight className="w-5 h-5" />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default POS;