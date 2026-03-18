import GenericServicePage from "../../../components/common/GenericServicePage";

export const metadata = {
  title: "SAP Migration Services | SkilledHyre Labs",
  description: "Upgrade Your ERP for the Future",
};

export default function page() {
  const content = {
    category: "SAP Migration",
    title: "Upgrade Your ERP for the Future",
    descriptions: [
      "Legacy ERP environments often limit business agility and analytics capabilities. Our SAP migration services help enterprises transition from SAP ECC systems to modern SAP S/4HANA platforms, enabling faster performance and real-time insights.",
      "We ensure a smooth migration process while minimizing downtime and maintaining business continuity.",
    ],
    sections: [
      {
        title: "Migration Services",
        items: [
          {
            title: "System Landscape Assessment",
            description:
              "We analyze the current SAP environment and define the most efficient migration strategy.",
          },
          {
            title: "Data Migration & Conversion",
            description:
              "Enterprise data is securely converted and transferred to the new system environment.",
          },
          {
            title: "S/4HANA System Deployment",
            description:
              "Implementation of the next-generation ERP platform optimized for performance and analytics.",
          },
          {
            title: "Process Optimization",
            description:
              "We streamline business processes to align with modern SAP capabilities.",
          },
          {
            title: "Post-Migration Support",
            description:
              "Continuous monitoring ensures system stability after migration.",
          },
        ],
      },
      {
        title: "Advantages of S/4HANA Migration",
        items: [
          { title: "Faster data processing" },
          { title: "Real-time analytics" },
          { title: "Simplified system architecture" },
          { title: "Modern SAP Fiori user experience" },
        ],
      },
    ],
    cta: {
      title:
        "Upgrade your enterprise infrastructure with SAP S/4HANA migration services.",
      buttonText: "Modernize Your ERP Platform",
    },
  };

  return <GenericServicePage content={content} />;
}
