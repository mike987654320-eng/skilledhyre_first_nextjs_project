import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>AI Generative Solutions</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Create. Automate. Personalize.
        <br />{" "}
        <span className="text-gradient-primary">
          Scale with Generative Intelligence.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          Generative AI is redefining how businesses create content, design
          products, automate workflows, and engage customers. At SkilledHyre
          Labs, our AI Generative Solutions under the AI Engineering vertical
          empower organizations to leverage next-generation AI models to produce
          text, images, code, designs, simulations, and intelligent automation
          at scale.
        </p>
        <p>
          Generative AI is not just a tool — it is a transformation engine for
          creativity, productivity, and innovation.
        </p>
      </div>
    </Section>
  );
}
