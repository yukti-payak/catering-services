"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

export default function CaterersPage() {
  const [caterers, setCaterers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const [sortBy, setSortBy] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Optimized async/await fetch
  useEffect(() => {
    const loadCaterers = async () => {
      try {
        const response = await fetch('https://catering-services.onrender.com/api/caterers');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCaterers(data);
      } catch (error) {
        console.error("Failed to fetch caterers list:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCaterers();
  }, []);

// Performance optimized filtering and inline sorting execution
const filteredCaterers = useMemo(() => {

  const matchedItems = caterers.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  let items = [...matchedItems];

  if (sortBy === "asc") {
    items.sort((a, b) => a.pricePerPlate - b.pricePerPlate);
  } else if (sortBy === "desc") {
    items.sort((a, b) => b.pricePerPlate - a.pricePerPlate);
  }

  return items;
}, [caterers, searchTerm, sortBy]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-600 animate-pulse">Loading menu listings...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">Find a Caterer</h1>
          <p className="text-slate-500 mt-2">Discover the perfect taste for your special event</p>
        </header>

      {/* Filters Section */}
        <section className="bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 mb-10 items-center border border-slate-100">
          {/* Search Bar Input Container */}
          <div className="w-full md:w-1/2">
            <input 
              type="text" 
              value={searchTerm}
              placeholder="Search caterers by name..." 
              className="w-full p-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 text-slate-800 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3">
            <span className="text-sm font-semibold text-slate-500 whitespace-nowrap">Sort by Price:</span>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setSortBy("asc")}
                className={`flex-1 sm:flex-none px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                  sortBy === "asc"
                    ? "bg-orange-600 text-white shadow-md shadow-orange-200"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Low to High
              </button>

              <button
                type="button"
                onClick={() => setSortBy("desc")}
                className={`flex-1 sm:flex-none px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                  sortBy === "desc"
                    ? "bg-orange-600 text-white shadow-md shadow-orange-200"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                High to Low
              </button>
            </div>
          </div>
        </section>

        {/* Dynamic Display Grid */}
        {filteredCaterers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaterers.map((vendor) => (
              <Link href={`/caterers/${vendor._id}`} key={vendor._id} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300 border border-slate-100 group-hover:-translate-y-1 h-full flex flex-col justify-between p-6">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <h2 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors line-clamp-1">{vendor.name}</h2>
                      <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-md shrink-0">
                        ⭐ {vendor.rating}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 text-sm flex items-center mb-4">📍 {vendor.location}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {vendor.cuisines.map((cuisine) => (
                        <span key={cuisine} className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium">
                          {cuisine}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Base Price</span>
                    <span className="text-lg font-bold text-orange-600">₹{vendor.pricePerPlate}/plate</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">No catering service matches your preferences.</p>
          </div>
        )}
      </div>
    </main>
  );
}
