import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>AI-First Product Design</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Designing Intelligent Products <br />{" "}
        <span className="text-gradient-primary">Where AI Is at the Core</span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In today’s technology landscape, artificial intelligence is more than
          a feature — it is a strategic foundation for the next generation of
          digital products. At SkilledHyre Labs, we help forward-thinking
          businesses design and build AI-first products — solutions architected
          from the ground up with AI embedded at their core, not added as an
          afterthought.
        </p>
        <p>
          AI-first product design is reshaping how teams think about user value,
          innovation, and competitive differentiation. Rather than simply
          enhancing traditional software with AI capabilities, AI-first products
          place intelligence at the heart of the user interaction, decision
          making, and experience itself.
        </p>
      </div>
    </Section>
  );
}
