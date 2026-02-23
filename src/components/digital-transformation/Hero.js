import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Digital Transformation</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Digital Transformation — <br />{" "}
        <span className="text-gradient-primary">
          Reimagined by SkilledHyre Labs
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          In the modern era of rapid technological change, businesses that fail
          to adapt are quickly outpaced by competitors embracing innovation. At
          SkilledHyre Labs, Digital Transformation isn’t just a buzzword — it’s
          a strategic imperative that reshapes the way organizations operate,
          compete, and grow in an increasingly digital world.
        </p>
        <p>
          Digital transformation at SkilledHyre Labs is designed to help
          enterprises modernize outdated systems, unlock new revenue streams,
          and harness the power of advanced technologies such as cloud-native
          systems, automation, and artificial intelligence. We partner closely
          with organizations to reimagine legacy infrastructures and build
          agile, intelligent, and future-ready digital ecosystems.
        </p>
      </div>
    </Section>
  );
}
