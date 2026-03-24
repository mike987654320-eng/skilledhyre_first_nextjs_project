import GenericServicePage from "../../../components/common/GenericServicePage";
import {
  Square3Stack3DIcon,
  PuzzlePieceIcon,
  ArrowsRightLeftIcon,
  CpuChipIcon,
  LifebuoyIcon,
  CubeIcon,
  EyeIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

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
            icon: "Square3Stack3DIcon",
            icon_2: Square3Stack3DIcon,
          },
          {
            title: "ERP Module Development",
            description:
              "Finance & accounting, Inventory, Procurement, HRM, CRM. Centralize operations across departments.",
            icon: "PuzzlePieceIcon",
            icon_2: PuzzlePieceIcon,
          },
          {
            title: "ERP Integration Services",
            description:
              "API-based connectivity, CRM and ERP integration, Payment gateway integration, Data synchronization.",
            icon: "ArrowsRightLeftIcon",
            icon_2: ArrowsRightLeftIcon,
          },
          {
            title: "ERP System Modernization",
            description:
              "Legacy system migration, Workflow automation, UI/UX modernization for enterprise applications.",
            icon: "CpuChipIcon",
            icon_2: CpuChipIcon,
          },
          {
            title: "ERP Support & Maintenance",
            description:
              "System monitoring, Bug fixes, Database optimization, Security enhancements, Continuous support.",
            icon: "LifebuoyIcon",
            icon_2: LifebuoyIcon,
          },
        ],
      },
      {
        title: "Benefits of ERP Software Development",
        items: [
          {
            title: "Centralized Management",
            description: "Centralized management of business operations.",
            icon: "CubeIcon",
            icon_2: CubeIcon,
          },
          {
            title: "Improved Visibility",
            description: "Improved data visibility and reporting.",
            icon: "EyeIcon",
            icon_2: EyeIcon,
          },
          {
            title: "Automated Workflows",
            description: "Automated workflows and reduced manual processes.",
            icon: "Cog6ToothIcon",
            icon_2: Cog6ToothIcon,
          },
          {
            title: "Enhanced Collaboration",
            description: "Enhanced collaboration across departments.",
            icon: "UserGroupIcon",
            icon_2: UserGroupIcon,
          },
          {
            title: "Scalable Infrastructure",
            description: "Scalable infrastructure for growing enterprises.",
            icon: "ChartBarIcon",
            icon_2: ChartBarIcon,
          },
        ],
      },
      {
        title: "Industries We Support",
        description:
          "We design ERP systems that align with the operational requirements of each industry.",
        items: [
          {
            title: "Manufacturing",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Retail & E-commerce",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Healthcare",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Logistics & Supply Chain",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Finance & Banking",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Technology & IT services",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
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
