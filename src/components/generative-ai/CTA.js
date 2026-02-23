import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section>
      <div className="max-w-[1000px] mx-auto text-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-12 rounded-3xl border border-indigo-500/20 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
          🔮 The Future Is Generative
        </h2>
        <div className="space-y-6 text-gray-300 text-lg mb-8 leading-relaxed relative z-10 max-w-3xl mx-auto">
          <p>
            Generative AI is shifting the paradigm from static systems to
            intelligent collaborators. Organizations that integrate generative
            capabilities into their operations today will define tomorrow’s
            digital standards.
          </p>
          <p>
            At SkilledHyre Labs, we combine deep AI engineering expertise with
            strategic implementation — delivering generative solutions that are
            secure, scalable, and business-aligned.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-indigo-200 font-bold text-xl relative z-10">
          <span>Create faster.</span>
          <span className="hidden md:inline">•</span>
          <span>Innovate smarter.</span>
          <span className="hidden md:inline">•</span>
          <span>Scale intelligently.</span>
        </div>

        <div className="relative z-10">
          <Button
            href="/contact"
            variant="primary"
            className="text-lg px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 shadow-indigo-500/25"
          >
            Partner with SkilledHyre Labs
          </Button>
        </div>
      </div>
    </Section>
  );
}
