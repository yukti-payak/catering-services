"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CatererDetails() {
  const { id } = useParams();

  const [caterer, setCaterer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCaterer = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://catering-services.onrender.com/api/caterers/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch caterer details");
        }

        const data = await response.json();
        setCaterer(data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCaterer();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg font-medium text-gray-600">
          Loading details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg font-medium text-red-500">{error}</p>
      </div>
    );
  }

  if (!caterer) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg font-medium text-gray-500">
          Caterer not found
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/caterers"
          className="inline-flex items-center gap-2 mb-8 text-orange-600 hover:text-orange-700 font-medium transition"
        >
          ← Back to Search
        </Link>

        <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {caterer.name}
                </h1>

                <p className="mt-2 text-gray-500 text-lg">
                  📍 {caterer.location}
                </p>
              </div>

              <div className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-bold text-lg w-fit">
                ⭐ {caterer.rating}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <InfoCard
              title="Price Per Plate"
              value={`₹${caterer.pricePerPlate}`}
              bg="bg-orange-50"
              text="text-orange-600"
            />

            <InfoCard
              title="Availability"
              value="Available"
              bg="bg-blue-50"
              text="text-blue-600"
            />
          </div>

          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Cuisines Offered
            </h2>

            <div className="flex flex-wrap gap-3">
              {caterer.cuisines?.map((cuisine) => (
                <span
                  key={cuisine}
                  className="px-5 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium hover:bg-orange-100 hover:text-orange-700 transition"
                >
                  {cuisine}
                </span>
              ))}
            </div>

            <button className="w-full mt-10 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl transition duration-300 shadow-lg shadow-orange-200">
              Contact Caterer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value, bg, text }) {
  return (
    <div className={`${bg} p-6 rounded-2xl`}>
      <p className={`text-sm font-semibold uppercase tracking-wider ${text}`}>
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-extrabold text-gray-900">
        {value}
      </h3>
    </div>
  );
}
