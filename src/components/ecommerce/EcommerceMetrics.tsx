"use client";
import React from "react";
import { FunnelIcon, ChartBarIcon, ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export const EcommerceMetrics = () => {
  return (
    <div className="w-full px-4 pt-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-black">WELCOME, MOMOTA</h2>
        <div className="flex items-center gap-2">
          {/* Filter Button */}
          <button className="flex items-center gap-2 bg-[#0E032D] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            <FunnelIcon className="w-5 h-5 text-pink-500" />
            <span className="text-sm">Filter</span>
          </button>
          {/* Analytics Button */}
          <button className="flex items-center gap-2 bg-[#0E032D] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            <ChartBarIcon className="w-5 h-5 text-pink-500" />

            <span className="text-sm">Analytics</span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index} 
            className="relative w-full max-w-[250px] h-36 bg-[#0E032D] text-white rounded-xl p-4 pt-3 mt-10 flex items-center border border-gray-700 shadow-lg mx-auto transition-all transform hover:scale-105 hover:shadow-[0px_4px_20px_2px_rgba(255,0,0,0.7)]"
          >
            {/* Left Icon (Warning) */}
            <div className="flex items-center justify-center w-10 h-10 bg-pink-600 rounded-full absolute left-3 top-1/2 transform -translate-y-1/2">
              <ExclamationTriangleIcon className="w-6 h-6 text-white" />
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col ml-16 space-y-1 text-left">
              <span className="text-xs text-white">Invoice due</span>
              <h4 className="text-lg font-bold">৳ 0.00</h4>
            </div>
            
            {/* Top Right Icon (Info) */}
            <div className="absolute top-2 right-3 flex items-center justify-center w-7 h-7 bg-blue-500 rounded-full">
              <InformationCircleIcon className="w-5 h-5 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
