import Section from "../common/Section";
import Card from "../common/Card";
import {
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Online Food Ordering Platforms",
      description:
        "We develop powerful web and mobile platforms that allow customers to browse menus, place orders, and make secure online payments.",
      icon: ShoppingBagIcon,
    },
    {
      title: "Restaurant Management Systems",
      description:
        "Comprehensive systems that help restaurant owners manage orders, kitchen operations, inventory, billing, and staff activities.",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "Food Delivery Applications",
      description:
        "Feature-rich mobile apps for food delivery businesses with real-time order tracking, route optimization, and customer notifications.",
      icon: TruckIcon,
    },
    {
      title: "Cloud Kitchen Platforms",
      description:
        "Technology solutions designed for cloud kitchens to manage multiple brands, orders, and delivery channels from a single platform.",
      icon: BuildingStorefrontIcon,
    },
    {
      title: "Table Reservation Systems",
      description:
        "Digital booking systems that allow customers to reserve tables, manage waiting lists, and improve dining experience.",
      icon: CalendarDaysIcon,
    },
    {
      title: "Restaurant CRM & Loyalty Programs",
      description:
        "Customer engagement systems that help restaurants track customer preferences, manage loyalty programs, and run promotional campaigns.",
      icon: HeartIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our Food & Restaurant Technology Capabilities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className="bg-white/5 border-white/10"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
