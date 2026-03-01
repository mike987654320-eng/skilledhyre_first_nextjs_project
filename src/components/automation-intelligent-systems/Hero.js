import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Intelligent Automation Systems</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Streamline Operations. <br />{" "}
        <span className="text-gradient-primary">
          Accelerate Productivity. Scale with Intelligence.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In a hyper-competitive digital landscape, operational speed and
          efficiency define success. At SkilledHyre Labs, our Intelligent
          Automation Systems are designed to eliminate manual bottlenecks,
          reduce operational costs, and create scalable digital workflows
          powered by AI and advanced automation technologies.
        </p>
        <p>
          {
            "Automation today is not just about replacing repetitive tasks — it's about building intelligent systems that optimize decision-making, improve accuracy, and drive continuous innovation across the enterprise."
          }
        </p>
      </div>
    </Section>
  );
}
