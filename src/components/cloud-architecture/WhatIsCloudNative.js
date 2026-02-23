import Section from "../common/Section";
import { CloudIcon } from "@heroicons/react/24/outline";

export default function WhatIsCloudNative() {
  const principles = [
    "Microservices-based design",
    "Containerization",
    "Dynamic orchestration",
    "DevOps & CI/CD pipelines",
    "Elastic scalability",
    "API-first integrations",
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col justify-center min-h-[400px]">
              <CloudIcon className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                {" "}
                Beyond Monoliths
              </h3>
              <p className="text-center text-gray-400">
                Unlike traditional monolithic systems, cloud-native applications
                are modular, flexible, and independently deployable — ensuring
                agility and resilience at every level.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[36px] font-bold mb-6">
              🌍 What Is Cloud-Native Architecture?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Cloud-native architecture is a design approach where applications
              are developed and deployed using cloud computing principles such
              as:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-center hover:border-cyan-500/30 transition-colors"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
