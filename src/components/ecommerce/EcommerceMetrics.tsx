/*"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";

export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> *
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Customers
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              3,782
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> 

      {/* <!-- Metric Item Start --> 
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Orders
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              5,359
            </h4>
          </div>


         {/*--------------new section added------------------*

       {/*--------------new section ended-----------------
          <Badge color="error">
            <ArrowDownIcon className="text-error-500" />
            9.05%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> *
  );
};
-----------*/
"use client";
import React from "react";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";
import { FunnelIcon } from "@heroicons/react/24/outline"; 

export const EcommerceMetrics = () => {
  return (
    <div className="w-full px-4 pt-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black">WELLCOME,MOMOTA</h2>
        <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg">
          <FunnelIcon className="size-6" />
          <span className="text-sm">Filter</span>
        </button>
      </div>

      {/* Section 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
        <div className="w-full h-full rounded-2xl border border-gray-700 bg-black p-5 dark:border-gray-600 md:p-6 flex flex-col items-center text-center text-white">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl">
            <GroupIcon className="text-white size-8" />
          </div>
          <div className="flex flex-col items-center justify-center mt-3 w-full">
            <span className="text-sm text-gray-400">Total Sales</span>
            <h4 className="mt-2 font-bold text-white text-xl">৳ 0.00</h4>
          </div>
        </div>

        <div className="w-full h-full rounded-2xl border border-gray-700 bg-black p-5 dark:border-gray-600 md:p-6 flex flex-col items-center text-center text-white">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl">
            <BoxIconLine className="text-white size-8" />
          </div>
          <div className="flex flex-col items-center justify-center mt-3 w-full">
            <span className="text-sm text-gray-400">Net</span>
            <h4 className="mt-2 font-bold text-white text-xl">৳ 0.00</h4>
          </div>
        </div>

        <div className="w-full h-full rounded-2xl border border-gray-700 bg-black p-5 dark:border-gray-600 md:p-6 flex flex-col items-center text-center text-white">
          <div className="flex items-center justify-center w-16 h-16 bg-red-700 rounded-xl">
            <ArrowDownIcon className="text-white size-8" />
          </div>
          <div className="flex flex-col items-center justify-center mt-3 w-full">
            <span className="text-sm text-gray-400">Invoice Due</span>
            <h4 className="mt-2 font-bold text-white text-xl">৳ 0.00</h4>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6 mt-6">
        <div className="w-full h-full rounded-2xl border border-gray-700 bg-black p-5 dark:border-gray-600 md:p-6 flex flex-col items-center text-center text-white">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-700 rounded-xl">
            <ArrowUpIcon className="text-white size-8" />
          </div>
          <div className="flex flex-col items-center justify-center mt-3 w-full">
            <span className="text-sm text-gray-400">Total Sell Return</span>
            <h4 className="mt-2 font-bold text-white text-xl">৳ 0.00</h4>
          </div>
        </div>

        <div className="w-full h-full rounded-2xl border border-gray-700 bg-black p-5 dark:border-gray-600 md:p-6 flex flex-col items-center text-center text-white">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl">
            <GroupIcon className="text-white size-8" />
          </div>
          <div className="flex flex-col items-center justify-center mt-3 w-full">
            <span className="text-sm text-gray-400">Total Customers</span>
            <h4 className="mt-2 font-bold text-white text-xl">৳ 0.00</h4>
          </div>
        </div>

        <div className="w-full h-full rounded-2xl border border-gray-700 bg-black p-5 dark:border-gray-600 md:p-6 flex flex-col items-center text-center text-white">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl">
            <BoxIconLine className="text-white size-8" />
          </div>
          <div className="flex flex-col items-center justify-center mt-3 w-full">
            <span className="text-sm text-gray-400">Pending Orders</span>
            <h4 className="mt-2 font-bold text-white text-xl">৳ 0.00</h4>
          </div>
        </div>
      </div>

      {/* Section 3 */}
     
    </div>
  );
};
