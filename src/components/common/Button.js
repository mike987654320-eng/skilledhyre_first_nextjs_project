import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0F19]";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 focus:ring-indigo-500",
    secondary:
      "bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm focus:ring-white/50",
    outline:
      "border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300",
  };

  const Component = href ? Link : "button";

  return (
    <Component
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />}
    </Component>
  );
}
