import GenericServicePage from "../../../components/common/GenericServicePage";

export const metadata = {
  title: "SAP Custom Development | SkilledHyre Labs",
  description: "Extend SAP Capabilities with Tailored Solutions",
};

export default function page() {
  const content = {
    category: "SAP Custom Dev",
    title: "Extend SAP Capabilities with Tailored Solutions",
    descriptions: [
      "Standard SAP systems may not fully address unique enterprise requirements. Our SAP custom development services allow organizations to extend SAP functionality with specialized applications and automation tools.",
    ],
    sections: [
      {
        title: "Development Services",
        items: [
          {
            title: "SAP ABAP Development",
            description:
              "Custom modules and enhancements built using SAP’s programming framework.",
          },
          {
            title: "SAP Fiori Application Development",
            description:
              "Modern, intuitive enterprise applications designed for improved user experience.",
          },
          {
            title: "Business Workflow Automation",
            description:
              "Automate complex operational workflows to improve productivity.",
          },
          {
            title: "Custom Reporting & Dashboards",
            description:
              "Develop advanced analytics and reporting tools tailored to business needs.",
          },
          {
            title: "SAP Extensions",
            description:
              "Enhance existing SAP functionality with custom-built applications.",
          },
        ],
      },
      {
        title: "Benefits",
        items: [
          { title: "Tailored SAP solutions" },
          { title: "Improved operational efficiency" },
          { title: "Better user experience" },
          { title: "Advanced reporting capabilities" },
        ],
      },
    ],
    cta: {
      title:
        "Extend your SAP ecosystem with enterprise-grade custom development.",
      buttonText: "Build Customized SAP Applications",
    },
  };

  return <GenericServicePage content={content} />;
}
