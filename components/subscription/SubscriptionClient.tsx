"use client";

import { PricingTable } from "@clerk/nextjs";

export default function SubscriptionClient() {
  return (
    <main className="w-full px-8 lg:px-12 space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-2xl font-semibold text-white">Choose your plan</h1>
      </section>

      {/* Pricing Table */}
      <section id="pricing-table" className="mt-6">
        <div className="w-full">
          <PricingTable
            appearance={{
              layout: {
                columns: 3,
              },
              elements: {
                pricingTableCard:
                  "!bg-[#181A20] !border !border-[#2A2E37] !rounded-2xl !shadow-md",
                pricingTableCardButton:
                  "!bg-[#8B5CF6] hover:!bg-[#7C3AED] !text-white !rounded-xl",
                pricingTableCardTitle: "!text-white",
                pricingTableCardPrice: "!text-white !font-bold",
                pricingTableCardDescription: "!text-gray-400",
              },
            }}
          />
        </div>
      </section>
    </main>
  );
}
