import Section from "../common/Section";
import Card from "../common/Card";
import {
  BanknotesIcon,
  HeartIcon,
  ShoppingCartIcon,
  UsersIcon,
  ChatBubbleBottomCenterTextIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

export default function IndustryUseCases() {
  const useCases = [
    {
      title: "Finance & Accounting",
      description:
        "Invoice processing, reconciliation, and automated regulatory reporting.",
      icon: BanknotesIcon,
    },
    {
      title: "Healthcare",
      description:
        "Claims processing, patient data workflows, and administrative task automation.",
      icon: HeartIcon,
    },
    {
      title: "E-commerce",
      description:
        "Order management, inventory synchronization, and return processing.",
      icon: ShoppingCartIcon,
    },
    {
      title: "HR & Recruitment",
      description:
        "Candidate screening workflows, onboarding automation, and payroll systems.",
      icon: UsersIcon,
    },
    {
      title: "Customer Support",
      description:
        "AI chatbots, ticket routing automation, and multi-channel support workflows.",
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      title: "Manufacturing",
      description:
        "Supply chain optimization, predictive maintenance alerts, and production tracking.",
      icon: CogIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center text-gradient-primary">
          🌟 Industry Use Cases
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              title={useCase.title}
              description={useCase.description}
              icon={useCase.icon}
              className="bg-white/5 border-white/10"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
