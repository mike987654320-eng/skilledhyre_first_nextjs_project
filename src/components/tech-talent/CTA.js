import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="text-center bg-white/5">
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-indigo-700/20 border border-blue-500/30">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Build Your High-Performance Tech Team Today
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Technology success starts with the right people. Hire smarter. Scale
          faster. Deliver better.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Get Started Today
          </Button>
          <Button href="/about" variant="secondary">
            Learn More About Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
