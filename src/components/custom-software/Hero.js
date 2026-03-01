import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Custom Software Development</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineered for Your Business. <br />{" "}
        <span className="text-gradient-primary">
          Built for Scale. Designed for Impact.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          Every business is unique — your software should be too. At SkilledHyre
          Labs, we engineer software that adapts to your workflows and evolves
          with your growth.
        </p>
        <p>
          We build tailored, scalable, and high-performance applications that
          align perfectly with your operational goals and long-term vision.
        </p>
      </div>
    </Section>
  );
}
