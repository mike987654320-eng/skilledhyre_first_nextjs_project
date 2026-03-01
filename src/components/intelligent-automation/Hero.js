import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Intelligent Automation</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Automate Processes. <br />{" "}
        <span className="text-gradient-primary">
          Augment Intelligence. Accelerate Growth.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the era of digital acceleration, organizations need more than
          simple task automation — they need intelligent systems that think,
          adapt, and optimize in real time.
        </p>
        <p>
          At SkilledHyre Labs, our Intelligent Automation solutions combine AI,
          machine learning, and advanced workflow automation to build smart
          operational ecosystems that scale efficiently.
        </p>
      </div>
    </Section>
  );
}
