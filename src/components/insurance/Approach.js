import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Understanding Insurance Workflows",
      description:
        "We analyze policy management processes, claims workflows, and regulatory requirements to design the right digital architecture.",
    },
    {
      number: "2",
      title: "User-Centric Platform Design",
      description:
        "Our design team creates intuitive interfaces for customers, insurance agents, and administrators.",
    },
    {
      number: "3",
      title: "Scalable Technology Infrastructure",
      description:
        "We build cloud-based platforms that can support large volumes of policyholders and transactions.",
    },
    {
      number: "4",
      title: "Integration with Essential Insurance Systems",
      description:
        "Our platforms integrate with key systems such as payment gateways, identity verification, CRM, analytics, and third-party insurance APIs.",
    },
    {
      number: "5",
      title: "Testing & Compliance Validation",
      description:
        "We conduct extensive testing to ensure system reliability, regulatory compliance, and data security.",
    },
    {
      number: "6",
      title: "Continuous Platform Enhancement",
      description:
        "We provide ongoing support, upgrades, and feature improvements to keep insurance systems modern and efficient.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Development Approach for Insurance Platforms
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
