import {
  SparklesIcon,
  ArrowTrendingUpIcon,
  CogIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Section from "../../../components/common/Section";
import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";

export default function DigitalTransformation() {
  const benefits = [
    {
      title: "Operational Efficiency",
      description: "Automate core processes to reduce costs and error rates.",
      icon: CogIcon,
    },
    {
      title: "Data-Driven Decisions",
      description: "Turn raw data into actionable strategic insights.",
      icon: ArrowTrendingUpIcon,
    },
    {
      title: "Enhanced Security",
      description:
        "Modernize legacy systems to meet current security standards.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Customer Experience",
      description: "Deliver seamless, personalized digital experiences.",
      icon: SparklesIcon,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="text-center pt-32 pb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
          <SparklesIcon className="w-4 h-4" />
          <span>Innovation Strategy</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Digital Transformation <br />
          <span className="text-gradient-primary">Reimagined</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          Future-proof your business by modernizing operations, adopting
          cloud-native technologies, and leveraging AI to unlock new growth.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/contact">Start Your Journey</Button>
          <Button href="/innovation" variant="secondary">
            Back to Innovation
          </Button>
        </div>
      </Section>

      {/* Overview Section */}
      <Section className="bg-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Transform Now?</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              In an era of rapid technological shift, standing still is falling
              behind. Legacy systems slow down agility, while your competitors
              move at the speed of AI.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We guide enterprises through the complex journey of digital
              evolution—moving from monolithic architectures to agile,
              microservices-led ecosystems that scale on demand.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-indigo-900/20">
            {/* Abstract Visual Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
              <div className="w-48 h-48 bg-purple-500/30 rounded-full blur-3xl absolute top-1/4 right-1/4 animate-pulse delay-75" />
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">Strategic Impact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
            Real-world value delivered through strategic modernization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white/5">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to modernization your enterprise?
          </h2>
          <p className="text-gray-400 mb-8">
            Speak with our digital strategists to outline your roadmap.
          </p>
          <Button href="/contact">Book a Consultation</Button>
        </div>
      </Section>
    </>
  );
}
