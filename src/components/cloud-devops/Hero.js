import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Cloud & DevOps Engineering</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Scale with Confidence. <br />{" "}
        <span className="text-gradient-primary">
          Automate with Precision. Innovate Faster.
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the age of digital acceleration, your infrastructure is the
          foundation of your innovation.
        </p>
        <p>
          At SkilledHyre Labs, our Cloud & DevOps Engineering solutions enable
          organizations to build resilient, scalable, and automated environments
          that accelerate delivery and optimize costs.
        </p>
      </div>
    </Section>
  );
}
