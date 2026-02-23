import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Cloud-Native Architecture</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Build Scalable, Resilient & <br />{" "}
        <span className="text-gradient-primary">
          Future-Ready Digital Systems
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In a digital-first economy, speed, scalability, and resilience are no
          longer optional — they are foundational. At SkilledHyre Labs, our
          Cloud-Native Architecture services empower businesses to design and
          deploy modern applications built specifically for the cloud, not
          merely migrated to it.
        </p>
        <p>
          Cloud-native architecture enables organizations to innovate faster,
          scale effortlessly, and respond dynamically to market changes — all
          while maintaining enterprise-grade security and performance.
        </p>
      </div>
    </Section>
  );
}
