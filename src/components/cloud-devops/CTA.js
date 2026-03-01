import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="text-center">
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-700/20 border border-blue-500/30">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Modernize Your Infrastructure Today
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Scaling with precision requires a foundation built for the future.
          Automate smarter. Deploy faster. Innovate better.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Start Consultation
          </Button>
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </div>
    </Section>
  );
}
