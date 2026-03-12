import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Understanding the Real Estate Business Model",
      description:
        "We analyze property sales processes, lead management workflows, and customer journeys to build effective digital solutions.",
    },
    {
      number: "2",
      title: "Intuitive Property Search Experience",
      description:
        "Our UI/UX experts design visually appealing platforms with powerful search filters, maps, and property comparison features.",
    },
    {
      number: "3",
      title: "Scalable and Secure Architecture",
      description:
        "We build cloud-based platforms capable of handling large volumes of listings, users, and transactions.",
    },
    {
      number: "4",
      title: "Integration with Key Services",
      description:
        "We integrate essential real estate services including payment gateways, maps, CRM, analytics, and third-party property data.",
    },
    {
      number: "5",
      title: "Testing and Performance Optimization",
      description:
        "Our testing process ensures reliable functionality, fast loading speeds, and secure property transactions.",
    },
    {
      number: "6",
      title: "Continuous Improvement",
      description:
        "We provide ongoing support, upgrades, and performance monitoring to ensure long-term platform success.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Development Approach for Real Estate Platforms
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
