import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section>
      <div className="max-w-[1000px] mx-auto text-center bg-gradient-to-r from-emerald-900/40 to-teal-900/40 p-12 rounded-3xl border border-emerald-500/20 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
          🔮 The Future Is Machine-Led
        </h2>
        <div className="space-y-6 text-gray-300 text-lg mb-8 leading-relaxed relative z-10 max-w-3xl mx-auto">
          <p>
            Machine learning is redefining how organizations innovate and
            operate. Businesses that embed intelligence into their digital core
            gain resilience, scalability, and long-term competitive advantage.
          </p>
          <p>
            At SkilledHyre Labs, we combine deep AI expertise, advanced
            engineering practices, and strategic thinking to build machine
            learning systems that deliver measurable impact.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-emerald-200 font-bold text-xl relative z-10">
          <span>Learn from data.</span>
          <span className="hidden md:inline">•</span>
          <span>Adapt with intelligence.</span>
          <span className="hidden md:inline">•</span>
          <span>Scale with confidence.</span>
        </div>

        <div className="relative z-10">
          <Button
            href="/contact"
            variant="primary"
            className="text-lg px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/25"
          >
            Engineer Intelligence into Your Business
          </Button>
        </div>
      </div>
    </Section>
  );
}
