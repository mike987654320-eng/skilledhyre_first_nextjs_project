import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Logistics & Supply Chain</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineer Intelligent Logistics. <br />{" "}
        <span className="text-gradient-primary">
          Design for Visibility. Build for Scale.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the modern era of global trade, technology must be more than a
          database — it must be an integrated, data-driven ecosystem built for
          real-time visibility and operational resilience.
        </p>
        <p>
          At SkilledHyre Labs, our Logistics solutions combine AI engineering,
          advanced tracking architectures, and user-centric design to build the
          next generation of supply chain platforms.
        </p>
      </div>
    </Section>
  );
}
