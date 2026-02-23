import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Machine Learning Engineering</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Build Intelligent Systems That <br />{" "}
        <span className="text-gradient-primary">Learn, Adapt & Scale</span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          Machine Learning (ML) is the backbone of intelligent digital
          transformation. At SkilledHyre Labs, our Machine Learning Engineering
          solutions enable businesses to design, develop, and deploy AI systems
          that continuously learn from data and improve performance over time.
        </p>
        <p>
          Machine learning is not just automation — it is adaptive intelligence
          embedded into products, platforms, and enterprise operations.
        </p>
      </div>
    </Section>
  );
}
