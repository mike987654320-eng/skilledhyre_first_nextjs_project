import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="bg-white/5">
      <div className="max-w-[1000px] mx-auto text-center bg-gradient-to-r from-pink-900/40 to-purple-900/40 p-12 rounded-3xl border border-pink-500/20 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
          🔮 Future-Ready Digital Strategy
        </h2>
        <div className="space-y-6 text-gray-300 text-lg mb-8 leading-relaxed relative z-10 max-w-3xl mx-auto">
          <p>
            Emerging technologies redefine how value is created and delivered.
            Organizations that integrate innovation into their DNA gain
            resilience, scalability, and sustained growth.
          </p>
          <p>
            The future belongs to businesses willing to experiment, adapt, and
            evolve. With SkilledHyre Labs as your innovation partner, you gain
            the expertise, strategy, and engineering capability required to
            harness emerging technologies with confidence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-pink-200 font-bold text-xl relative z-10">
          <span>Innovate boldly.</span>
          <span className="hidden md:inline">•</span>
          <span>Transform intelligently.</span>
          <span className="hidden md:inline">•</span>
          <span>Build the future today.</span>
        </div>

        <div className="relative z-10">
          <Button
            href="/contact"
            variant="primary"
            className="text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-pink-500/25"
          >
            Lead the Innovation Curve
          </Button>
        </div>
      </div>
    </Section>
  );
}
