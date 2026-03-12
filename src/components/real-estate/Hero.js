import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Real Estate Industry</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Building Smart Digital Platforms <br />{" "}
        <span className="text-gradient-primary">for Modern Real Estate</span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          The real estate industry is undergoing a significant transformation
          with the adoption of digital platforms, property marketplaces, and
          data-driven solutions. Today’s buyers and investors expect seamless
          property discovery, virtual tours, instant communication, and secure
          online transactions.
        </p>
        <p>
          At SkilledHyre Labs, we help real estate companies, property
          developers, brokers, and property management firms build advanced
          digital solutions that streamline operations, improve customer
          engagement, and drive business growth.
        </p>
        <p>
          Our technology solutions empower real estate businesses to deliver
          smarter property experiences in a competitive digital marketplace.
        </p>
      </div>
    </Section>
  );
}
