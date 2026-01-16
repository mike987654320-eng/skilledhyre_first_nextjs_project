export default function TestimonialCard({ name, role, quote, image }) {
  return (
    <div className="flex-shrink-0 w-[350px] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
          <img
            src={
              image ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
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
