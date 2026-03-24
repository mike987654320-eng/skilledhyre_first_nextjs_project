import GenericServicePage from "../../../components/common/GenericServicePage";

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
          },
          {
            title: "API & Cloud Integration",
            description:
              "Integrate SAP with modern cloud platforms, APIs, and digital applications for unified business operations.",
            icon: "CloudIcon",
          },
          {
            title: "Enterprise Workflow Automation",
            description:
              "Automate complex business workflows across multiple systems and departments.",
            icon: "QueueListIcon",
          },
          {
            title: "Data Synchronization & Migration",
            description:
              "Ensure secure and reliable data exchange between SAP systems and external platforms.",
            icon: "ArrowsUpDownIcon",
          },
          {
            title: "SAP System Modernization",
            description:
              "Upgrade legacy ERP environments with modern SAP architecture and intelligent integrations.",
            icon: "ArrowPathIcon",
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
          },
          {
            title: "System Configuration",
            description:
              "Configuring SAP modules and business processes to meet enterprise requirements.",
            icon: "WrenchScrewdriverIcon",
          },
          {
            title: "Data Migration & Setup",
            description:
              "Securely migrate enterprise data from legacy systems to the new SAP environment.",
            icon: "ArrowPathIcon",
          },
          {
            title: "Testing & QA",
            description:
              "Rigorous testing ensures system stability, data integrity, and process accuracy.",
            icon: "BeakerIcon",
          },
          {
            title: "Go-Live & Post-Support",
            description:
              "We manage the transition to the live environment and provide ongoing support.",
            icon: "RocketLaunchIcon",
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
          },
          {
            title: "Data Migration",
            description:
              "Securely move enterprise data to the target SAP environment.",
            icon: "ArrowPathIcon",
          },
          {
            title: "System Upgrade & Migration",
            description:
              "Upgrade and migrate SAP systems simultaneously for efficiency.",
            icon: "RocketLaunchIcon",
          },
          {
            title: "Platform Migration",
            description:
              "Move SAP workloads between different infrastructure platforms or cloud providers.",
            icon: "ArrowsRightLeftIcon",
          },
          {
            title: "Post-Migration Validation",
            description:
              "Ensure all systems are functioning correctly after the transition.",
            icon: "LifebuoyIcon",
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
          },
          {
            title: "SAP Fiori App Development",
            description:
              "Modern, intuitive enterprise applications designed for improved user experience.",
            icon: "WindowIcon",
          },
          {
            title: "Workflow Automation",
            description:
              "Automate complex operational workflows to improve productivity.",
            icon: "QueueListIcon",
          },
          {
            title: "Custom Reporting & Dashboards",
            description:
              "Develop advanced analytics and reporting tools tailored to business needs.",
            icon: "ChartBarIcon",
          },
          {
            title: "SAP Extensions",
            description:
              "Enhance existing SAP functionality with custom-built applications.",
            icon: "CubeIcon",
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
          },
          {
            title: "API-Based Connectivity",
            description:
              "Use secure APIs to integrate SAP with modern digital applications.",
            icon: "CodeBracketIcon",
          },
          {
            title: "Cloud & Hybrid Integration",
            description:
              "Seamlessly connect cloud-based and on-premise SAP environments.",
            icon: "CloudIcon",
          },
          {
            title: "Real-Time Data Exchange",
            description:
              "Enable instant data synchronization across the enterprise ecosystem.",
            icon: "ArrowsUpDownIcon",
          },
          {
            title: "Workflow Orchestration",
            description:
              "Design and automate complex business processes across multiple systems.",
            icon: "QueueListIcon",
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
          },
          {
            title: "Cloud Infrastructure Setup",
            description:
              "Deploy SAP systems on leading cloud platforms for scalability and reliability.",
            icon: "CloudIcon",
          },
          {
            title: "SAP Cloud Integration",
            description:
              "Connect SAP cloud systems with enterprise applications and data platforms.",
            icon: "ArrowsRightLeftIcon",
          },
          {
            title: "Security & Compliance",
            description:
              "Ensure enterprise-grade security and compliance for cloud-based SAP systems.",
            icon: "ShieldCheckIcon",
          },
          {
            title: "Performance Optimization",
            description:
              "Monitor and optimize cloud infrastructure for high availability and performance.",
            icon: "ChartBarIcon",
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
          },
          {
            title: "Performance Optimization",
            description:
              "We analyze system performance and implement improvements to enhance efficiency.",
            icon: "ChartBarIcon",
          },
          {
            title: "Security & Compliance",
            description:
              "Regular updates and security measures protect enterprise data.",
            icon: "ShieldCheckIcon",
          },
          {
            title: "Troubleshooting",
            description:
              "Our technical experts quickly resolve technical problems and system errors.",
            icon: "LifebuoyIcon",
          },
          {
            title: "System Upgrades",
            description:
              "We assist with upgrades and enhancements to ensure SAP environments remain current.",
            icon: "ArrowUpIcon",
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
