"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          
        
          <div className="md:col-span-1 flex flex-col gap-3">
            <Link href="/" className="text-xl font-bold text-white tracking-tight hover:opacity-90 transition-opacity">
              Caterers<span className="text-orange-500">NearMe</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              From intimate backyard gatherings to grand corporate celebrations, we connect you with the city's finest culinary artists.
            </p>
          </div>

        
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/caterers" className="hover:text-orange-500 transition-colors duration-200">
                  Browse Vendors
                </Link>
              </li>
               <li>
                <Link href="/caterers" className="hover:text-orange-500 transition-colors duration-200">
                  Explore Caterers
                </Link>
              </li>
             
            </ul>
          </div>

 
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="text-orange-500 shrink-0 mt-0.5">📍</span>
                <span>Mumbai, Maharashtra, India</span>
              </li>

              <li className="flex items-center gap-2.5">
                <span className="text-orange-500 shrink-0">✉️</span>
                <a href="mailto:support@caterersnearme.com" className="hover:text-orange-500 transition-colors">
                  contact@cateringservices.com
                </a>
              </li>
            </ul>
          </div>


<div>
  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Follow Us</h3>
  <div className="flex gap-3">
    
    <button 
      type="button"
      className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-orange-600 text-white transition-all duration-200 shadow-sm cursor-default"
      aria-label="Facebook"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
      </svg>
    </button>

    <button 
      type="button"
      className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-orange-600 text-white transition-all duration-200 shadow-sm cursor-default"
      aria-label="Instagram"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    </button>

    
    <button 
      type="button"
      className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-orange-600 text-white transition-all duration-200 shadow-sm cursor-default"
      aria-label="X"
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </button>
  </div>
</div>

        </div>

     
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} CaterersNearMe. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}