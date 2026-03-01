import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Mobile App Development</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Build Engaging Mobile Experiences. <br />{" "}
        <span className="text-gradient-primary">
          Drive User Growth. Scale Digitally.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In a mobile-first world, your app is often the primary touchpoint
          between your brand and your customers.
        </p>
        <p>
          At SkilledHyre Labs, we combine strategic thinking, user-centric
          design, and advanced engineering to deliver mobile applications that
          are secure, responsive, and future-ready.
        </p>
      </div>
    </Section>
  );
}
