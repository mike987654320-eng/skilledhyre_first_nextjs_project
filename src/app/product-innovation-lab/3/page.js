"use client";

export default function ProductInnovationLabView3() {
  // SVG Icons
  const SparklesIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  );

  const BoxIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );

  const CpuIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/>
      <line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/>
      <line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/>
      <line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/>
      <line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  );

  const TrendingUpIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );

  return (
    <div style={{ backgroundColor: "#000000", color: "#ffffff", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Hero Section */}
      <section style={{ padding: "12rem 2rem 8rem", textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "rgba(37,99,235,0.1)", borderRadius: "2rem", marginBottom: "2rem", border: "1px solid rgba(37,99,235,0.3)" }}>
            <SparklesIcon />
            <span style={{ fontSize: "0.875rem", color: "#60a5fa", fontWeight: 600 }}>Innovation Lab</span>
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 900, marginBottom: "2rem", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
            Build Products That <br />
            <span style={{ background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 50%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Define Industries
            </span>
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#71717a", marginBottom: "3rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.7" }}>
            End-to-end product strategy, UX design, MVP development & scalable engineering for breakthrough digital products.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "1.25rem 3rem", fontSize: "1.125rem", border: "none", borderRadius: "0.75rem", cursor: "pointer", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.5rem", transition: "all 0.3s" }}>
              Start Building <ArrowRightIcon />
            </button>
            <button style={{ backgroundColor: "transparent", color: "#ffffff", padding: "1.25rem 3rem", fontSize: "1.125rem", border: "2px solid rgba(255,255,255,0.2)", borderRadius: "0.75rem", cursor: "pointer", fontWeight: 700 }}>
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "4rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "6rem" }}>
          {[
            { number: "70+", label: "Products Built" },
            { number: "94%", label: "Repeat Rate" },
            { number: "100%", label: "Satisfaction" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center", padding: "2rem", backgroundColor: "#0a0a0a", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "0.5rem", background: "linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {stat.number}
              </div>
              <div style={{ color: "#71717a", fontSize: "1rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Grid with Hover Effects */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Core Capabilities
          </h2>
          <p style={{ fontSize: "1.125rem", color: "#71717a", maxWidth: "600px", margin: "0 auto" }}>
            Everything you need to transform ideas into market-ready products
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "2rem" }}>
          {[
            { icon: <UsersIcon />, title: "Product Discovery", desc: "User research, market analysis, and product strategy", gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" },
            { icon: <BoxIcon />, title: "UX/UI Design", desc: "Wireframes, prototypes, and comprehensive design systems", gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)" },
            { icon: <CpuIcon />, title: "Full-Stack Engineering", desc: "MERN stack, mobile apps, and cloud infrastructure", gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)" },
            { icon: <TrendingUpIcon />, title: "MVP Development", desc: "Rapid prototyping and production-ready MVPs", gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" },
            { icon: <SparklesIcon />, title: "Product Scaling", desc: "Architecture improvements and feature expansion", gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" },
          ].map((cap, i) => (
            <div key={i} style={{ 
              backgroundColor: "#0a0a0a", 
              padding: "3rem", 
              borderRadius: "1.5rem", 
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{ 
                width: "80px", 
                height: "80px", 
                borderRadius: "1.5rem", 
                background: cap.gradient,
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "#ffffff",
                marginBottom: "2rem"
              }}>
                {cap.icon}
              </div>
              <h3 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: "-0.01em" }}>
                {cap.title}
              </h3>
              <p style={{ color: "#71717a", lineHeight: "1.7", fontSize: "1.125rem" }}>
                {cap.desc}
              </p>
              <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "#60a5fa", fontWeight: 600 }}>
                Learn more <ArrowRightIcon />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, marginBottom: "4rem", letterSpacing: "-0.02em" }}>
            Our Process
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { num: "01", phase: "Research & Discovery", desc: "Identify users, goals, and market opportunities" },
              { num: "02", phase: "Design & Prototyping", desc: "Create intuitive interfaces and interactive prototypes" },
              { num: "03", phase: "Engineering", desc: "Build scalable, high-performance products" },
              { num: "04", phase: "Testing & QA", desc: "Ensure functionality, usability, and security" },
              { num: "05", phase: "Launch & Deploy", desc: "Deploy to cloud with monitoring & analytics" },
              { num: "06", phase: "Continuous Improvement", desc: "Feature upgrades and optimization" },
            ].map((step, i) => (
              <div key={i} style={{ 
                backgroundColor: "#000000", 
                padding: "2.5rem", 
                borderRadius: "1.5rem", 
                border: "1px solid rgba(255,255,255,0.05)",
                position: "relative"
              }}>
                <div style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.05)", position: "absolute", top: "1rem", right: "1.5rem", lineHeight: 1 }}>
                  {step.num}
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
                    {step.phase}
                  </h3>
                  <p style={{ color: "#71717a", lineHeight: "1.7" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem" }}>
          {[
            { title: "End-to-End Ownership", desc: "Complete product lifecycle from concept to launch" },
            { title: "Agile Execution", desc: "Weekly sprints with transparent communication" },
            { title: "Quality Engineering", desc: "Enterprise-grade code and scalable architecture" },
            { title: "Flexible Engagement", desc: "Tailored solutions for your business needs" },
          ].map((reason, i) => (
            <div key={i}>
              <div style={{ width: "48px", height: "48px", borderRadius: "0.75rem", backgroundColor: "#2563eb", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                ✓
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
                {reason.title}
              </h3>
              <p style={{ color: "#71717a", lineHeight: "1.7" }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "10rem 2rem", textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900, marginBottom: "2rem", letterSpacing: "-0.02em", background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Ready to Build?
          </div>
          <p style={{ fontSize: "1.25rem", color: "#71717a", marginBottom: "3rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            Let's transform your vision into a market-ready product that users love.
          </p>
          <button style={{ backgroundColor: "#2563eb", color: "#ffffff", padding: "1.5rem 4rem", fontSize: "1.25rem", border: "none", borderRadius: "0.75rem", cursor: "pointer", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.75rem", boxShadow: "0 10px 40px rgba(37,99,235,0.4)" }}>
            Book a Consultation <ArrowRightIcon />
          </button>
        </div>
      </section>
    </div>
  );
}

