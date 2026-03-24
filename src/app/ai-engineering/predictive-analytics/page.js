import GenericServicePage from "../../../components/common/GenericServicePage";
import {
  BanknotesIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  TruckIcon,
  CpuChipIcon,
  CalculatorIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  SparklesIcon,
  ServerIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  CircleStackIcon,
  BeakerIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  // BuildingHospitalIcon,
  IdentificationIcon,
  UserPlusIcon,
  CloudIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Predictive Analytics | AI Engineering | SkilledHyre Labs",
  description:
    "Anticipate Trends. Minimize Risks. Maximize Outcomes with our Predictive Analytics solutions.",
};

export default function PredictiveAnalyticsPage() {
  const content = {
    category: "AI Engineering",
    title:
      "Predictive Analytics: Anticipate Trends. Minimize Risks. Maximize Outcomes.",
    descriptions: [
      "In today’s data-driven economy, success is no longer about reacting to events — it’s about predicting them. At SkilledHyre Labs, our Predictive Analytics solutions under the AI Engineering vertical empower businesses to transform historical data into actionable future insights.",
      "By leveraging advanced machine learning models, statistical algorithms, and real-time data processing, we help organizations forecast trends, identify risks, and make proactive, high-impact decisions.",
      "Predictive Analytics enables businesses to shift from reactive operations to forward-looking, intelligence-driven strategies.",
    ],
    sections: [
      {
        title: "What Is Predictive Analytics?",
        description:
          "Predictive Analytics integrates various technologies to answer: What is likely to happen next?",
        items: [
          {
            title: "Machine Learning (ML)",
            icon: "CpuChipIcon",
            icon_2: CpuChipIcon,
          },
          {
            title: "Statistical Modeling",
            icon: "CalculatorIcon",
            icon_2: CalculatorIcon,
          },
          {
            title: "Data Mining Techniques",
            icon: "MagnifyingGlassIcon",
            icon_2: MagnifyingGlassIcon,
          },
          {
            title: "Time-Series Forecasting",
            icon: "ClockIcon",
            icon_2: ClockIcon,
          },
          {
            title: "AI-Driven Pattern Recognition",
            icon: "SparklesIcon",
            icon_2: SparklesIcon,
          },
          {
            title: "Big Data Processing",
            icon: "ServerIcon",
            icon_2: ServerIcon,
          },
        ],
      },
      {
        title: "Why Predictive Analytics Matters",
        description:
          "Transform data into a competitive advantage by dealing with massive volumes of data and uncertain market conditions.",
        items: [
          {
            title: "Forecast demand and optimize inventory",
            icon: "ChartBarIcon",
            icon_2: ChartBarIcon,
          },
          {
            title: "Identify risks before they occur",
            icon: "ExclamationTriangleIcon",
            icon_2: ExclamationTriangleIcon,
          },
          {
            title: "Improve customer targeting and retention",
            icon: "UserGroupIcon",
            icon_2: UserGroupIcon,
          },
          {
            title: "Optimize pricing and revenue strategies",
            icon: "CurrencyDollarIcon",
            icon_2: CurrencyDollarIcon,
          },
          {
            title: "Enhance strategic decision-making",
            icon: "ScaleIcon",
            icon_2: ScaleIcon,
          },
        ],
      },
      {
        title: "Our Predictive Analytics Framework",
        description:
          "We design predictive systems that are scalable, accurate, and business-aligned.",
        items: [
          {
            title: "1. Data Collection & Preparation",
            description:
              "Gather and clean data from ERP, CRM, APIs, and third-party platforms.",
            icon: "CircleStackIcon",
            icon_2: CircleStackIcon,
          },
          {
            title: "2. Data Exploration & Feature Engineering",
            description: "Identify key variables, patterns, and relationships.",
            icon: "MagnifyingGlassIcon",
            icon_2: MagnifyingGlassIcon,
          },
          {
            title: "3. Model Development & Training",
            description:
              "Build machine learning models using regression, classification, clustering, and forecasting.",
            icon: "BeakerIcon",
            icon_2: BeakerIcon,
          },
          {
            title: "4. Model Deployment & Integration",
            description:
              "Predictive models integrated into business systems for real-time insights.",
            icon: "RocketLaunchIcon",
            icon_2: RocketLaunchIcon,
          },
          {
            title: "5. Continuous Learning & Optimization",
            description: "Models are continuously refined with new data.",
            icon: "ArrowPathIcon",
            icon_2: ArrowPathIcon,
          },
        ],
      },
      {
        title: "Core Business Applications",
        items: [
          {
            title: "Sales & Revenue Forecasting",
            description:
              "Predict future sales trends and improve revenue planning.",
            icon: "ArrowTrendingUpIcon",
            icon_2: ArrowTrendingUpIcon,
          },
          {
            title: "Customer Behavior & Personalization",
            description:
              "Predict customer preferences, churn, and lifetime value.",
            icon: "UserGroupIcon",
            icon_2: UserGroupIcon,
          },
          // {
          //   title: "Healthcare Predictions",
          //   description:
          //     "Disease risk prediction and patient readmission forecasting.",
          //   icon: "BuildingHospitalIcon",
          //   icon_2: BuildingHospitalIcon,
          // },
          {
            title: "Supply Chain Optimization",
            description:
              "Demand forecasting, inventory planning, and logistics efficiency.",
            icon: "TruckIcon",
            icon_2: TruckIcon,
          },
          {
            title: "Fraud Detection & Risk Management",
            description:
              "Identify anomalies and prevent financial fraud in real time.",
            icon: "IdentificationIcon",
            icon_2: IdentificationIcon,
          },
          {
            title: "HR & Workforce Analytics",
            description:
              "Predict employee attrition, hiring needs, and performance trends.",
            icon: "UserPlusIcon",
            icon_2: UserPlusIcon,
          },
        ],
      },
      {
        title: "Enterprise-Grade Security & Scalability",
        items: [
          {
            title: "Cloud-native architectures",
            icon: "CloudIcon",
            icon_2: CloudIcon,
          },
          {
            title: "Secure data pipelines",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Role-based access control",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Scalable data processing systems",
            icon: "ServerIcon",
            icon_2: ServerIcon,
          },
          {
            title: "Compliance-ready frameworks",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
        ],
      },
      {
        title: "Business Benefits",
        items: [
          {
            title: "Proactive Decision-Making",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Revenue Growth",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Risk Reduction",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Customer Intelligence",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
          {
            title: "Operational Efficiency",
            icon: "ShieldCheckIcon",
            icon_2: ShieldCheckIcon,
          },
        ],
      },
    ],
    cta: {
      title: "Transform Your Business with Predictive Analytics",
      buttonText: "Partner with SkilledHyre Labs",
    },
  };

  return <GenericServicePage content={content} />;
}
