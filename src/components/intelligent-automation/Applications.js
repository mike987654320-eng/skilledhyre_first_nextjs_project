import Section from "../common/Section";
import Card from "../common/Card";
import {
  BanknotesIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export default function Applications() {
  const apps = [
    {
      title: "Finance & Accounting",
      description:
        "Invoice processing, reconciliation, financial reporting, and compliance workflows.",
      icon: BanknotesIcon,
    },
    {
      title: "Healthcare Workflow",
      description:
        "Claims processing, patient record management, and appointment scheduling.",
      icon: HeartIcon,
    },
    {
      title: "E-commerce & Retail",
      description:
        "Order processing, inventory updates, pricing adjustments, and customer support.",
      icon: ShoppingCartIcon,
    },
    {
      title: "HR & Recruitment",
      description:
        "Candidate screening, onboarding workflows, payroll processing, and performance tracking.",
      icon: UserGroupIcon,
    },
    {
      title: "Supply Chain & Manufacturing",
      description:
        "Procurement automation, predictive maintenance, and logistics optimization.",
      icon: TruckIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Core Business Applications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <Card
              key={index}
              title={app.title}
              description={app.description}
              icon={app.icon}
              className="bg-white/5 border-white/10"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
