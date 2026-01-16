"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
  TruckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartIcon,
    challenge: "Fragmented patient data and delayed diagnostics.",
    solution:
      "Unified electronic health records (EHR) with AI-powered predictive diagnostics.",
    features: [
      "Patient Risk Stratification",
      "Medical Image Analysis",
      "Telehealth Platforms",
    ],
  },
  {
    id: "fintech",
    name: "FinTech",
    icon: BanknotesIcon,
    challenge: "Rising fraud attempts and complex regulatory compliance.",
    solution: "Real-time fraud detection systems and automated KYC pipelines.",
    features: [
      "Algorithmic Trading",
      "Blockchain Ledgers",
      "Credit Scoring Models",
    ],
  },
  {
    id: "retail",
    name: "Retail",
    icon: ShoppingCartIcon,
    challenge: "Low customer retention and inventory mismanagement.",
    solution: "Personalized recommendation engines and smart supply chains.",
    features: [
      "Dynamic Pricing",
      "Visual Search",
      "Customer Sentiment Analysis",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Cog6ToothIcon,
    challenge: "Unplanned downtime and quality control issues.",
    solution: "IoT-enabled predictive maintenance and computer vision QC.",
    features: [
      "Digital Twins",
      "Smart Factory IoT",
      "Supply Chain Optimization",
    ],
  },
];

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeIndustry = industries.find((ind) => ind.id === activeTab);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar / Tabs */}
      <div className="lg:w-1/3 flex flex-col gap-2">
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => setActiveTab(ind.id)}
            className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
              activeTab === ind.id
                ? "bg-indigo-600/10 border border-indigo-500/50 text-white"
                : "bg-white/5 border border-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            <ind.icon
              className={`w-6 h-6 ${
                activeTab === ind.id ? "text-indigo-400" : "text-gray-500"
              }`}
            />
            <span className="font-semibold text-lg">{ind.name}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="lg:w-2/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <activeIndustry.icon className="w-8 h-8 text-indigo-400" />
              <h3 className="text-3xl font-bold">{activeIndustry.name}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/10">
                <div className="flex items-center gap-2 mb-3 text-red-400">
                  <ExclamationTriangleIcon className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase">
                    The Challenge
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {activeIndustry.challenge}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/10">
                <div className="flex items-center gap-2 mb-3 text-green-400">
                  <CheckCircleIcon className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase">
                    Our Solution
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {activeIndustry.solution}
                </p>
              </div>
            </div>

            <h4 className="text-lg font-bold mb-4">Key Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeIndustry.features.map((feature, i) => (
                <div
                  key={i}
                  className="px-4 py-3 rounded-lg bg-white/5 border border-white/5 text-sm font-medium text-gray-300 text-center"
                >
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
