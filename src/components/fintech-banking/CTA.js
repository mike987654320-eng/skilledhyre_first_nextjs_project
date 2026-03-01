import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="text-center">
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-amber-600/20 to-orange-700/20 border border-amber-500/30">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Build the Future of Finance Today
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Digital finance requires engineering precision and absolute trust.
          Innovate securely. Design intelligently. Scale confidently.
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
