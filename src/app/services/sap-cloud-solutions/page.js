import GenericServicePage from "../../../components/common/GenericServicePage";

export const metadata = {
  title: "SAP Cloud Solutions | SkilledHyre Labs",
  description: "Power Enterprise Systems with Scalable Cloud Infrastructure",
};

export default function page() {
  const content = {
    category: "SAP Cloud Solutions",
    title: "Power Enterprise Systems with Scalable Cloud Infrastructure",
    descriptions: [
      "Cloud technologies enable organizations to deploy SAP environments faster while reducing infrastructure costs. Our SAP cloud services help enterprises migrate, deploy, and manage SAP systems on secure and scalable cloud platforms.",
    ],
    sections: [
      {
        title: "Cloud Capabilities",
        items: [
          {
            title: "SAP Cloud Migration",
            description:
              "Move SAP workloads from on-premise environments to cloud infrastructure.",
          },
          {
            title: "Cloud Infrastructure Setup",
            description:
              "Deploy SAP systems on leading cloud platforms for scalability and reliability.",
          },
          {
            title: "SAP Cloud Integration",
            description:
              "Connect SAP cloud systems with enterprise applications and data platforms.",
          },
          {
            title: "Security & Compliance",
            description:
              "Ensure enterprise-grade security and compliance for cloud-based SAP systems.",
          },
          {
            title: "Performance Optimization",
            description:
              "Monitor and optimize cloud infrastructure for high availability and performance.",
          },
        ],
      },
      {
        title: "Benefits",
        items: [
          { title: "Flexible and scalable infrastructure" },
          { title: "Reduced hardware and maintenance costs" },
          { title: "Faster deployment and system upgrades" },
          { title: "Improved disaster recovery capabilities" },
        ],
      },
    ],
    cta: {
      title:
        "Accelerate digital transformation with scalable SAP cloud solutions.",
      buttonText: "Transform SAP with Cloud Technology",
    },
  };

  return <GenericServicePage content={content} />;
}
