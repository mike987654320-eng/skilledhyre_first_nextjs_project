import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Retail & E-commerce</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineer Intelligent Retail. <br />{" "}
        <span className="text-gradient-primary">
          Design for Experience. Build for Scale.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the age of digital-first commerce, technology must be more than a
          storefront — it must be an omni-channel, data-driven ecosystem built
          for speed and personalization.
        </p>
        <p>
          At SkilledHyre Labs, our Retail solutions combine AI engineering,
          scalable e-commerce architectures, and user-centric design to build
          the next generation of shopping platforms.
        </p>
      </div>
    </Section>
  );
}
