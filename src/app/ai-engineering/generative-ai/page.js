import {
  ChatBubbleBottomCenterTextIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Section from "../../../components/common/Section";
import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";

export default function GenerativeAI() {
  const useCases = [
    {
      title: "Enterprise Knowledge Search",
      description:
        "Chat with your documents using RAG (Retrieval Augmented Generation).",
      icon: DocumentTextIcon,
    },
    {
      title: "AI Coding Copilots",
      description:
        "Accelerate development with custom code assistants trained on your codebase.",
      icon: CodeBracketIcon,
    },
    {
      title: "Content & Creative Engines",
      description:
        "Automate marketing copy, design assets, and personalized communication.",
      icon: SparklesIcon,
    },
    {
      title: "Customer Support Agents",
      description:
        "24/7 intelligent support that resolves complex queries automatically.",
      icon: ChatBubbleBottomCenterTextIcon,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="text-center pt-32 pb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm mb-8">
          <SparklesIcon className="w-4 h-4" />
          <span>Next-Gen AI</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Generative AI <br />
          <span className="text-gradient-primary">Solutions</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          Deploy private, secure, and fine-tuned APIs/LLMs that understand your
          business context and drive 10x productivity.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/contact">Build Your AI Agent</Button>
          <Button href="/ai-engineering" variant="secondary">
            Explore All AI Services
          </Button>
        </div>
      </Section>

      {/* Tech Stack / Capability Section */}
      <Section className="bg-white/5">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            Powered by Leading Models
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
            We orchestrate the best-in-class foundation models for your specific
            needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "GPT-4",
            "Claude 3.5 Sonnet",
            "Llama 3",
            "Mistral",
            "Cohere",
            "Gemini",
          ].map((tech, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-indigo-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases Grid */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">Enterprise Use Cases</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
            Practical applications delivering ROI today.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 p-12 rounded-2xl border border-white/10">
          <h2 className="text-3xl font-bold mb-6">Start Your PoC in 2 Weeks</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We specialize in rapid prototyping. Validate your Generative AI idea
            quickly with our accelerated engineering pods.
          </p>
          <Button href="/contact">Launch Pilot</Button>
        </div>
      </Section>
    </>
  );
}
