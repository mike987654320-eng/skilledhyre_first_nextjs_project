import Section from "../common/Section";
import Button from "../common/Button";

export default function CTA() {
  return (
    <Section>
      <div className="max-w-[1000px] mx-auto text-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-12 rounded-3xl border border-indigo-500/20 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
          🌟 Future-Ready, Business-First Technology
        </h2>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed relative z-10 max-w-2xl mx-auto">
          Digital transformation is more than technology — it’s a cultural shift
          that prepares your organization for tomorrow’s challenges. Whether
          you’re a startup, scale-up, or enterprise, SkilledHyre Labs offers
          bespoke digital transformation services tailored to your growth stage
          and industry needs.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 text-indigo-200 font-medium relative z-10">
          <span>Transform with confidence.</span>
          <span className="hidden md:inline">•</span>
          <span>Scale with agility.</span>
          <span className="hidden md:inline">•</span>
          <span>Compete with intelligence.</span>
        </div>
        <div className="relative z-10">
          <Button
            href="/contact"
            variant="primary"
            className="text-lg px-8 py-4"
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
}
