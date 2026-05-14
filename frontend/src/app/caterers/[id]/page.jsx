"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CatererDetails() {
  const { id } = useParams();
  const [caterer, setCaterer] = useState(null);

  useEffect(() => {
    fetch(`https://catering-services.onrender.com/api/caterers/${id}`)
      .then(res => res.json())
      .then(data => setCaterer(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!caterer) return <div className="p-10 text-center text-gray-600">Loading details....</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/caterers" className="text-orange-600 hover:text-orange-700 font-medium mb-8 inline-block">
          ← Back to Search
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{caterer.name}</h1>
              <p className="text-lg text-gray-500">📍 {caterer.location}</p>
            </div>
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold">
              ⭐ {caterer.rating}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-orange-50 p-6 rounded-2xl">
              <p className="text-sm text-orange-600 font-semibold uppercase tracking-wider">Price Per Plate</p>
              <p className="text-3xl font-extrabold text-gray-900">₹{caterer.pricePerPlate}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl">
              <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Status</p>
              <p className="text-3xl font-extrabold text-gray-900">Available</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Cuisines Offered</h3>
          <div className="flex flex-wrap gap-3">
            {caterer.cuisines?.map(item => (
              <span key={item} className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm font-medium border border-gray-200">
                {item}
              </span>
            ))}
          </div>

          <button className="w-full mt-10 bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200">
            Contact Caterer
          </button>
        </div>
      </div>
    </div>
  );
}
