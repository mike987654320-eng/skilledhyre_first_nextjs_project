import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="bg-white/5">
      <div className="max-w-[1000px] mx-auto text-center bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-12 rounded-3xl border border-cyan-500/20 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
          🚀 Transform with Confidence
        </h2>
        <div className="space-y-6 text-gray-300 text-lg mb-8 leading-relaxed relative z-10 max-w-3xl mx-auto">
          <p>
            Cloud-native architecture is not just a technology upgrade — it’s a
            strategic shift toward agility, resilience, and intelligent growth.
          </p>
          <p>
            At SkilledHyre Labs, we combine engineering excellence with business
            strategy to build digital infrastructures that scale with your
            ambition.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-cyan-200 font-bold text-xl relative z-10">
          <span>Modernize.</span>
          <span className="hidden md:inline">•</span>
          <span>Scale.</span>
          <span className="hidden md:inline">•</span>
          <span>Innovate.</span>
        </div>

        <div className="relative z-10">
          <Button
            href="/contact"
            variant="primary"
            className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/25"
          >
            Begin Your Cloud-Native Journey
          </Button>
        </div>
      </div>
    </Section>
  );
}
