import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Section from "../../../components/common/Section";
import Card from "../../../components/common/Card";
import Button from "../../../components/common/Button";

export default function Healthcare() {
  const solutions = [
    {
      title: "AI Diagnostics",
      description:
        "Computer vision models to assist radiologists in detecting anomalies early.",
      icon: MagnifyingGlassIcon,
    },
    {
      title: "Patient Data Security",
      description:
        "HIPAA-compliant cloud architectures and encrypted patient portals.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Telehealth Platforms",
      description:
        "Seamless video consultation apps with integrated EHR systems.",
      icon: UserGroupIcon,
    },
    {
      title: "Predictive Health",
      description:
        "Analyzing patient history to predict risks and recommend preventative care.",
      icon: HeartIcon,
    },
  ];

  return (
    <>
      <Section className="text-center pt-32 pb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm mb-8">
          <HeartIcon className="w-4 h-4" />
          <span>HealthTech</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transforming <br />
          <span className="text-gradient-primary">Healthcare</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          Empowering providers, payers, and patients with secure, intelligent,
          and life-saving technology solutions.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/contact">Consult Tech Expert</Button>
          <Button href="/industries" variant="secondary">
            View All Industries
          </Button>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance First</h2>
            <div className="h-1 w-20 bg-red-500 rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg">
              In healthcare, security isn&apos;t just a feature—it&apos;s the
              law. We build every line of code with <strong>HIPAA</strong>,{" "}
              <strong>GDPR</strong>, and <strong>SOC2</strong> compliance in
              mind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["EHR Integration", "HL7 / FHIR", "IoMT (Medical IoT)"].map(
              (tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-black/40 rounded-lg border border-white/5"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="font-mono text-sm uppercase tracking-wide">
                    {tag}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold mb-4">
            Our Healthcare Solutions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <div className="p-12 rounded-2xl bg-gradient-to-b from-red-900/10 to-transparent border border-red-500/10">
          <h2 className="text-2xl font-bold mb-4">
            Partnering for Better Outcomes
          </h2>
          <p className="text-gray-400 mb-8">
            From startups disrupting care delivery to hospitals optimizing
            operations.
          </p>
          <Button href="/contact">Improve Patient Care</Button>
        </div>
      </Section>
    </>
  );
}
