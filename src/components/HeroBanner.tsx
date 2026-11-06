// "use client";

// import React from "react";
// import { ArrowRight, HeartHandshake, ShieldCheck, Users, Sparkles, Calendar } from "lucide-react";
// import Image from "next/image";

// export default function HeroBanner(): React.ReactElement {
//   const handleExploreClick = (): void => {
//     // Action when Explore Upcoming Events is clicked
//     console.log("Navigating to Upcoming Events...");
//   };

//   const handleCreateClick = (): void => {
//     // Action when Create Event is clicked
//     console.log("Navigating to Create Event...");
//   };

//   return (
//     <section className="relative overflow-hidden py-16 lg:py-24 bg-slate-900 text-white">
//       {/* Background Cover Photo with Dark Overlay Gradient */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&auto=format&fit=crop&q=80"
//           alt="Community Care & Volunteering"
//           className="w-full h-full object-cover opacity-25 filter blur-[1px]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-indigo-950/80" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto">
          
//           {/* Top Badge */}
//           <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
//             <Sparkles className="w-4 h-4 text-teal-400" />
//             <span>Empowering Local Action & Volunteering</span>
//           </div>

//           {/* Main Hero Headline */}
//           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
//             Connecting Hearts,{" "}
//             <span className="bg-gradient-to-r from-teal-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
//               Transforming Communities.
//             </span>
//           </h1>

//           {/* Subtitle / Purpose Description */}
//           <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
//             CareNest connects local volunteers with real-world social impact initiatives. Join winter clothing drives, food distribution, tree plantations, and health camps right in your neighborhood.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//             <button
//               onClick={handleExploreClick}
//               type="button"
//               className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
//             >
//               <span>Explore Upcoming Events</span>
//               <ArrowRight className="w-4 h-4" />
//             </button>

//             <button
//               onClick={handleCreateClick}
//               type="button"
//               className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
//             >
//               <HeartHandshake className="w-4 h-4 text-teal-400" />
//               <span>Host a Community Drive</span>
//             </button>
//           </div>

//           {/* Key Statistics Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-800/80">
//             <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60 backdrop-blur-md">
//               <div className="flex justify-center mb-2">
//                 <Users className="w-5 h-5 text-teal-400" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-extrabold text-white">2,500+</h3>
//               <p className="text-xs text-slate-400 font-medium">Active Volunteers</p>
//             </div>

//             <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60 backdrop-blur-md">
//               <div className="flex justify-center mb-2">
//                 <Calendar className="w-5 h-5 text-indigo-400" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-extrabold text-white">340+</h3>
//               <p className="text-xs text-slate-400 font-medium">Drives Completed</p>
//             </div>

//             <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60 backdrop-blur-md">
//               <div className="flex justify-center mb-2">
//                 <HeartHandshake className="w-5 h-5 text-teal-400" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-extrabold text-white">45,000+</h3>
//               <p className="text-xs text-slate-400 font-medium">Lives Impacted</p>
//             </div>

//             <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60 backdrop-blur-md">
//               <div className="flex justify-center mb-2">
//                 <ShieldCheck className="w-5 h-5 text-amber-400" />
//               </div>
//               <h3 className="text-2xl sm:text-3xl font-extrabold text-white">100%</h3>
//               <p className="text-xs text-slate-400 font-medium">Verified Support</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import React from "react";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Users,
  Sparkles,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function HeroBanner(): React.ReactElement {
  const handleExploreClick = (): void => {
    console.log("Navigating to Upcoming Events...");
  };

  const handleCreateClick = (): void => {
    console.log("Navigating to Create Event...");
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-slate-300 text-white">

      {/* Background Cover Photo */}
      <div className="absolute inset-0 z-0">

    <Image
   src="/CareNest Volunteers Sharing Warmth.png"
  alt="CareNest volunteers distributing winter blankets"
  fill
  priority
  sizes="100vw"
  className="object-cover opacity-40"
/>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/75 to-indigo-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Empowering Local Action & Volunteering</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
            Connecting Hearts,{" "}
            <span className="bg-linear-to-r from-teal-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Transforming Communities.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            CareNest connects local volunteers with real-world social impact
            initiatives. Join winter clothing drives, food distribution,
            tree plantations, and health camps right in your neighborhood.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">

            <button
              onClick={handleExploreClick}
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-linear-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Explore Upcoming Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleCreateClick}
              type="button"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-teal-400" />
              <span>Host a Community Drive</span>
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-800/80">

            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60 backdrop-blur-md">
              <div className="flex justify-center mb-2">
                <Users className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">2,500+</h3>
              <p className="text-xs text-slate-400 font-medium">Active Volunteers</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60 backdrop-blur-md">
              <div className="flex justify-center mb-2">
                <Calendar className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">340+</h3>
              <p className="text-xs text-slate-400 font-medium">Drives Completed</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60 backdrop-blur-md">
              <div className="flex justify-center mb-2">
                <HeartHandshake className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">45,000+</h3>
              <p className="text-xs text-slate-400 font-medium">Lives Impacted</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800/60 backdrop-blur-md">
              <div className="flex justify-center mb-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">100%</h3>
              <p className="text-xs text-slate-400 font-medium">Verified Support</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


