import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Emerging Technologies</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Innovate Beyond the Present. <br />{" "}
        <span className="text-gradient-primary">Engineer the Future.</span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          Technology is evolving at an unprecedented pace. Businesses that
          embrace emerging technologies early gain strategic advantage,
          operational agility, and long-term sustainability. At SkilledHyre
          Labs, we help organizations identify, evaluate, and implement
          next-generation technologies that drive disruptive innovation and
          sustainable growth.
        </p>
        <p>
          Emerging technologies are not trends — they are foundational shifts
          redefining industries, business models, and customer expectations.
        </p>
      </div>
    </Section>
  );
}
