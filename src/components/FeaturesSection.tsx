"use client";

import React from "react";
import { Users, CalendarCheck, ShieldAlert, Compass, Sparkles } from "lucide-react";

export default function FeaturesSection(): React.ReactElement {
  const featuresList = [
    {
      icon: <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Community-Led Drives",
      description: "Every citizen can organize cleanups, winter drives, and food distributions in their local area in minutes.",
      badgeColor: "bg-teal-50 dark:bg-teal-950/40 border-teal-100 dark:border-teal-900/50"
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "One-Click Participation",
      description: "Join verified social initiatives with a single click and coordinate directly with local volunteer leaders.",
      badgeColor: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/50"
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Creator Controls",
      description: "Manage, update, and track participation for your own initiatives with built-in creator authorization.",
      badgeColor: "bg-teal-50 dark:bg-teal-950/40 border-teal-100 dark:border-teal-900/50"
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Upcoming Only Discovery",
      description: "Strict future-date filters guarantee you will always discover upcoming active initiatives that need volunteers.",
      badgeColor: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/50"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Platform Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
            Built for Grassroots Action
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed px-2">
            A frictionless platform connecting compassionate citizens with direct local community initiatives.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.badgeColor}`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative bottom indicator line */}
              <div className="w-8 h-1 bg-linear-to-r from-teal-500 to-indigo-600 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}