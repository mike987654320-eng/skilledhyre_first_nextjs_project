"use client";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  PaintBrushIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "We analyze your goals, user needs, and technical requirements to build a solid roadmap.",
    icon: MagnifyingGlassIcon,
    color: "bg-blue-500",
    text: "text-blue-400",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Creating intuitive, high-fidelity prototypes that align with your brand identity.",
    icon: PaintBrushIcon,
    color: "bg-purple-500",
    text: "text-purple-400",
  },
  {
    id: 3,
    title: "Agile Development",
    description:
      "Iterative coding sprints with regular feedback loops to ensure alignment.",
    icon: CommandLineIcon,
    color: "bg-emerald-500",
    text: "text-emerald-400",
  },
  {
    id: 4,
    title: "Deployment & Support",
    description:
      "Seamless launch, performance optimization, and ongoing maintenance.",
    icon: RocketLaunchIcon,
    color: "bg-orange-500",
    text: "text-orange-400",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative py-12">
      {/* Connector Line (Desktop) */}
      <div className="hidden lg:block absolute top-[48px] left-0 w-full h-0.5 bg-white/10 z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col lg:items-center relative"
          >
            {/* Number/Icon Bubble */}
            <div className="relative mb-6 flex items-center">
              <div
                className={`w-24 h-24 rounded-2xl ${step.color}/10 border border-${step.color}/20 flex items-center justify-center backdrop-blur-sm z-10`}
              >
                <step.icon className={`w-10 h-10 ${step.text}`} />
              </div>

              {/* Mobile Connector Line */}
              {index !== steps.length - 1 && (
                <div className="lg:hidden absolute top-24 left-1/2 w-0.5 h-full bg-white/10 -ml-[1px]" />
              )}
            </div>

            <div className="lg:text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
