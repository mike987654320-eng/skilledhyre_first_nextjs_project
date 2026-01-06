export default function ProductInnovationLabView2() {
  // SVG Icons
  const SearchIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );

  const PaletteIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );

  const LayersIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polygon points="2 17 12 22 22 17"/>
      <polygon points="2 12 12 17 22 12"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );

  return (
    <div style={{ backgroundColor: "#0f0f0f", color: "#ffffff", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Hero with Split Design */}
      <section style={{ padding: "8rem 2rem 6rem", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", padding: "0.5rem 1rem", backgroundColor: "rgba(37,99,235,0.1)", borderRadius: "0.5rem", marginBottom: "2rem", border: "1px solid rgba(37,99,235,0.2)" }}>
              <span style={{ fontSize: "0.875rem", color: "#60a5fa" }}>Product Innovation Lab</span>
            </div>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, marginBottom: "1.5rem", lineHeight: "1.1" }}>
              From Concept to <span style={{ color: "#2563eb" }}>Market Leader</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#a1a1aa", marginBottom: "2rem", lineHeight: "1.7" }}>
              Transform your ideas into scalable digital products with our comprehensive product innovation lab. We combine strategy, design, and engineering to deliver breakthrough solutions.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "1rem 2rem", fontSize: "1rem", border: "none", borderRadius: "0.5rem", cursor: "pointer", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Get Started <ArrowRightIcon />
              </button>
              <button style={{ backgroundColor: "transparent", color: "#ffffff", padding: "1rem 2rem", fontSize: "1rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem", cursor: "pointer", fontWeight: 600 }}>
                Learn More
              </button>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", aspectRatio: "1", borderRadius: "2rem", background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)" }} />
              <div style={{ fontSize: "4rem", fontWeight: 800, opacity: 0.2 }}>LAB</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Process Section */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#18181b" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1rem" }}>
              Our Development Journey
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#a1a1aa" }}>
              A proven process that delivers results
            </p>
          </div>
          <div style={{ position: "relative", paddingLeft: "3rem" }}>
            {/* Vertical Line */}
            <div style={{ position: "absolute", left: "1.5rem", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, #2563eb 0%, transparent 100%)" }} />
            {[
              { icon: <SearchIcon />, phase: "Research & Discovery", desc: "Deep dive into user needs, market analysis, and competitive landscape", color: "#3b82f6" },
              { icon: <PaletteIcon />, phase: "Design & Prototyping", desc: "Create intuitive interfaces with high-fidelity prototypes", color: "#8b5cf6" },
              { icon: <LayersIcon />, phase: "Development & Engineering", desc: "Build scalable products with modern tech stack", color: "#10b981" },
              { icon: <ShieldIcon />, phase: "Testing & Quality Assurance", desc: "Comprehensive testing for functionality and performance", color: "#f59e0b" },
            ].map((step, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "4rem", paddingLeft: "4rem" }}>
                <div style={{ position: "absolute", left: "-1.5rem", top: 0, width: "3rem", height: "3rem", borderRadius: "50%", backgroundColor: step.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", boxShadow: `0 0 0 4px #18181b, 0 0 0 6px ${step.color}40` }}>
                  {step.icon}
                </div>
                <div style={{ backgroundColor: "#0f0f0f", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem", color: step.color }}>
                    {step.phase}
                  </h3>
                  <p style={{ color: "#a1a1aa", lineHeight: "1.6" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Cards */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "4rem" }}>
          What We Offer
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {[
            { title: "Product Discovery", items: ["User personas", "Market research", "Product vision", "MVP blueprint"] },
            { title: "UX/UI Design", items: ["Wireframes", "UI design", "Prototypes", "Design systems"] },
            { title: "Full-Stack Engineering", items: ["MERN stack", "Mobile apps", "API architecture", "Cloud infrastructure"] },
            { title: "MVP Development", items: ["Core functionality", "Scalable backend", "Responsive UI", "Analytics setup"] },
            { title: "Product Scaling", items: ["Architecture improvements", "Feature expansion", "UX revamp", "Performance optimization"] },
          ].map((cap, i) => (
            <div key={i} style={{ backgroundColor: "#18181b", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem", color: "#2563eb" }}>
                {cap.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {cap.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", color: "#a1a1aa" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#2563eb", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#18181b" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem" }}>
            {[
              { title: "End-to-End Ownership", desc: "Complete product lifecycle management" },
              { title: "Agile Execution", desc: "Transparent, milestone-driven development" },
              { title: "Quality Engineering", desc: "Enterprise-grade code and architecture" },
              { title: "Flexible Engagement", desc: "Tailored to your business needs" },
            ].map((reason, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{reason.title}</h3>
                <p style={{ color: "#a1a1aa" }}>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem", backgroundColor: "#18181b", borderRadius: "2rem", border: "1px solid rgba(255,255,255,0.1)" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Start Building Today
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#a1a1aa", marginBottom: "2.5rem", lineHeight: "1.7" }}>
            Join companies that trust us to bring their product visions to life.
          </p>
          <button style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "1.25rem 3rem", fontSize: "1.125rem", border: "none", borderRadius: "0.75rem", cursor: "pointer", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            Book a Strategy Call <ArrowRightIcon />
          </button>
        </div>
      </section>
    </div>
  );
}



