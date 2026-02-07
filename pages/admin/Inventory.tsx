import React from 'react';
import { Search, Filter, Plus, Edit2, Trash2, Bell } from 'lucide-react';
import { PRODUCTS, CURRENT_ADMIN_AVATAR } from '../../mockData';

const Inventory: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col h-full relative">
      <header className="flex shrink-0 items-center justify-between px-6 py-3 bg-white border-b border-slate-100 z-20 shadow-sm">
        <div>
          <h1 className="text-lg font-bold leading-tight">Inventory</h1>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span className="size-2 rounded-full bg-primary"></span>
            <span>Admin: Sarah J.</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
            <img src={CURRENT_ADMIN_AVATAR} alt="User Avatar" className="h-full w-full object-cover" />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-hidden relative bg-background-light">
        <div className="flex flex-col sm:flex-row gap-4 p-4 border-b border-slate-200 bg-white z-10">
          <div className="relative w-full sm:flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              className="block w-full rounded-xl border-none bg-white py-3 pl-10 pr-12 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6" 
              placeholder="Search by name, ID or category..." 
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-primary transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <button className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-md shadow-primary/30 hover:bg-primary-hover transition-colors active:scale-[0.98]">
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>

        <div className="flex-1 overflow-auto px-4 pb-4 pt-4">
          <div className="min-w-full inline-block align-middle">
            <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider w-16">ID</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Category</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Price</th>
                    <th scope="col" className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Stock</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Expiry</th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {PRODUCTS.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap text-xs font-mono text-slate-500">{product.id}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 flex-shrink-0 rounded-lg bg-slate-100 overflow-hidden">
                            <img className="h-full w-full object-cover" src={product.image} alt={product.name} />
                          </div>
                          <div className="text-sm font-medium text-slate-900">{product.name}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap hidden sm:table-cell">
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ring-opacity-20 ${
                          product.category === 'Beverages' ? 'bg-green-50 text-green-700 ring-green-600' : 'bg-yellow-50 text-yellow-700 ring-yellow-600'
                        }`}>
                          {product.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600">${product.price.toFixed(2)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-center">
                        <span className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-bold min-w-[2rem] ${
                           product.stock === 0 ? 'bg-red-100 text-red-600' : 
                           product.stock < 10 ? 'bg-yellow-50 text-yellow-600' : 
                           'bg-slate-100 text-slate-700'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap hidden md:table-cell">
                        {product.status === 'expired' ? (
                          <div className="flex items-center gap-1.5">
                            <span className="size-2 rounded-full bg-red-500"></span>
                            <span className="text-xs font-medium text-red-600">Expired</span>
                          </div>
                        ) : product.expiryDate ? (
                          <span className="text-xs text-slate-500">{product.expiryDate}</span>
                        ) : <span className="text-xs text-slate-400">-</span>}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="text-slate-400 hover:text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 sm:px-6">
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">{PRODUCTS.length}</span> of <span className="font-medium">48</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0">
                        <span className="sr-only">Previous</span>
                        &larr;
                      </a>
                      <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">1</a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0">2</a>
                      <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0">3</a>
                      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 focus:outline-offset-0">...</span>
                      <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0">
                        <span className="sr-only">Next</span>
                        &rarr;
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inventory;