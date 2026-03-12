import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Understanding Recruitment Workflows",
      description:
        "We analyze hiring processes, talent acquisition strategies, and recruiter requirements to design the right technology framework.",
    },
    {
      number: "2",
      title: "User-Centric Platform Design",
      description:
        "Our design team creates intuitive interfaces for recruiters, HR teams, and job seekers to ensure smooth interactions.",
    },
    {
      number: "3",
      title: "Scalable System Architecture",
      description:
        "We build cloud-based HR platforms capable of managing large candidate databases and high job application volumes.",
    },
    {
      number: "4",
      title: "Integration with Key HR Tools",
      description:
        "Our solutions integrate with essential HR technologies such as job boards, email, payroll systems, video interview platforms, and analytics.",
    },
    {
      number: "5",
      title: "Testing and Optimization",
      description:
        "We conduct comprehensive testing to ensure reliable performance, security, and smooth recruitment workflows.",
    },
    {
      number: "6",
      title: "Continuous Support & Enhancement",
      description:
        "We provide ongoing updates and improvements to keep HR platforms aligned with evolving recruitment trends.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Development Approach for HR Platforms
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
