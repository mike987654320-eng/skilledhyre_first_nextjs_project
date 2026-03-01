import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="text-center">
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-indigo-700/20 border border-purple-500/30">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Turn Your App Idea into Reality
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Mobile innovation starts with the right strategy and the right
          partners. Build smarter. Engage better. Scale faster.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Start Your App
          </Button>
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </div>
    </Section>
  );
}
