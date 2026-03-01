import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="text-center">
      <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-indigo-700/20 border border-blue-500/30">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Transform Your Operations Today
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Intelligent Automation Systems by SkilledHyre Labs empower your
          organization to operate smarter, faster, and more efficiently. Scale
          with the backbone of your digital future.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="primary">
            Start Your Journey
          </Button>
          <Button href="/innovation" variant="secondary">
            Explore Innovation Hub
          </Button>
        </div>
      </div>
    </Section>
  );
}
