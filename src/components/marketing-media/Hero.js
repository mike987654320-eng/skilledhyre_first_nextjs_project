import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Marketing & Media</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineer Intelligent Marketing. <br />{" "}
        <span className="text-gradient-primary">
          Design for Engagement. Build for Impact.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the digital-first era of media, technology must be more than a
          channel — it must be an engaging, data-driven ecosystem built for
          reach and high-impact storytelling.
        </p>
        <p>
          At SkilledHyre Labs, our Marketing & Media solutions combine AI
          engineering, scalable content architectures, and user-centric design
          to build the next generation of digital platforms.
        </p>
      </div>
    </Section>
  );
}
