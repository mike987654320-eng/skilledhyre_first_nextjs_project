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
} from "@heroicons/react/24/outline";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Button from "../../components/Button";

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

        <div className="mt-16 text-center">
          <Button href="/contact">Discuss Your AI Strategy</Button>
        </div>
      </Section>
    </>
  );
}
