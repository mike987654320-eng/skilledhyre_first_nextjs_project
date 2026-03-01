import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Product Engineering</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineer Modern Products. <br />{" "}
        <span className="text-gradient-primary">
          Design for Scalability. Build for Impact.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In a world of rapid digital evolution, products need to be more than
          functional — they must be resilient, intuitive, and built for mass
          scale.
        </p>
        <p>
          At SkilledHyre Labs, our Product Engineering solutions combine design
          thinking, advanced engineering, and domain expertise to build the next
          generation of digital products.
        </p>
      </div>
    </Section>
  );
}
