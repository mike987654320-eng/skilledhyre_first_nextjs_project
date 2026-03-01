import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Website Development</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Build Powerful Digital Experiences. <br />{" "}
        <span className="text-gradient-primary">
          Drive Engagement. Accelerate Growth.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In today’s digital-first world, your website is more than an online
          presence — it is your brand’s digital headquarters.
        </p>
        <p>
          At SkilledHyre Labs, our Website Development solutions combine
          strategy, design, and advanced engineering to build high-performance
          websites that convert visitors into customers.
        </p>
      </div>
    </Section>
  );
}
