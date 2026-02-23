import Section from "../common/Section";

export default function HowWeDesign() {
  const steps = [
    {
      num: "1️⃣",
      title: "AI-Native Problem Definition",
      desc: "We begin by identifying problems that only AI can truly solve — instead of retrofitting intelligence into outdated workflows. This ensures AI is central to solving the right challenges.",
    },
    {
      num: "2️⃣",
      title: "Human-Centric Product Research",
      desc: "Even intelligent products must solve real human problems. We invest in user research, data analysis, and behavioral insights to define design goals.",
    },
    {
      num: "3️⃣",
      title: "Prototype & AI Model Integration",
      desc: "Early prototypes integrate AI workflows, machine learning logic, and intelligent recommendations — allowing rapid feedback loops and early market validation.",
    },
    {
      num: "4️⃣",
      title: "Adaptive UX & Intelligent Interfaces",
      desc: "Our design philosophy ensures AI augments user capabilities rather than replacing them. Interfaces are crafted for clarity, control, and adaptability.",
    },
    {
      num: "5️⃣",
      title: "Continuous Learning & Optimization",
      desc: "Post-launch products continue to evolve through real user data, improving recommendations, accuracy, and personalization without manual rework.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🔧 How SkilledHyre Designs AI-First Products
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-[16px]">
            At SkilledHyre Labs, AI-first product design is an end-to-end
            engineering and strategy process that includes:
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
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
