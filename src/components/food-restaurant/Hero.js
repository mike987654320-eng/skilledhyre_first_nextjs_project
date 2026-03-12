import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Food & Restaurant Industry</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Powering Digital Innovation for <br />{" "}
        <span className="text-gradient-primary">
          Food & Restaurant Businesses
        </span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          The food and restaurant industry is rapidly evolving with digital
          ordering platforms, delivery applications, and customer engagement
          technologies. Today’s customers expect fast ordering, seamless online
          payments, real-time delivery tracking, and personalized dining
          experiences.
        </p>
        <p>
          At SkilledHyre Labs, we help restaurants, cloud kitchens, food
          delivery startups, and hospitality businesses build intelligent
          digital platforms that streamline operations, enhance customer
          experience, and drive business growth.
        </p>
        <p>
          Our technology solutions empower food businesses to operate
          efficiently while delivering convenient and engaging dining
          experiences.
        </p>
      </div>
    </Section>
  );
}
