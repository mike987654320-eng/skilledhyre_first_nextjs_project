"use client";

export default function ProductInnovationLabView1() {
  // SVG Icons
  const LightbulbIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z"/>
    </svg>
  );

  const RocketIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );

  const CodeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );

  const ZapIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );

  const TargetIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#ffffff", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Hero Section */}
      <section style={{ padding: "10rem 2rem 8rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: "50%", 
          transform: "translateX(-50%)", 
          width: "600px", 
          height: "600px", 
          background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)"
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", backgroundColor: "rgba(37,99,235,0.1)", borderRadius: "2rem", marginBottom: "2rem", border: "1px solid rgba(37,99,235,0.2)" }}>
            <RocketIcon />
            <span style={{ fontSize: "0.875rem", color: "#60a5fa" }}>Product Innovation Lab</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, marginBottom: "1.5rem", lineHeight: "1.1", background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Build Products That <br />Transform Markets
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#a1a1aa", marginBottom: "3rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.6" }}>
            End-to-end product strategy, UX design, MVP development & scalable engineering for breakthrough digital products.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "1rem 2.5rem", fontSize: "1rem", border: "none", borderRadius: "0.75rem", cursor: "pointer", fontWeight: 600, transition: "all 0.3s", boxShadow: "0 4px 14px rgba(37,99,235,0.4)" }}>
              Start Your Project
            </button>
            <button style={{ backgroundColor: "transparent", color: "#ffffff", padding: "1rem 2.5rem", fontSize: "1rem", border: "2px solid rgba(255,255,255,0.2)", borderRadius: "0.75rem", cursor: "pointer", fontWeight: 600, transition: "all 0.3s" }}>
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1rem" }}>
            Core Capabilities
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#a1a1aa", maxWidth: "600px", margin: "0 auto" }}>
            Everything you need to bring your product vision to life
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {[
            { icon: <LightbulbIcon />, title: "Product Discovery", desc: "User research, market analysis, and product strategy", color: "#f59e0b" },
            { icon: <CodeIcon />, title: "UX/UI Design", desc: "Wireframes, prototypes, and design systems", color: "#8b5cf6" },
            { icon: <RocketIcon />, title: "Full-Stack Engineering", desc: "MERN stack, mobile apps, and cloud infrastructure", color: "#2563eb" },
            { icon: <ZapIcon />, title: "MVP Development", desc: "Rapid prototyping and production-ready MVPs", color: "#10b981" },
            { icon: <TargetIcon />, title: "Product Scaling", desc: "Architecture improvements and feature expansion", color: "#ef4444" },
          ].map((cap, i) => (
            <div key={i} style={{ 
              backgroundColor: "#18181b", 
              padding: "2.5rem", 
              borderRadius: "1.5rem", 
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = cap.color;
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px ${cap.color}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{ 
                width: "64px", 
                height: "64px", 
                borderRadius: "1rem", 
                backgroundColor: `${cap.color}20`, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: cap.color,
                marginBottom: "1.5rem"
              }}>
                {cap.icon}
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                {cap.title}
              </h3>
              <p style={{ color: "#a1a1aa", lineHeight: "1.6" }}>
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#18181b" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "4rem" }}>
            Why SkilledHyre Labs?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { title: "End-to-End Ownership", desc: "From concept to launch — everything happens under one coordinated team." },
              { title: "Agile Execution", desc: "Weekly sprints, transparent communication, structured milestones." },
              { title: "High-Quality Engineering", desc: "Clean code, scalable architecture, and enterprise-level security." },
              { title: "Flexible Engagement", desc: "Full product build, dedicated team, or MVP-only projects." },
            ].map((reason, i) => (
              <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "0.5rem", backgroundColor: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", marginTop: "0.25rem" }}>
                  <CheckIcon />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{reason.title}</h3>
                  <p style={{ color: "#a1a1aa", lineHeight: "1.6" }}>{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "4rem" }}>
          Our Development Process
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative" }}>
          {[
            { phase: "Research & Discovery", desc: "Identify users, goals, workflows, and market gaps." },
            { phase: "UX/UI Design", desc: "Craft intuitive interfaces and interactive prototypes." },
            { phase: "Engineering", desc: "Build scalable, high-performance digital products." },
            { phase: "Testing & QA", desc: "Ensure functionality, usability, speed, and security." },
            { phase: "Launch & Deploy", desc: "Deployment to cloud platforms with monitoring." },
            { phase: "Continuous Improvement", desc: "Feature upgrades, optimization, and support." },
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 700, color: "#ffffff" }}>
                {i + 1}
              </div>
              <div style={{ flex: 1, paddingTop: "0.5rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>{step.phase}</h3>
                <p style={{ color: "#a1a1aa", fontSize: "1.125rem" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "8rem 2rem", textAlign: "center", background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)", borderRadius: "2rem", margin: "4rem 2rem", maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem" }}>
          Ready to Build Something Amazing?
        </h2>
        <p style={{ fontSize: "1.25rem", marginBottom: "2.5rem", maxWidth: "700px", margin: "0 auto 2.5rem", opacity: 0.9 }}>
          Let's transform your vision into a market-ready product.
        </p>
        <button style={{ backgroundColor: "#ffffff", color: "#2563eb", padding: "1.25rem 3rem", fontSize: "1.125rem", border: "none", borderRadius: "0.75rem", cursor: "pointer", fontWeight: 700, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
          Book a Consultation
        </button>
      </section>
    </div>
  );
}

