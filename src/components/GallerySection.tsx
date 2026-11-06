"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  category: string;
  impact: string;
  imageUrl: string;
}

export default function GallerySection(): React.ReactElement {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const galleryData: GalleryPhoto[] = [
    {
      id: "g1",
      title: "Winter Care & Warm Clothing Drive",
      location: "Mirpur 10, Dhaka",
      category: "Relief",
      impact: "450+ Blankets",
      imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&auto=format&fit=crop&q=80"
    },
    {
      id: "g2",
      title: "Clean Riverbank & Public Park Drive",
      location: "Dhanmondi Lake, Dhaka",
      category: "Environment",
      impact: "120kg Waste Cleared",
      imageUrl: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=900&auto=format&fit=crop&q=80"
    },
    {
      id: "g3",
      title: "Urban Greenery & Tree Plantation",
      location: "Uttara Sector 7, Dhaka",
      category: "Environment",
      impact: "300 Saplings Planted",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&auto=format&fit=crop&q=80"
    },
    {
      id: "g4",
      title: "Free Healthcare & Eye Examination Camp",
      location: "Old Dhaka",
      category: "Health",
      impact: "280 Patients Served",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80"
    },
    {
      id: "g5",
      title: "Nutritious Food Package Distribution",
      location: "Mohammadpur, Dhaka",
      category: "Relief",
      impact: "600 Meals Served",
      imageUrl: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=900&auto=format&fit=crop&q=80"
    },
    {
      id: "g6",
      title: "Community Education & Book Share",
      location: "Gulshan Community Center",
      category: "Education",
      impact: "1,200 Books Distributed",
      imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=900&auto=format&fit=crop&q=80"
    }
  ];

  const categories = ["All", "Relief", "Environment", "Health", "Education"];

  const filteredItems = activeFilter === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 sm:py-24 bg-white text-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Subtle Gradient Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Stories of Real Neighborhood Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Captured Moments of <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">Grassroots Change</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-linear-to-r from-teal-600 to-indigo-600 text-white shadow-lg shadow-teal-500/20"
                    : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-md hover:shadow-xl transition-all duration-500 h-80 sm:h-96"
            >
              {/* Next.js Image Component */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Dark Overlay Gradient for Card Image Readability */}
              <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/40 to-transparent opacity-80" />

              {/* Top Badge Info */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-teal-800 border border-teal-200 backdrop-blur-md">
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="flex items-center space-x-1.5 text-xs font-semibold text-teal-300 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors line-clamp-1">
                  {item.title}
                </h3>

                <div className="inline-flex items-center space-x-2 text-xs font-medium text-slate-200 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Verified Result: <strong className="text-white">{item.impact}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}