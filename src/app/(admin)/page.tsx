
import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";

export const metadata: Metadata = {
  title: "Financial Dashboard | Momota - Next.js Dashboard Template",
  description: "This is Next.js Home for Momota Dashboard Template",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <EcommerceMetrics />
    
      </div>
    </div>
  );
}
