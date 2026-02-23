import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section className="bg-white/5">
      <div className="max-w-[1000px] mx-auto text-center bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-12 rounded-3xl border border-purple-500/20 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
          🚀 The Future Is AI-Driven
        </h2>
        <div className="space-y-6 text-gray-300 text-lg mb-8 leading-relaxed relative z-10 max-w-3xl mx-auto">
          <p>
            As AI continues to transform industries, the next wave of digital
            leaders will be organizations that build intelligence into the DNA
            of their offerings. AI-first product design unlocks systems that
            think, adapt, and evolve — turning technology into a true business
            advantage.
          </p>
          <p>
            At SkilledHyre Labs, we partner with startups and enterprises alike
            to imagine, design, and deploy intelligent products that lead
            markets rather than follow them.
          </p>
        </div>

        <div className="relative z-10 mt-8">
          <Button
            href="/contact"
            variant="primary"
            className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 shadow-purple-500/25"
          >
            Start Your AI-First Journey
          </Button>
        </div>
      </div>
    </Section>
  );
}
