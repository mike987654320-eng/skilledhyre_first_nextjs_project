import GenericServicePage from "../../../components/common/GenericServicePage";

export const metadata = {
  title: "SAP Support & Maintenance | SkilledHyre Labs",
  description: "Ensure Reliable and High-Performance SAP Systems",
};

export default function page() {
  const content = {
    category: "SAP Support",
    title: "Ensure Reliable and High-Performance SAP Systems",
    descriptions: [
      "Enterprise ERP systems require ongoing maintenance and monitoring to maintain performance and security. Our SAP support services help organizations ensure system stability and operational continuity.",
    ],
    sections: [
      {
        title: "Our Support Services",
        items: [
          {
            title: "System Monitoring",
            description:
              "Continuous monitoring helps detect and resolve issues before they affect operations.",
          },
          {
            title: "Performance Optimization",
            description:
              "We analyze system performance and implement improvements to enhance efficiency.",
          },
          {
            title: "Security & Compliance Management",
            description:
              "Regular updates and security measures protect enterprise data.",
          },
          {
            title: "Troubleshooting & Issue Resolution",
            description:
              "Our technical experts quickly resolve technical problems and system errors.",
          },
          {
            title: "System Upgrades",
            description:
              "We assist with upgrades and enhancements to ensure SAP environments remain current.",
          },
        ],
      },
      {
        title: "Benefits",
        items: [
          { title: "Reduced downtime" },
          { title: "Improved system reliability" },
          { title: "Faster issue resolution" },
          { title: "Enhanced security and compliance" },
        ],
      },
    ],
    cta: {
      title: "Ensure consistent performance with expert SAP support services.",
      buttonText: "Maintain a Stable SAP Environment",
    },
  };

  return <GenericServicePage content={content} />;
}
