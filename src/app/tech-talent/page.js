import {
  UsersIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function TechTalent() {
  const roles = [
    "Frontend & Backend Developers",
    "Full Stack Engineers",
    "AI / ML Engineers",
    "Mobile App Developers",
    "DevOps Engineers",
    "UI/UX Designers",
    "QA Engineers",
  ];

  const models = [
    {
      title: "Dedicated Teams",
      description: "A full team committed to your project long-term.",
      icon: UserGroupIcon,
    },
    {
      title: "Contract / Project-Based",
      description: "Hire specific expertise for a defined period.",
      icon: BriefcaseIcon,
    },
    {
      title: "Remote & Hybrid",
      description: "Flexible talent working from anywhere.",
      icon: ComputerDesktopIcon,
    },
  ];

  return (
    <>
      <Section className="text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm mb-8">
          <UsersIcon className="w-4 h-4" />
          <span>Tech Talent</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hire Top Tech Talent <br />{" "}
          <span className="text-gradient-primary">When You Need It</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          Access vetted developers, engineers, and designers on flexible
          engagement models.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/contact">Hire Developers</Button>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Available Talent</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <CheckBadgeIcon className="w-6 h-6 text-green-400" />
                  <span className="text-gray-200">{role}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Hiring Models</h2>
            <div className="space-y-6">
              {models.map((model, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="p-2 rounded-lg bg-indigo-500/20">
                    <model.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {model.title}
                    </h3>
                    <p className="text-gray-400">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
