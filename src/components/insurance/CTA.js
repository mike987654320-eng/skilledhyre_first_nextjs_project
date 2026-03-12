import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="text-center">
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-rose-600/20 to-pink-700/20 border border-rose-500/30">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Build the Future of Digital Insurance
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          The insurance industry is becoming more digital, automated, and
          customer-focused. Let’s build the future of insurance technology
          together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Start Your Project
          </Button>
          <Button href="/industries" variant="secondary">
            View All Industries
          </Button>
        </div>
      </div>
    </Section>
  );
}
