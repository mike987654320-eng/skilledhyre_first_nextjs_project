import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  BoltIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Section from "../../../components/common/Section";
import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";

export default function WebsiteDevelopment() {
  const features = [
    {
      title: "Responsive Design",
      description:
        "Fluid layouts that adapt perfectly to mobile, tablet, and desktop.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "SEO Optimization",
      description:
        "Built-in technical SEO, semantic HTML, and lightning-fast Core Web Vitals.",
      icon: GlobeAltIcon,
    },
    {
      title: "High Performance",
      description:
        "Optimized asset loading, caching, and Next.js server-side rendering.",
      icon: BoltIcon,
    },
    {
      title: "Modern UI/UX",
      description:
        "Premium aesthetics with smooth animations and interactive elements.",
      icon: SwatchIcon,
    },
  ];

  return (
    <>
      <Section className="text-center pt-32 pb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8">
          <GlobeAltIcon className="w-4 h-4" />
          <span>Web Engineering</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          High-Performance <br />
          <span className="text-gradient-primary">Web Experiences</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          We don&apos;t just build websites; we build digital platforms that
          convert visitors, rank high on Google, and tell your brand story
          compellingly.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/contact">Get a Quote</Button>
          <Button href="/services" variant="secondary">
            Other Services
          </Button>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <p className="text-gray-400 mb-8">
              We use the modern &quot;T3&quot; style stack and beyond to ensure
              longevity and maintainability.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Next.js 14", desc: "App Router & Server Actions" },
                { name: "React", desc: "Component-Based UI" },
                { name: "Tailwind CSS", desc: "Utility-First Styling" },
                { name: "TypeScript", desc: "Type-Safe Code" },
                { name: "Framer Motion", desc: "Complex Animations" },
                { name: "Vercel / AWS", desc: "Global Edge Deployment" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-black/20 border border-white/5"
                >
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
              100/100
            </h3>
            <p className="text-xl font-medium text-white">
              Lighthouse Performance Score
            </p>
            <p className="text-gray-400">
              We aggressively optimize for speed. Every millisecond counts when
              it comes to user retention and conversion.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">Core Features</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <Button href="/contact">Start Your Web Project</Button>
      </Section>
    </>
  );
}
