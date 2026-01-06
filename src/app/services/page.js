import {
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "High-performance websites, CMS platforms, landing pages, and SEO-optimized experiences.",
      icon: GlobeAltIcon,
    },
    {
      title: "Custom Software Development",
      description:
        "Enterprise-grade applications, SaaS platforms, ERP/CRM systems, and automation tools.",
      icon: CodeBracketSquareIcon,
    },
    {
      title: "Mobile App Development",
      description:
        "Android, iOS, and cross-platform apps built for scale and performance.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Cloud architecture, CI/CD pipelines, migration, monitoring, and optimization.",
      icon: CloudIcon,
    },
    {
      title: "Product Engineering & MVP",
      description:
        "Rapid MVP development, prototyping, and startup product engineering.",
      icon: BeakerIcon,
    },
  ];

  return (
    <>
      <Section className="text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm mb-8">
          <WrenchScrewdriverIcon className="w-4 h-4" />
          <span>Services</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Full-Stack IT & <br />{" "}
          <span className="text-gradient-primary">Software Development</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          From simple websites to complex enterprise architectures, we build it
          all.
        </p>
      </Section>

      <Section className="bg-white/5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((svc, index) => (
            <Card key={index} {...svc} />
          ))}
        </div>
        <div className="text-center">
          <Button href="/contact">Build With Us</Button>
        </div>
      </Section>
    </>
  );
}
