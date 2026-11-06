"use client";

import React, { useState } from "react";
import { Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function NewsletterSection(): React.ReactElement {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white text-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container with White Background & Subtle Border */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-xl shadow-slate-200/50 text-center">
          
          {/* Subtle Background Glow Elements */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>STAY CONNECTED</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
              Get Notified About <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">Local Community Drives</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
              Subscribe to receive instant alerts when new winter clothing distributions, neighborhood cleanups, or emergency relief camps are organized near you.
            </p>

            {/* Form or Success State */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-linear-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-teal-600/25 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Thank you! You have successfully subscribed to community alerts.</span>
              </div>
            )}

            {/* Footer Note */}
            <p className="text-xs text-slate-400 font-medium mt-4">
              No spam guaranteed. Unsubscribe at any time with one click.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}