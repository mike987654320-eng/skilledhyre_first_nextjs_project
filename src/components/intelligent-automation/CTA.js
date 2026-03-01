import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="text-center">
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-700/20 border border-indigo-500/30">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Transform Your Operations with Intelligent Automation
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Automation is no longer optional. It is essential for digital
          competitiveness. Automate intelligently. Operate efficiently. Scale
          confidently.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Get Started Today
          </Button>
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </div>
    </Section>
  );
}
