import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="text-center">
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-emerald-600/20 to-teal-700/20 border border-emerald-500/30">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Build the Future of Your Product Today
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Innovation requires more than just code — it requires engineering
          precision and strategic design. Build smarter. Scale stronger. Grow
          faster.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Start Your Journey
          </Button>
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </div>
    </Section>
  );
}
