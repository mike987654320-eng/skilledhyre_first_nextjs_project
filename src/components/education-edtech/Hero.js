import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Education & EdTech</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineer Intelligent Learning. <br />{" "}
        <span className="text-gradient-primary">
          Design for Engagement. Build for Impact.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the evolving landscape of digital education, technology must be
          more than a tool — it must be an engaging, data-driven ecosystem built
          for student and educator success.
        </p>
        <p>
          At SkilledHyre Labs, our EdTech solutions combine AI engineering,
          scalable learning architectures, and user-centric design to build the
          next generation of educational platforms.
        </p>
      </div>
    </Section>
  );
}
