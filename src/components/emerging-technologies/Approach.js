import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      num: "1️⃣",
      title: "Technology Assessment & Feasibility",
      desc: "We evaluate your business goals and determine which emerging technologies align with your industry, scalability needs, and ROI expectations.",
    },
    {
      num: "2️⃣",
      title: "Strategic Prototyping",
      desc: "Rapid prototyping and proof-of-concept development validate business viability before full-scale deployment.",
    },
    {
      num: "3️⃣",
      title: "Scalable Architecture Design",
      desc: "We build solutions that are secure, scalable, and adaptable — ensuring long-term sustainability.",
    },
    {
      num: "4️⃣",
      title: "Integration with Existing Systems",
      desc: "Our team ensures seamless integration with legacy infrastructure, cloud platforms, APIs, and enterprise systems.",
    },
    {
      num: "5️⃣",
      title: "Continuous Innovation & Optimization",
      desc: "Technology evolves — and so do we. Ongoing monitoring, data analysis, and iterative upgrades keep your systems ahead of the curve.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🧩 Our Innovation-Driven Approach
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors"
            >
              <div className="text-4xl">{step.num}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
