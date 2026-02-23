import Section from "../common/Section";
import Card from "../common/Card";
import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  PhotoIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export default function Applications() {
  const applications = [
    {
      title: "AI Content & Marketing",
      description:
        "Generate blogs, ads, product descriptions, email campaigns, and social media content at scale.",
      icon: DocumentTextIcon,
    },
    {
      title: "Intelligent Conversational AI",
      description:
        "Build advanced chatbots and AI assistants capable of contextual conversations and workflow execution.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: "AI Code Assistants",
      description:
        "Accelerate software development with automated code generation, debugging support, and documentation creation.",
      icon: CommandLineIcon,
    },
    {
      title: "Creative Design & Media",
      description:
        "Produce AI-generated visuals, branding assets, product mockups, and multimedia content.",
      icon: PhotoIcon,
    },
    {
      title: "Synthetic Data & Simulation",
      description:
        "Generate structured datasets for AI training, testing, and predictive modeling.",
      icon: ChartPieIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            📊 Key Business Applications
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {applications.map((app, index) => (
            <div key={index} className={index >= 3 ? "lg:col-span-1.5" : ""}>
              <Card
                {...app}
                className="bg-white/5 border border-white/10 group-hover:border-indigo-500/30"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
