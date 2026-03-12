import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Insurance Industry</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Transforming Insurance with <br />{" "}
        <span className="text-gradient-primary">
          Intelligent Digital Solutions
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          The insurance industry is rapidly embracing digital technologies to
          improve customer experience, streamline policy management, and
          automate claims processing. Modern customers expect fast policy
          issuance, transparent claim processes, and convenient digital access
          to insurance services.
        </p>
        <p>
          At SkilledHyre Labs, we help insurance companies, brokers, and
          insurtech startups build advanced digital platforms that simplify
          insurance operations, enhance customer engagement, and drive business
          growth.
        </p>
        <p>
          Our technology solutions enable insurers to deliver efficient, secure,
          and customer-centric insurance services.
        </p>
      </div>
    </Section>
  );
}
