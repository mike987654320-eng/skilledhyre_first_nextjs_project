import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Understanding Restaurant Business Models",
      description:
        "We analyze restaurant workflows, ordering processes, and customer behavior to design effective digital solutions.",
    },
    {
      number: "2",
      title: "Intuitive Customer Experience Design",
      description:
        "Our UI/UX team designs engaging and easy-to-use platforms that make ordering food simple and convenient.",
    },
    {
      number: "3",
      title: "Scalable Cloud-Based Architecture",
      description:
        "We build robust platforms capable of handling large order volumes and peak-time traffic.",
    },
    {
      number: "4",
      title: "Integration with Essential Services",
      description:
        "Our systems integrate with important tools such as payment gateways, delivery APIs, POS, inventory management, and location services.",
    },
    {
      number: "5",
      title: "Testing and Performance Optimization",
      description:
        "We perform comprehensive testing to ensure fast ordering experiences, reliable transactions, and efficient delivery tracking.",
    },
    {
      number: "6",
      title: "Continuous Support & Improvements",
      description:
        "We provide ongoing support, feature updates, and performance optimization to keep platforms competitive.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Development Approach for Food Technology Platforms
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
