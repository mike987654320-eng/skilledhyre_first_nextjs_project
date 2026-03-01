import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Requirement Analysis & Compliance Audit",
      description:
        "We define technical goals while ensuring strict alignment with healthcare regulations from the start.",
    },
    {
      number: "2",
      title: "User-Centric UI/UX Design",
      description:
        "We design intuitive interfaces for both patients and healthcare providers to ensure high adoption.",
    },
    {
      number: "3",
      title: "Scalable & Secure System Engineering",
      description:
        "Our engineers build robust backends and frontends designed for mass scale and high availability.",
    },
    {
      number: "4",
      title: "AI & Data Integration",
      description:
        "We embed intelligent features for predictive diagnostics, patient monitoring, and clinical insights.",
    },
    {
      number: "5",
      title: "Rigorous QA & Regulatory Validation",
      description:
        "Comprehensive testing ensures data integrity, security compliance, and seamless functionality.",
    },
    {
      number: "6",
      title: "Deployment & Performance Monitoring",
      description:
        "We manage secure launches and provide ongoing observability to ensure consistent performance.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Healthcare Engineering Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-xl mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
