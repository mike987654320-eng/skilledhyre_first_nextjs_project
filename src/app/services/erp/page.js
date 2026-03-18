import GenericServicePage from "../../../components/common/GenericServicePage";

export const metadata = {
  title: "ERP Software Development | SkilledHyre Labs",
  description: "Build Scalable ERP Systems to Streamline Enterprise Operations",
};

export default function page() {
  const content = {
    category: "ERP Development",
    title: "Build Scalable ERP Systems to Streamline Enterprise Operations",
    descriptions: [
      "Enterprise Resource Planning (ERP) systems help organizations manage core business processes across finance, operations, supply chain, human resources, and customer management. Our ERP software development services enable businesses to build customized ERP platforms that improve operational efficiency, data visibility, and decision-making.",
      "At SkilledHyre Labs, we design and develop scalable ERP solutions tailored to each organization’s workflows and operational requirements. Our solutions integrate multiple business functions into a unified platform, enabling seamless data flow and improved enterprise performance.",
    ],
    sections: [
      {
        title: "Our ERP Development Capabilities",
        description:
          "Custom ERP systems allow businesses to manage operations efficiently while maintaining flexibility for future growth.",
        items: [
          {
            title: "Custom ERP Software Development",
            description:
              "Custom ERP architecture design, Enterprise workflow automation, Modular ERP system development.",
          },
          {
            title: "ERP Module Development",
            description:
              "Finance & accounting, Inventory, Procurement, HRM, CRM. Centralize operations across departments.",
          },
          {
            title: "ERP Integration Services",
            description:
              "API-based connectivity, CRM and ERP integration, Payment gateway integration, Data synchronization.",
          },
          {
            title: "ERP System Modernization",
            description:
              "Legacy system migration, Workflow automation, UI/UX modernization for enterprise applications.",
          },
          {
            title: "ERP Support & Maintenance",
            description:
              "System monitoring, Bug fixes, Database optimization, Security enhancements, Continuous support.",
          },
        ],
      },
      {
        title: "Benefits of ERP Software Development",
        items: [
          {
            title: "Centralized Management",
            description: "Centralized management of business operations.",
          },
          {
            title: "Improved Visibility",
            description: "Improved data visibility and reporting.",
          },
          {
            title: "Automated Workflows",
            description: "Automated workflows and reduced manual processes.",
          },
          {
            title: "Enhanced Collaboration",
            description: "Enhanced collaboration across departments.",
          },
          {
            title: "Scalable Infrastructure",
            description: "Scalable infrastructure for growing enterprises.",
          },
        ],
      },
      {
        title: "Industries We Support",
        description:
          "We design ERP systems that align with the operational requirements of each industry.",
        items: [
          { title: "Manufacturing" },
          { title: "Retail & E-commerce" },
          { title: "Healthcare" },
          { title: "Logistics & Supply Chain" },
          { title: "Finance & Banking" },
          { title: "Technology & IT services" },
        ],
      },
    ],
    cta: {
      title: "Transform Business Operations with Intelligent ERP Systems",
      buttonText: "Start Your ERP Development Project",
    },
  };

  return <GenericServicePage content={content} />;
}
