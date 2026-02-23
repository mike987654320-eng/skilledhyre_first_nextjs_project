import Section from "../common/Section";

export default function Approach() {
  const steps = [
    {
      num: "1️⃣",
      title: "Problem Definition & Strategy",
      desc: "We align machine learning initiatives with measurable business goals — defining clear KPIs and success metrics.",
    },
    {
      num: "2️⃣",
      title: "Data Engineering & Preparation",
      desc: "High-performance ML models require clean, structured, and well-labeled data. We build robust data pipelines for ingestion, transformation, and validation.",
    },
    {
      num: "3️⃣",
      title: "Model Development & Training",
      desc: "Our team develops and trains advanced models including supervised learning, unsupervised clustering, reinforcement learning, and deep learning neural networks.",
    },
    {
      num: "4️⃣",
      title: "Model Deployment (MLOps)",
      desc: "We implement enterprise-grade MLOps frameworks for continuous integration, automated retraining, model monitoring, and version control.",
    },
    {
      num: "5️⃣",
      title: "Continuous Optimization",
      desc: "Machine learning systems are monitored in production environments to ensure sustained accuracy and performance improvement.",
    },
  ];

  return (
    <Section className="bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            🧩 Our Machine Learning Engineering Approach
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-[16px]">
            At SkilledHyre Labs, we follow a structured ML lifecycle designed
            for scalability and ROI.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors"
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
