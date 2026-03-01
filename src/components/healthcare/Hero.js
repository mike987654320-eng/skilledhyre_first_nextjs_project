import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Healthcare & Life Sciences</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineer Intelligent Healthcare. <br />{" "}
        <span className="text-gradient-primary">
          Design for Accuracy. Build for Impact.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the evolving landscape of digital health, technology must be more
          than functional — it must be secure, accurate, and built for patient
          success.
        </p>
        <p>
          At SkilledHyre Labs, our Healthcare solutions combine AI engineering,
          data-driven design, and secure architectures to build the next
          generation of health-tech platforms.
        </p>
      </div>
    </Section>
  );
}
