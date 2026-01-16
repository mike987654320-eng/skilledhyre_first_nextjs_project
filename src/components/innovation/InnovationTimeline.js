"use client";
import { motion } from "framer-motion";
import {
  LightBulbIcon,
  BeakerIcon,
  CpuChipIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    title: "Ideation & Strategy",
    description: "Identifying market gaps and defining the core problem.",
    icon: LightBulbIcon,
  },
  {
    id: 2,
    title: "POC & Validation",
    description: "Rapid testing of hypotheses to ensure viability.",
    icon: BeakerIcon,
  },
  {
    id: 3,
    title: "Prototyping",
    description: "Building functional MVPs with production-grade code.",
    icon: CpuChipIcon,
  },
  {
    id: 4,
    title: "Scale & Optimize",
    description: "Deploying scalable architectures for global reach.",
    icon: RocketLaunchIcon,
  },
];

export default function InnovationTimeline() {
  return (
    <div className="relative py-10">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 -translate-y-1/2 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-indigo-500/30 flex items-center justify-center mb-6 relative transition-all duration-300 group-hover:border-indigo-500 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]">
              <step.icon className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors" />
              <div className="absolute -bottom-3 bg-[#0a0a0a] px-2 text-xs font-mono text-indigo-500 border border-indigo-500/30 rounded-full">
                0{step.id}
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-sm text-gray-400 max-w-[200px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
