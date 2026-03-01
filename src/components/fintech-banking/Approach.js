import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Regulatory Analysis & Discovery",
      description:
        "We define technical goals while ensuring strict alignment with financial regulations from the start.",
    },
    {
      number: "2",
      title: "Secure UI/UX Design",
      description:
        "We design intuitive and secure interfaces for both customers and financial administrators.",
    },
    {
      number: "3",
      title: "Scalable Architecture Engineering",
      description:
        "Our engineers build robust backends designed for high-frequency transactions and reliability.",
    },
    {
      number: "4",
      title: "AI & Machine Learning Integration",
      description:
        "We embed intelligent features for fraud detection, credit scoring, and personalized finance.",
    },
    {
      number: "5",
      title: "Rigorous Security Auditing",
      description:
        "Comprehensive testing ensures data integrity, PCI compliance, and seamless functionality.",
    },
    {
      number: "6",
      title: "Deployment & Monitoring",
      description:
        "We manage secure launches and provide ongoing observability for absolute operational uptime.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our FinTech Engineering Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xl mb-6">
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
