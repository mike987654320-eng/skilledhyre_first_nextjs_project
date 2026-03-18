export default function TestimonialCard({ name, role, quote, image }) {
  return (
    <div className="flex-shrink-0 w-[350px] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h4 className="text-white font-semibold text-lg">{name}</h4>
          <p className="text-indigo-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic leading-relaxed">
        &quot;{quote}&quot;
      </p>
    </div>
  );
}
