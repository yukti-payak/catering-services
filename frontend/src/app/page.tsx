"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-100">
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-black text-slate-800 tracking-tight">
            Caterers<span className="text-orange-600">NearMe</span>
          </Link>
          <Link
            href="/caterers"
            className="bg-slate-900 text-white text-sm px-5 py-2.5 rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            Browse Vendors
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-28 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider">
              ✨ Premium Culinary Services
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Good food is the foundation of{" "}
              <span className="text-orange-600 block sm:inline">genuine happiness.</span>
            </h1>

            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              From intimate backyard gatherings to grand corporate celebrations, we connect you with the city's finest culinary artists to make your events truly unforgettable.
            </p>

            <div className="pt-4">
              <Link
                href="/caterers"
                className="inline-block bg-orange-600 text-white text-base px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/30 transition-all duration-200"
              >
                Explore Caterers &rarr;
              </Link>
            </div>
          </div>


          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-square bg-gradient-to-tr from-orange-100 to-amber-50 rounded-3xl border border-orange-200/40 p-8 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="space-y-2">
                <div className="h-4 w-1/3 bg-orange-200/60 rounded-lg animate-pulse" />
                <div className="h-8 w-2/3 bg-slate-800 rounded-xl" />
              </div>
              <div className="self-end bg-white p-4 rounded-2xl shadow-md border border-slate-100 max-w-[240px] translate-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase">Top Rated</p>
                <p className="text-sm font-extrabold text-slate-800 mt-0.5">50+ Verified Caterers</p>
                <div className="flex gap-1 mt-2 text-amber-500 text-xs">⭐⭐⭐⭐★</div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
