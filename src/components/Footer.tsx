"use client";

import React from "react";
import { Sparkles, MapPin, Heart, ShieldCheck, Calendar, Users,  } from "lucide-react";

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Bio (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-r from-teal-600 via-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  Care<span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">Nest</span>
                </span>
                <p className="text-[10px] tracking-wider uppercase text-slate-500 font-bold">
                  Community Action Hub
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              A decentralized civic engagement platform empowering local changemakers to organize, mobilize, and track grassroots humanitarian initiatives seamlessly.
            </p>

            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>Dhaka, Bangladesh • Nationwide Impact</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li className="hover:text-teal-600 transition-colors cursor-pointer flex items-center space-x-2">
                <Calendar className="w-3.5 h-3.5 text-teal-600" />
                <span>Explore Events</span>
              </li>
              <li className="hover:text-teal-600 transition-colors cursor-pointer flex items-center space-x-2">
                <Users className="w-3.5 h-3.5 text-indigo-600" />
                <span>Host a Drive</span>
              </li>
              <li className="hover:text-teal-600 transition-colors cursor-pointer">
                <span>Volunteer Dashboard</span>
              </li>
              <li className="hover:text-teal-600 transition-colors cursor-pointer">
                <span>Impact Metrics</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Active Focus Categories (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Initiative Focus
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>Winter Clothing & Blanket Aid</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Urban Sanitation & Clean-up</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                <span>Neighborhood Tree Plantation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Emergency Food Distribution</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Community Badge & Status (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Transparency
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every civic action is verified. Connect with grassroots volunteers and drive direct community transformation.
            </p>
            <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>100% Verified Community Driven</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium text-center sm:text-left">
          <p>© 2026 CareNest. Built with dedication for community empowerment and social welfare.</p>
          <div className="flex items-center space-x-1.5 text-slate-600 font-semibold">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>for a better society</span>
          </div>
        </div>

      </div>
    </footer>
  );
}