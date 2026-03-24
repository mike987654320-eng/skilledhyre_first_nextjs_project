import GenericServicePage from "../../../components/common/GenericServicePage";
import {
  ArrowsRightLeftIcon,
  CloudIcon,
  QueueListIcon,
  ArrowsUpDownIcon,
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  LifebuoyIcon,
  CodeBracketIcon,
  WindowIcon,
  ChartBarIcon,
  CubeIcon,
  Square3Stack3DIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "SAP Consulting & Solutions | SkilledHyre Labs",
  description:
    "Comprehensive SAP services including Consulting, Implementation, Migration, and Support.",
};

export default function page() {
  const content = {
    category: "SAP Services",
    title: "End-to-End SAP Solutions for Enterprise Excellence",
    descriptions: [
      "SkilledHyre Labs provides a full spectrum of SAP services to help organizations streamline operations, enhance data visibility, and drive digital transformation. From strategy and implementation to custom development and ongoing support, we ensure your SAP ecosystem delivers maximum value.",
    ],
    sections: [
      {
        id: "consulting",
        title: "SAP Consulting & Strategy",
        description:
          "Connect Your Enterprise Systems with Intelligent SAP Solutions",
        items: [
          {
            title: "SAP ERP Integration",
            description:
              "Connect SAP with enterprise systems such as CRM, finance platforms, and supply chain applications.",
            icon: "ArrowsRightLeftIcon",
            icon_2: ArrowsRightLeftIcon,
          },
          {
            title: "API & Cloud Integration",
            description:
              "Integrate SAP with modern cloud platforms, APIs, and digital applications for unified business operations.",
            icon: "CloudIcon",
            icon_2: CloudIcon,
          },
          {
            title: "Enterprise Workflow Automation",
            description:
              "Automate complex business workflows across multiple systems and departments.",
            icon: "QueueListIcon",
            icon_2: QueueListIcon,
          },
          {
            title: "Data Synchronization & Migration",
            description:
              "Ensure secure and reliable data exchange between SAP systems and external platforms.",
            icon: "ArrowsUpDownIcon",
            icon_2: ArrowsUpDownIcon,
          },
          {
            title: "SAP System Modernization",
            description:
              "Upgrade legacy ERP environments with modern SAP architecture and intelligent integrations.",
            icon: "ArrowPathIcon",
            icon_2: ArrowPathIcon,
          },
        ],
      },
      {
        id: "implementation",
        title: "SAP Implementation",
        description: "End-to-End SAP Deployment and Configuration",
        items: [
          {
            title: "Project Planning & Strategy",
            description:
              "We define the implementation roadmap, resource requirements, and project milestones.",
            icon: "ClipboardDocumentCheckIcon",
            icon_2: ClipboardDocumentCheckIcon,
          },
          {
            title: "System Configuration",
            description:
              "Configuring SAP modules and business processes to meet enterprise requirements.",
            icon: "WrenchScrewdriverIcon",
            icon_2: WrenchScrewdriverIcon,
          },
          {
            title: "Data Migration & Setup",
            description:
              "Securely migrate enterprise data from legacy systems to the new SAP environment.",
            icon: "ArrowPathIcon",
            icon_2: ArrowPathIcon,
          },
          {
            title: "Testing & QA",
            description:
              "Rigorous testing ensures system stability, data integrity, and process accuracy.",
            icon: "BeakerIcon",
            icon_2: BeakerIcon,
          },
          {
            title: "Go-Live & Post-Support",
            description:
              "We manage the transition to the live environment and provide ongoing support.",
            icon: "RocketLaunchIcon",
            icon_2: RocketLaunchIcon,
          },
        ],
      },
      {
        id: "migration",
        title: "SAP Migration",
        description: "Secure and Reliable SAP System Transitions",
        items: [
          {
            title: "Pre-Migration Assessment",
            description:
              "Evaluate your current environment and define the migration strategy.",
            icon: "MagnifyingGlassIcon",
            icon_2: MagnifyingGlassIcon,
          },
          {
            title: "Data Migration",
            description:
              "Securely move enterprise data to the target SAP environment.",
            icon: "ArrowPathIcon",
            icon_2: ArrowPathIcon,
          },
          {
            title: "System Upgrade & Migration",
            description:
              "Upgrade and migrate SAP systems simultaneously for efficiency.",
            icon: "RocketLaunchIcon",
            icon_2: RocketLaunchIcon,
          },
          {
            title: "Platform Migration",
            description:
              "Move SAP workloads between different infrastructure platforms or cloud providers.",
            icon: "ArrowsRightLeftIcon",
            icon_2: ArrowsRightLeftIcon,
          },
          {
            title: "Post-Migration Validation",
            description:
              "Ensure all systems are functioning correctly after the transition.",
            icon: "LifebuoyIcon",
            icon_2: LifebuoyIcon,
          },
        ],
      },
      {
        id: "custom-development",
        title: "SAP Custom Development",
        description: "Extend SAP Capabilities with Tailored Solutions",
        items: [
          {
            title: "SAP ABAP Development",
            description:
              "Custom modules and enhancements built using SAP’s programming framework.",
            icon: "CodeBracketIcon",
            icon_2: CodeBracketIcon,
          },
          {
            title: "SAP Fiori App Development",
            description:
              "Modern, intuitive enterprise applications designed for improved user experience.",
            icon: "WindowIcon",
            icon_2: WindowIcon,
          },
          {
            title: "Workflow Automation",
            description:
              "Automate complex operational workflows to improve productivity.",
            icon: "QueueListIcon",
            icon_2: QueueListIcon,
          },
          {
            title: "Custom Reporting & Dashboards",
            description:
              "Develop advanced analytics and reporting tools tailored to business needs.",
            icon: "ChartBarIcon",
            icon_2: ChartBarIcon,
          },
          {
            title: "SAP Extensions",
            description:
              "Enhance existing SAP functionality with custom-built applications.",
            icon: "CubeIcon",
            icon_2: CubeIcon,
          },
        ],
      },
      {
        id: "integration",
        title: "SAP Integration Services",
        description:
          "Unified Enterprise Ecosystems through Seamless Integration",
        items: [
          {
            title: "Cross-Platform Integration",
            description:
              "Connect SAP with third-party ERP, CRM, and financial systems.",
            icon: "Square3Stack3DIcon",
            icon_2: Square3Stack3DIcon,
          },
          {
            title: "API-Based Connectivity",
            description:
              "Use secure APIs to integrate SAP with modern digital applications.",
            icon: "CodeBracketIcon",
            icon_2: CodeBracketIcon,
          },
          {
            title: "Cloud & Hybrid Integration",
            description:
              "Seamlessly connect cloud-based and on-premise SAP environments.",
            icon: "CloudIcon",
            icon_2: CloudIcon,
          },
          {
            title: "Real-Time Data Exchange",
            description:
              "Enable instant data synchronization across the enterprise ecosystem.",
            icon: "ArrowsUpDownIcon",
            icon_2: ArrowsUpDownIcon,
          },
          {
            title: "Workflow Orchestration",
            description:
              "Design and automate complex business processes across multiple systems.",
            icon: "QueueListIcon",
            icon_2: QueueListIcon,
          },
        ],
      },
      {
        id: "cloud-solutions",
        title: "SAP Cloud Solutions",
        description:
          "Power Enterprise Systems with Scalable Cloud Infrastructure",
        items: [
          {
            title: "SAP Cloud Migration",
            description:
              "Move SAP workloads from on-premise environments to cloud infrastructure.",
            icon: "ArrowPathIcon",
            icon_2: ArrowPathIcon,
          },
          {
            title: "Cloud Infrastructure Setup",
            description:
              "Deploy SAP systems on leading cloud platforms for scalability and reliability.",
            icon: "CloudIcon",
            icon_2: CloudIcon,
          },
          {
            title: "SAP Cloud Integration",
            description:
              "Connect SAP cloud systems with enterprise applications and data platforms.",
            icon: "ArrowsRightLeftIcon",
            icon_2: ArrowsRightLeftIcon,
          },
          {
            title: "Security & Compliance",
            description:
              "Ensure enterprise-grade security and compliance for cloud-based SAP systems.",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Performance Optimization",
            description:
              "Monitor and optimize cloud infrastructure for high availability and performance.",
            icon: "ChartBarIcon",
            icon_2: ChartBarIcon,
          },
        ],
      },
      {
        id: "support-maintenance",
        title: "SAP Support & Maintenance",
        description: "Ensure Reliable and High-Performance SAP Systems",
        items: [
          {
            title: "System Monitoring",
            description:
              "Continuous monitoring helps detect and resolve issues before they affect operations.",
            icon: "ComputerDesktopIcon",
            icon_2: ComputerDesktopIcon,
          },
          {
            title: "Performance Optimization",
            description:
              "We analyze system performance and implement improvements to enhance efficiency.",
            icon: "ChartBarIcon",
            icon_2: ChartBarIcon,
          },
          {
            title: "Security & Compliance",
            description:
              "Regular updates and security measures protect enterprise data.",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Troubleshooting",
            description:
              "Our technical experts quickly resolve technical problems and system errors.",
            icon: "LifebuoyIcon",
            icon_2: LifebuoyIcon,
          },
          {
            title: "System Upgrades",
            description:
              "We assist with upgrades and enhancements to ensure SAP environments remain current.",
            icon: "ArrowUpIcon",
            icon_2: ArrowUpIcon,
          },
        ],
      },
    ],
    cta: {
      title: "Ready to Transform Your Enterprise with SAP?",
      buttonText: "Schedule a Consultation",
    },
  };

  return <GenericServicePage content={content} />;
}
