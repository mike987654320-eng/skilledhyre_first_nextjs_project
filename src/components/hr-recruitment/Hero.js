import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>HR & Recruitment Industry</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Building Intelligent Talent <br />{" "}
        <span className="text-gradient-primary">Acquisition Platforms</span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          The HR and recruitment industry is evolving rapidly with the adoption
          of digital hiring platforms, AI-powered talent screening, and
          data-driven workforce management systems. Modern organizations require
          efficient recruitment processes, seamless candidate experiences, and
          advanced tools for managing talent pipelines.
        </p>
        <p>
          At SkilledHyre Labs, we develop powerful HR and recruitment technology
          solutions that help staffing agencies, recruitment firms, and
          corporate HR teams streamline hiring processes, manage talent
          efficiently, and improve workforce productivity.
        </p>
        <p>
          Our digital solutions enable businesses to attract, evaluate, and
          onboard the right talent faster.
        </p>
      </div>
    </Section>
  );
}
