import Section from "../common/Section";

export default function Hero() {
  return (
    <Section className="text-center">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm mb-8">
        <span className="animate-pulse">●</span>
        <span>Travel & Tourism Industry</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Engineering Digital Experiences <br />{" "}
        <span className="text-gradient-primary">for Modern Travelers</span>
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 mb-10">
        <p>
          The travel and tourism industry has rapidly evolved with digital
          platforms, mobile applications, and intelligent booking systems.
          Travelers today expect seamless online booking, personalized
          recommendations, and real-time updates throughout their journey.
        </p>
        <p>
          At SkilledHyre Labs, we empower travel agencies, tour operators,
          hospitality businesses, and tourism companies with cutting-edge
          digital solutions that enhance customer experience, streamline
          operations, and enable scalable global travel services.
        </p>
        <p>
          Our technology solutions help travel businesses deliver smarter,
          faster, and more personalized travel experiences.
        </p>
      </div>
    </Section>
  );
}
