import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>FinTech & Banking</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineer Intelligent Finance. <br />{" "}
        <span className="text-gradient-primary">
          Design for Trust. Build for Scale.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the rapidly evolving world of digital finance, technology must be
          more than fast — it must be secure, compliant, and built for absolute
          reliability.
        </p>
        <p>
          At SkilledHyre Labs, our FinTech solutions combine AI engineering,
          secure payment architectures, and data-driven design to build the next
          generation of financial platforms.
        </p>
      </div>
    </Section>
  );
}
