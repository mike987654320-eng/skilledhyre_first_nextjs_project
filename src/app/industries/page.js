import {
  BuildingOfficeIcon,
  HeartIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
  TruckIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import Section from "../../components/Section";
import Card from "../../components/Card";

export default function Industries() {
  const industries = [
    {
      title: "Healthcare",
      description:
        "AI diagnostics, patient risk analytics, health assistants, and hospital intelligence systems.",
      icon: HeartIcon,
    },
    {
      title: "FinTech & Banking",
      description:
        "Fraud detection, credit scoring, transaction monitoring, and compliance AI.",
      icon: BanknotesIcon,
    },
    {
      title: "Retail & E-commerce",
      description:
        "Recommendation engines, demand forecasting, dynamic pricing, and personalization.",
      icon: ShoppingCartIcon,
    },
    {
      title: "Manufacturing",
      description:
        "Predictive maintenance, quality inspection, and supply chain optimization.",
      icon: Cog6ToothIcon,
    },
    {
      title: "Education & EdTech",
      description:
        "AI tutors, adaptive learning platforms, and student analytics.",
      icon: AcademicCapIcon,
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Route optimization, inventory forecasting, and smart warehousing.",
      icon: TruckIcon,
    },
    {
      title: "Marketing & Media",
      description:
        "Marketing intelligence, content analytics, and campaign optimization.",
      icon: MegaphoneIcon,
    },
  ];

  return (
    <>
      <Section className="text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8">
          <BuildingOfficeIcon className="w-4 h-4" />
          <span>Industries</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Industry-Specific <br />{" "}
          <span className="text-gradient-primary">AI & Software Solutions</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          We design solutions tailored to industry-specific challenges, ensuring
          relevance and impact.
        </p>
      </Section>

      <Section className="bg-white/5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, index) => (
            <Card key={index} {...ind} />
          ))}
        </div>
      </Section>
    </>
  );
}
