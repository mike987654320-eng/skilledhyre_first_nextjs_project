import GenericServicePage from "../../../components/common/GenericServicePage";

export const metadata = {
  title: "SAP Integration Services | SkilledHyre Labs",
  description: "Connect Systems and Create a Unified Enterprise Ecosystem",
};

export default function page() {
  const content = {
    category: "SAP Integration",
    title: "Connect Systems and Create a Unified Enterprise Ecosystem",
    descriptions: [
      "Organizations rely on multiple software platforms to manage operations. Our SAP integration services connect ERP systems with CRM platforms, cloud applications, and third-party tools to ensure seamless data exchange and operational efficiency.",
    ],
    sections: [
      {
        title: "Integration Capabilities",
        items: [
          {
            title: "Enterprise Application Integration",
            description:
              "Connect SAP with business platforms such as CRM, finance systems, and supply chain tools.",
          },
          {
            title: "API-Based Integration",
            description:
              "Secure API frameworks enable seamless communication between SAP and external systems.",
          },
          {
            title: "Cloud Integration",
            description:
              "Integrate SAP with cloud applications and SaaS platforms.",
          },
          {
            title: "Data Synchronization",
            description:
              "Ensure real-time data flow between enterprise systems.",
          },
          {
            title: "Workflow Automation",
            description:
              "Automate business processes across integrated systems.",
          },
        ],
      },
      {
        title: "Benefits of SAP Integration",
        items: [
          { title: "Unified digital ecosystem" },
          { title: "Improved collaboration across departments" },
          { title: "Real-time operational visibility" },
          { title: "Reduced manual data processing" },
        ],
      },
    ],
    cta: {
      title:
        "Unlock the full value of SAP by integrating it with your business ecosystem.",
      buttonText: "Build a Connected Enterprise",
    },
  };

  return <GenericServicePage content={content} />;
}
