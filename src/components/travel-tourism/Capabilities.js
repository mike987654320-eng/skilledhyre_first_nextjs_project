import Section from "../common/Section";
import Card from "../common/Card";
import {
  TicketIcon,
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  CpuChipIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Travel Booking Platforms",
      description:
        "We develop secure and scalable booking platforms that allow travelers to book flights, hotels, tours, and holiday packages with ease.",
      icon: TicketIcon,
    },
    {
      title: "Tour Package Management Systems",
      description:
        "Custom systems designed for tour operators to manage packages, schedules, bookings, and traveler communication from a single dashboard.",
      icon: CalendarDaysIcon,
    },
    {
      title: "Travel Mobile Applications",
      description:
        "Feature-rich mobile apps that allow users to explore destinations, book travel services, manage itineraries, and receive travel updates.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Travel Marketplace Platforms",
      description:
        "Multi-vendor travel platforms where agencies, tour operators, hotels, and travel partners can list and sell services.",
      icon: ShoppingBagIcon,
    },
    {
      title: "AI-Powered Travel Recommendation Systems",
      description:
        "Advanced algorithms that provide travelers with personalized trip suggestions based on preferences, past bookings, and travel trends.",
      icon: CpuChipIcon,
    },
    {
      title: "Travel CRM Systems",
      description:
        "Customer relationship management solutions designed for tourism companies to manage leads, bookings, and customer engagement.",
      icon: UserGroupIcon,
    },
  ];

  return (
    <Section>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[36px] font-bold mb-12 text-center">
          📊 Our Travel & Tourism Technology Capabilities
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
