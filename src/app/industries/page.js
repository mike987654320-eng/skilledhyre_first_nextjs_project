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
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import IndustryTabs from "../../components/industries/IndustryTabs";
import CounterItem from "@/components/common/CounterItem";
// import CounterItem from "../../components/common/CounterItem";

export default function Industries() {
  const industries = [
    {
      title: "Healthcare",
      description:
        "AI diagnostics, patient risk analytics, health assistants, and hospital intelligence systems.",
      icon: HeartIcon,
      id: "healthcare",
    },
    {
      title: "FinTech & Banking",
      description:
        "Fraud detection, credit scoring, transaction monitoring, and compliance AI.",
      icon: BanknotesIcon,
      id: "fintech-banking",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Recommendation engines, demand forecasting, dynamic pricing, and personalization.",
      icon: ShoppingCartIcon,
      id: "retail-ecommerce",
    },
    {
      title: "Manufacturing",
      description:
        "Predictive maintenance, quality inspection, and supply chain optimization.",
      icon: Cog6ToothIcon,
      id: "manufacturing",
    },
    {
      title: "Education & EdTech",
      description:
        "AI tutors, adaptive learning platforms, and student analytics.",
      icon: AcademicCapIcon,
      id: "education-edtech",
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "Route optimization, inventory forecasting, and smart warehousing.",
      icon: TruckIcon,
      id: "logistics-supply-chain",
    },
    {
      title: "Marketing & Media",
      description:
        "Marketing intelligence, content analytics, and campaign optimization.",
      icon: MegaphoneIcon,
      id: "marketing-media",
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

      {/* Deep Dive Section */}
      <Section>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">Inside the Sectors</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-[16px]">
              Discover how we tackle specific challenges in your industry.
            </p>
          </div>
          <IndustryTabs />
        </div>
      </Section>

      {/* Impact Stats Section */}
      <Section className="bg-white/5">
        <div className="max-w-[1170px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">
              Impact by the Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 500, label: "Mn+ Data Points Processed", suffix: "" },
              { value: 40, label: "Efficiency Increase", suffix: "%" },
              { value: 12, label: "Industries Transformed", suffix: "+" },
              { value: 24, label: "h Support Coverage", suffix: "/7" },
            ].map((stat, i) => (
              <CounterItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
