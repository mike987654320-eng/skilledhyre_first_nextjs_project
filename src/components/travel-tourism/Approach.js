import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Understanding the Travel Business Model",
      description:
        "We analyze your travel services, booking workflows, and target audience to build the right digital architecture.",
    },
    {
      number: "2",
      title: "Experience-Centered Design",
      description:
        "Our UI/UX experts design visually engaging platforms that make travel discovery and booking simple and intuitive.",
    },
    {
      number: "3",
      title: "Scalable Technology Architecture",
      description:
        "We build cloud-based platforms that can handle large booking volumes and support global users.",
    },
    {
      number: "4",
      title: "Integration with Travel APIs",
      description:
        "We integrate essential travel services such as flight booking APIs, hotel systems, payment gateways, and geolocation services.",
    },
    {
      number: "5",
      title: "Testing and Optimization",
      description:
        "We perform extensive testing to ensure fast loading speeds, secure transactions, and reliable booking functionality.",
    },
    {
      number: "6",
      title: "Continuous Improvement",
      description:
        "We provide ongoing support, updates, and improvements to ensure the platform evolves with market trends.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Development Approach for Travel Platforms
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
