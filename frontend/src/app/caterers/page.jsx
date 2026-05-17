"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CaterersPage() {
  const [caterers, setCaterers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState(1500);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
//fetch data from backend
    function fetchData(){
    fetch('https://catering-services.onrender.com/api/caterers')
      .then((res) => res.json())
      .then((data) => {
        setCaterers(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
    }

    fetchData()
  }, []);

  const filteredCaterers = caterers.filter((c) => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
    c.pricePerPlate <= maxPrice
  );

  if (loading) return <div className="flex justify-center items-center h-screen text-xl font-semibold">Loading awesome food...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Find a Caterer</h1>

     {/* search bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 mb-10 items-center">
          <input 
            type="text" 
            placeholder="Search by name (e.g. Royal)..." 
            className="w-full md:w-1/2 p-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 text-black"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              Max Price per Plate: <span className="text-orange-600">₹{maxPrice}</span>
            </label>
            <input 
              type="range" min="200" max="2000" step="50" 
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>
        </div>

        {/* results grid */}
        {filteredCaterers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaterers.map((c) => (
              <Link href={`/caterers/${c._id}`} key={c._id} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-1 h-full">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{c.name}</h2>
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">⭐ {c.rating}</span>
                    </div>
                    <p className="text-gray-500 text-sm flex items-center mb-4">📍 {c.location}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {c.cuisines.map(cuisine => (
                        <span key={cuisine} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                          {cuisine}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Starts from</span>
                      <span className="text-lg font-bold text-orange-600">₹{c.pricePerPlate}/plate</span>
                    </div>
                    <p className="text-xs text-orange-500 mt-4 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Details →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">No caterers found. Try adjusting your search or budget.</div>
        )}
      </div>
    </div>
  );
}
