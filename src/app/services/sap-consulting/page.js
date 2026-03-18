import GenericServicePage from "../../../components/common/GenericServicePage";

export const metadata = {
  title: "SAP Consulting & Integration | SkilledHyre Labs",
  description: "Connect Your Enterprise Systems with Intelligent SAP Solutions",
};

export default function page() {
  const content = {
    category: "SAP Consulting",
    title: "Connect Your Enterprise Systems with Intelligent SAP Solutions",
    descriptions: [
      "We help organizations integrate SAP platforms with modern business applications, enabling seamless data flow, automation, and real-time operational visibility across enterprise systems.",
      "Our SAP consulting experts design scalable integration architectures that connect ERP, CRM, cloud platforms, and third-party systems for improved efficiency and decision-making.",
    ],
    sections: [
      {
        title: "SAP Integration Capabilities",
        items: [
          {
            title: "SAP ERP Integration",
            description:
              "Connect SAP with enterprise systems such as CRM, finance platforms, and supply chain applications.",
          },
          {
            title: "API & Cloud Integration",
            description:
              "Integrate SAP with modern cloud platforms, APIs, and digital applications for unified business operations.",
          },
          {
            title: "Enterprise Workflow Automation",
            description:
              "Automate complex business workflows across multiple systems and departments.",
          },
          {
            title: "Data Synchronization & Migration",
            description:
              "Ensure secure and reliable data exchange between SAP systems and external platforms.",
          },
          {
            title: "SAP System Modernization",
            description:
              "Upgrade legacy ERP environments with modern SAP architecture and intelligent integrations.",
          },
        ],
      },
      {
        title: "Why Businesses Choose Our SAP Expertise",
        items: [
          { title: "Enterprise-grade SAP architecture solutions" },
          { title: "Seamless integration with modern digital platforms" },
          { title: "Scalable ERP infrastructure for growing enterprises" },
          { title: "Secure and reliable enterprise system connectivity" },
          { title: "Optimized workflows and operational efficiency" },
        ],
      },
    ],
    cta: {
      title: "Talk to our experts about your enterprise SAP goals.",
      buttonText: "Schedule a Consultation",
    },
  };

  return <GenericServicePage content={content} />;
}
