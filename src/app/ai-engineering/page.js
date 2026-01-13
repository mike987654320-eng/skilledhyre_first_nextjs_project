import {
  CpuChipIcon,
  AcademicCapIcon,
  CircleStackIcon,
  CogIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  SparklesIcon,
  PresentationChartLineIcon,
  AdjustmentsHorizontalIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Button from "../../components/Button";
import TechStack from "../../components/TechStack";

export default function AIEngineering() {
  const process = [
    { name: "AI Strategy & Consulting", icon: AcademicCapIcon },
    { name: "Data Engineering", icon: CircleStackIcon },
    { name: "Model Development", icon: CogIcon },
    { name: "Training & Optimization", icon: ChartBarIcon },
    { name: "Deployment & MLOps", icon: RocketLaunchIcon },
  ];

  const solutions = [
    {
      title: "Generative AI Solutions",
      description:
        "AI chatbots, copilots, content generation systems, and enterprise knowledge assistants.",
      icon: SparklesIcon,
    },
    {
      title: "Predictive Analytics & Intelligence",
      description:
        "Forecasting, risk prediction, fraud detection, and behavioral analytics.",
      icon: PresentationChartLineIcon,
    },
    {
      title: "Machine Learning Solutions",
      description:
        "Recommendation engines, NLP solutions, computer vision, and personalization models.",
      icon: CpuChipIcon,
    },
    {
      title: "Intelligent Automation",
      description:
        "AI-driven workflow automation, decision engines, and smart operations.",
      icon: AdjustmentsHorizontalIcon,
    },
  ];

  return (
    <>
      <Section className="text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
          <CpuChipIcon className="w-4 h-4" />
          <span>AI Engineering</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          End-to-End <br />{" "}
          <span className="text-gradient-primary">AI Engineering Services</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          We help businesses unlock the power of artificial intelligence with
          production-ready AI systems designed for real-world impact.
        </p>
      </Section>

      <Section className="bg-white/5">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our AI Engineering Process
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {process.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/5 w-40 text-center"
            >
              <step.icon className="w-10 h-10 text-indigo-400 mb-4" />
              <span className="text-sm font-semibold">{step.name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-12 text-center">
          AI Solutions We Deliver
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((sol, index) => (
            <Card key={index} {...sol} />
          ))}
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">Our AI Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              We build on the most powerful, scalable, and secure AI
              technologies.
            </p>
          </div>
          <TechStack />
        </div>
      </Section>

      {/* Responsible AI Section */}
      <Section className="bg-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[36px] font-bold mb-6">
                Responsible AI & <br /> Data Security
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We understand that enterprise AI requires trust, compliance, and
                safety. Our engineering protocols prioritize data protection and
                ethical AI practices.
              </p>

              <ul className="space-y-6">
                {[
                  {
                    title: "Enterprise-Grade Security",
                    desc: "SOC2 compliant workflows and end-to-end encryption for all data processing.",
                  },
                  {
                    title: "Bias Mitigation",
                    desc: "Rigorous testing frameworks to identify and reduce bias in model outputs.",
                  },
                  {
                    title: "Data Sovereignty",
                    desc: "Your data stays yours. We ensure zero data leakage to public models.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
              <div className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <LockClosedIcon className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">
                        Security Protocol
                      </div>
                      <div className="font-mono text-green-400">
                        ACTIVE_ENFORCED
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <ShieldCheckIcon className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-400">
                        Compliance Check
                      </div>
                      <div className="font-mono text-blue-400">PASSED_100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mt-16 text-center">
          <Button href="/contact">Discuss Your AI Strategy</Button>
        </div>
      </Section>
    </>
  );
}
