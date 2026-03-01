import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Tech Talent Solutions</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Access Elite Technology Experts. <br />{" "}
        <span className="text-gradient-primary">
          Accelerate Innovation. Scale with Confidence.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In today’s fast-evolving digital landscape, access to the right
          technology talent determines how fast your business can innovate,
          scale, and compete.
        </p>
        <p>
          At SkilledHyre Labs, we connect organizations with highly skilled
          engineers, AI specialists, and product developers who deliver
          measurable impact.
        </p>
      </div>
    </Section>
  );
}
