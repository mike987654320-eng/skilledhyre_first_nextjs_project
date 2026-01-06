"use client";
import {
  RocketLaunchIcon,
  CpuChipIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  UsersIcon,
  BeakerIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import TypingAnimation from "@/components/TypingAnimation";

export default function Home() {
  const cards = [
    {
      title: "AI Engineering & Solutions",
      description:
        "Design, build, and deploy AI systems that drive automation, intelligence, and business growth.",
      icon: CpuChipIcon,
      href: "/ai-engineering",
    },
    {
      title: "Custom Software Development",
      description:
        "Tailor-made software built for performance, scalability, and long-term success.",
      icon: CodeBracketIcon,
      href: "/services",
    },
    {
      title: "Web & App Development",
      description:
        "Modern, fast, and secure web & mobile applications using cutting-edge frameworks.",
      icon: GlobeAltIcon,
      href: "/services",
    },
    {
      title: "Tech Talent On Demand",
      description:
        "Hire skilled developers and AI engineers instantly for your projects.",
      icon: UsersIcon,
      href: "/tech-talent",
    },
    {
      title: "Product Engineering & MVPs",
      description: "From idea to MVP to enterprise-grade product.",
      icon: BeakerIcon,
      href: "/services",
    },
    {
      title: "End-to-End Delivery",
      description: "Complete lifecycle support from strategy to scale.",
      icon: ArrowPathIcon,
      href: "/end-to-end",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-pulse" />
        </div>

        <div className="flex justify-center items-center gap-4 w-full max-w-[1170px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
                <RocketLaunchIcon className="w-4 h-4" />
                <span>SkilledHyre Labs</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                Engineering Digital <br />
                {/* <span className="text-gradient-primary">
                  Innovation with AI
                </span> */}
                <TypingAnimation
                  text="Innovation with AI"
                  className="text-gradient-primary text-[60px]"
                  delay={100}
                />
              </h1>

              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                SkilledHyre Labs is a full-fledged IT and AI engineering company
                delivering scalable software solutions, AI-powered platforms,
                and on-demand tech talent. We help startups and enterprises
                build, modernize, and scale digital products with speed,
                security, and intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary">
                  Start Your Project
                </Button>
                <Button href="/contact" variant="secondary">
                  Talk to Our Experts
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/skilldhyre.jpg"
                alt="Hero Image"
                className="w-full max-w-[520px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <Section className="bg-white/5 ">
        <div className="flex justify-center items-center flex-col gap-4 w-full max-w-[1170px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              Comprehensive services to drive your digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
