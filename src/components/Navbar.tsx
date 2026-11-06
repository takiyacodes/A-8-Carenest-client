// "use client";

// import React, { useState } from "react";
// import { 
//   Calendar, 
//   Moon, 
//   Sun, 
//   LogIn, 
//   LogOut, 
//   PlusCircle, 
//   Settings, 
//   BookmarkCheck,
//   Sparkles
// } from "lucide-react";
// import Image from "next/image";

// export default function Navbar(): React.ReactElement {
//   // Temporary state for UI preview (Will connect with BetterAuth later)
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
//   const [showDropdown, setShowDropdown] = useState<boolean>(false);

//   const toggleTheme = (): void => {
//     setIsDarkMode((prev) => !prev);
//     document.documentElement.classList.toggle("dark");
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
//         {/* Left: Brand Logo */}
//         <div className="flex items-center space-x-3 cursor-pointer group">
//           <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
//             <Sparkles className="w-5 h-5" />
//           </div>
//           <div>
//             <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
//               Care<span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">Nest</span>
//             </span>
//             <p className="text-[10px] tracking-wider uppercase text-slate-500 dark:text-slate-400 font-bold">
//               Social Action Hub
//             </p>
//           </div>
//         </div>

//         {/* Center: Upcoming Events Navigation Link */}
//         <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition-colors px-4 py-2 rounded-full hover:bg-teal-50/50 dark:hover:bg-slate-900">
//           <Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400" />
//           <span>Upcoming Events</span>
//         </div>

//         {/* Right: Theme Toggler & Auth Section */}
//         <div className="flex items-center space-x-3 sm:space-x-4">
          
//           {/* Theme Toggler */}
//           <button
//             onClick={toggleTheme}
//             className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300"
//             aria-label="Toggle Theme"
//             type="button"
//           >
//             {isDarkMode ? (
//               <Sun className="w-4 h-4 text-amber-400" />
//             ) : (
//               <Moon className="w-4 h-4 text-slate-700" />
//             )}
//           </button>

//           {/* Conditional Auth Section */}
//           {!isLoggedIn ? (
//             <button
//               onClick={() => setIsLoggedIn(true)}
//               className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-medium text-sm shadow-md shadow-teal-600/20 active:scale-95 transition-all duration-200"
//               type="button"
//             >
//               <LogIn className="w-4 h-4" />
//               <span>Login</span>
//             </button>
//           ) : (
//             <div className="relative flex items-center space-x-3 sm:space-x-4">
              
//               {/* Profile Dropdown Trigger */}
//               <div 
//                 className="relative cursor-pointer flex items-center space-x-2 py-1"
//                 onMouseEnter={() => setShowDropdown(true)}
//                 onMouseLeave={() => setShowDropdown(false)}
//               >
//                 <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-teal-500 to-indigo-600 shadow-md">
//                   <Image
//                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
//                     alt="User Profile"
//                     className="w-full h-full object-cover rounded-full border-2 border-white dark:border-slate-950"
//                   />
//                 </div>

//                 {/* Profile Dropdown Menu */}
//                 {showDropdown && (
//                   <div className="absolute right-0 top-full mt-1 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl py-2 z-50 text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
//                     <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800 mb-1">
//                       <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Signed in as</p>
//                       <p className="text-sm font-bold truncate text-slate-900 dark:text-white">Takia Jahan</p>
//                     </div>
//                     <div className="px-2 space-y-0.5">
//                       <div className="flex items-center space-x-2.5 px-3 py-2 text-sm rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer font-medium transition-colors">
//                         <PlusCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
//                         <span>Create Event</span>
//                       </div>
//                       <div className="flex items-center space-x-2.5 px-3 py-2 text-sm rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer font-medium transition-colors">
//                         <Settings className="w-4 h-4 text-teal-600 dark:text-teal-400" />
//                         <span>Manage Events</span>
//                       </div>
//                       <div className="flex items-center space-x-2.5 px-3 py-2 text-sm rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer font-medium transition-colors">
//                         <BookmarkCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
//                         <span>Joined Events</span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Logout Button */}
//               <button
//                 onClick={() => setIsLoggedIn(false)}
//                 className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs sm:text-sm font-semibold transition-colors"
//                 type="button"
//               >
//                 <LogOut className="w-4 h-4" />
//                 <span>Logout</span>
//               </button>
//             </div>
//           )}

//         </div>
//       </div>
//     </header>
//   );
// }




"use client";

import React, { useState } from "react";
import {
  Calendar,
  Moon,
  Sun,
  LogIn,
  LogOut,
  PlusCircle,
  Settings,
  BookmarkCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Navbar(): React.ReactElement {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Left: Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-linear-to-r from-teal-600 via-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-5 h-5" />
          </div>

          <div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Care
              <span className="bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">
                Nest
              </span>
            </span>

            <p className="text-[10px] tracking-wider uppercase text-slate-500 dark:text-slate-400 font-bold">
              Social Action Hub
            </p>
          </div>
        </div>

        {/* Center: Upcoming Events */}
        <div className="hidden sm:flex items-center space-x-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition-colors px-4 py-2 rounded-full hover:bg-teal-50/50 dark:hover:bg-slate-900">
          <Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span>Upcoming Events</span>
        </div>

        {/* Right: Theme & Auth */}
        <div className="flex items-center space-x-3 sm:space-x-4">

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300"
            aria-label="Toggle Theme"
            type="button"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Auth Section */}
          {!isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-linear-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-medium text-sm shadow-md shadow-teal-600/20 active:scale-95 transition-all duration-200"
              type="button"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          ) : (
            <div className="relative flex items-center space-x-3 sm:space-x-4">

              {/* Profile Dropdown */}
              <div
                className="relative cursor-pointer flex items-center space-x-2 py-1"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="w-10 h-10 rounded-full p-0.5 bg-linear-to-r from-teal-500 to-indigo-600 shadow-md overflow-hidden">

                  {/* Fixed Image */}
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                    alt="User Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full border-2 border-white dark:border-slate-950"
                  />
                </div>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl py-2 z-50 text-slate-800 dark:text-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">

                    <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800 mb-1">
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                        Signed in as
                      </p>

                      <p className="text-sm font-bold truncate text-slate-900 dark:text-white">
                        Takia Jahan
                      </p>
                    </div>

                    <div className="px-2 space-y-0.5">
                      <div className="flex items-center space-x-2.5 px-3 py-2 text-sm rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer font-medium transition-colors">
                        <PlusCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        <span>Create Event</span>
                      </div>

                      <div className="flex items-center space-x-2.5 px-3 py-2 text-sm rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer font-medium transition-colors">
                        <Settings className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        <span>Manage Events</span>
                      </div>

                      <div className="flex items-center space-x-2.5 px-3 py-2 text-sm rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer font-medium transition-colors">
                        <BookmarkCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        <span>Joined Events</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Logout */}
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setShowDropdown(false);
                }}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-full border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs sm:text-sm font-semibold transition-colors"
                type="button"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
