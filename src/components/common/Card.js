export default function Card({
  title,
  description,
  icon: Icon,
  className = "",
  href,
  id,
}) {
  const CardContent = () => (
    <div
      id={id}
      // className={`glass-panel p-8 rounded-2xl h-full transition-all duration-300 group hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 ${className}`}
      className={`p-8 h-full ${className} flex justify-center items-center flex-col`}
    >
      {Icon && (
        <div className="mb-6 inline-block p-3 rounded-[50%] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/10 ">
          <Icon className="w-13 h-13 text-indigo-400" />
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 text-white text-center">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-center">{description}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full no-underline">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}
