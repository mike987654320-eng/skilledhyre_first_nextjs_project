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
  MegaphoneIcon,
  GlobeAltIcon,
  HomeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CakeIcon,
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
  {
    id: "education",
    name: "Education",
    icon: AcademicCapIcon,
    challenge:
      "Traditional education systems face challenges with student engagement and administrative complexity.",
    solution:
      "AI-driven personalized learning ecosystems that enhance engagement and streamline administration.",
    features: ["Interactive Learning", "AI Personalization", "LMS Integration"],
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: TruckIcon,
    challenge:
      "Manual oversight and fragmented data leading to operational downtime.",
    solution:
      "Automated, intelligent ecosystems with real-time tracking and route optimization.",
    features: [
      "Real-Time Tracking",
      "Route Optimization",
      "Warehouse Integration",
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: MegaphoneIcon,
    challenge:
      "Low audience engagement and operational costs in content workflows.",
    solution:
      "Immersive, personalized media experiences with AI-driven insights and automated workflows.",
    features: [
      "Content Platforms",
      "AI Personalization",
      "Omni-channel Architecture",
    ],
  },
  {
    id: "travel",
    name: "Travel",
    icon: GlobeAltIcon,
    challenge: "Complexity in trip planning and fragmented booking systems.",
    solution:
      "Seamless digital ecosystems from trip planning to post-travel engagement.",
    features: ["Booking Platforms", "Package Management", "AI Recommendations"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: HomeIcon,
    challenge:
      "Inefficient property discovery and disconnected buying/selling experiences.",
    solution:
      "Advanced digital solutions like virtual tours and automated property management.",
    features: ["Listing Platforms", "Smart Management", "Virtual Tours"],
  },
  {
    id: "hr",
    name: "HR",
    icon: UserGroupIcon,
    challenge: "Inefficient manual recruitment and slow candidate discovery.",
    solution:
      "Intelligent automation for candidate sourcing and recruitment pipeline tracking.",
    features: ["Applicant Tracking", "AI Resume Screening", "HRMS Solutions"],
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: ShieldCheckIcon,
    challenge: "Complex claims processing and inefficient risk assessment.",
    solution:
      "Digital self-service portals and automated claims management systems.",
    features: ["Policy Management", "Claims Automation", "AI Risk Assessment"],
  },
  {
    id: "food",
    name: "Food",
    icon: CakeIcon,
    challenge: "Operational delays and complex menu/order management.",
    solution:
      "Seamless online ordering and integrated restaurant management systems.",
    features: ["Online Ordering", "POS Integration", "Loyalty Programs"],
  },
];

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeIndustry = industries.find((ind) => ind.id === activeTab);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar / Tabs */}
      <div
        className="lg:w-1/3 flex flex-col gap-2"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
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
              className={`w-6 h-6 flex-shrink-0 ${
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
              <activeIndustry.icon className="w-8 h-8 text-indigo-400 flex-shrink-0" />
              <h3 className="text-3xl font-bold">{activeIndustry.name}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/10">
                <div className="flex items-center gap-2 mb-3 text-red-400">
                  <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
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
                  <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
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
                  className="px-4 py-3 rounded-lg bg-white/5 border border-white/5 text-sm font-medium text-gray-300 text-center flex items-center justify-center"
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
