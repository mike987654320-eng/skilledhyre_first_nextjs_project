import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Manufacturing & Industrial</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineer Intelligent Manufacturing. <br />{" "}
        <span className="text-gradient-primary">
          Design for Efficiency. Build for Scale.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the era of Industry 4.0, technology must be more than a tool — it
          must be an integrated, data-driven ecosystem built for precision and
          operational excellence.
        </p>
        <p>
          At SkilledHyre Labs, our Manufacturing solutions combine AI
          engineering, advanced IIoT architectures, and user-centric design to
          build the next generation of industrial platforms.
        </p>
      </div>
    </Section>
  );
}
