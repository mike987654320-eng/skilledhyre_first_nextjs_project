import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      title: "Assessment & Strategy",
      description:
        "We evaluate your current infrastructure and define a roadmap for cloud migration or optimization.",
    },
    {
      title: "Cloud Architecture Design",
      description:
        "We design secure, highly available, and cost-optimized cloud environments (AWS, Azure, GCP).",
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "We build automated pipelines for continuous integration and delivery to accelerate releases.",
    },
    {
      title: "Infrastructure as Code (IaC)",
      description:
        "We manage environments using Terraform or CloudFormation for consistency and speed.",
    },
    {
      title: "Security & Monitoring",
      description:
        "We implement real-time observability and DevSecOps practices to protect your data.",
    },
    {
      title: "Operations & Optimization",
      description:
        "We provide ongoing management and cost-optimization to ensure maximum ROI.",
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          🧩 Our Cloud & DevOps Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="text-blue-400 font-bold mb-4">
                Phase 0{index + 1}
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
