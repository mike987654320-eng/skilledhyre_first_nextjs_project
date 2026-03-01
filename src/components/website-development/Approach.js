import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      title: "Discovery & Strategy",
      description:
        "We understand your business goals, target audience, and competitive landscape to define a clear roadmap.",
    },
    {
      title: "UI/UX Design",
      description:
        "We create intuitive, responsive, and visually compelling interfaces that enhance engagement across devices.",
    },
    {
      title: "Full-Stack Development",
      description:
        "We develop robust frontend and backend systems using modern frameworks and scalable architectures.",
    },
    {
      title: "CMS & E-Commerce Solutions",
      description:
        "We empower businesses to manage content, products, and customer interactions seamlessly.",
    },
    {
      title: "Security & Performance",
      description:
        "We implement enterprise-grade security measure and speed enhancements to ensure reliability.",
    },
    {
      title: "Testing & Deployment",
      description:
        "Comprehensive testing ensures compatibility, responsiveness, and seamless functionality before launch.",
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Website Development Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
            >
              <div className="text-cyan-400 font-bold mb-4">
                Step 0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
