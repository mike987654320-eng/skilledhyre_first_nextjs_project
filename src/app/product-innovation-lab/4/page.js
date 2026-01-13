export default function ProductInnovationLabView4() {
  // SVG Icons
  const BrainIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2 22V4.5A2.5 2.5 0 0 1 4.5 2z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44L22 22V4.5A2.5 2.5 0 0 0 19.5 2z" />
    </svg>
  );

  const PenToolIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );

  const DatabaseIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );

  const GlobeIcon = () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );

  return (
    <div
      style={{
        backgroundColor: "#111111",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Asymmetric Hero Section */}
      <section
        style={{
          padding: "8rem 2rem 6rem",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                backgroundColor: "rgba(37,99,235,0.15)",
                borderRadius: "0.5rem",
                marginBottom: "2rem",
                border: "1px solid rgba(37,99,235,0.3)",
              }}
            >
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "#60a5fa",
                  fontWeight: 600,
                }}
              >
                Product Innovation Lab
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 800,
                marginBottom: "2rem",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
              }}
            >
              Transform Ideas Into <br />
              <span style={{ color: "#2563eb", position: "relative" }}>
                Market Leaders
                <span
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "8px",
                    backgroundColor: "rgba(37,99,235,0.2)",
                    borderRadius: "4px",
                  }}
                />
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#a1a1aa",
                marginBottom: "3rem",
                lineHeight: "1.8",
                maxWidth: "600px",
              }}
            >
              We combine product strategy, research, UX/UI design, modern
              engineering, and continuous optimization to transform your vision
              into market-ready solutions.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                style={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  padding: "1.25rem 2.5rem",
                  fontSize: "1.125rem",
                  border: "none",
                  borderRadius: "0.75rem",
                  cursor: "pointer",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                Get Started <ArrowRightIcon />
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  padding: "1.25rem 2.5rem",
                  fontSize: "1.125rem",
                  border: "2px solid rgba(255,255,255,0.2)",
                  borderRadius: "0.75rem",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: "2rem",
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(139,92,246,0.2) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                padding: "3rem",
              }}
            >
              <div style={{ fontSize: "6rem", fontWeight: 900, opacity: 0.1 }}>
                LAB
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1rem",
                  width: "100%",
                }}
              >
                {[BrainIcon, PenToolIcon, DatabaseIcon, GlobeIcon].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "1.5rem",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        borderRadius: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#60a5fa",
                      }}
                    >
                      <Icon />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Split Cards */}
      <section
        style={{ padding: "6rem 2rem", maxWidth: "1400px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            What We Offer
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#a1a1aa",
              maxWidth: "700px",
            }}
          >
            Comprehensive product development services from discovery to scaling
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
        >
          {[
            {
              icon: <BrainIcon />,
              title: "Product Discovery & Research",
              desc: "User personas, journey mapping, competitive analysis, and product vision",
              color: "#3b82f6",
            },
            {
              icon: <PenToolIcon />,
              title: "UX/UI Design & Prototyping",
              desc: "Wireframes, high-fidelity designs, interactive prototypes, and design systems",
              color: "#8b5cf6",
            },
            {
              icon: <DatabaseIcon />,
              title: "Full-Stack Engineering",
              desc: "MERN stack, mobile development, API architecture, and cloud infrastructure",
              color: "#10b981",
            },
            {
              icon: <GlobeIcon />,
              title: "MVP & Product Scaling",
              desc: "Rapid MVP development, architecture improvements, and feature expansion",
              color: "#f59e0b",
            },
          ].map((cap, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#1a1a1a",
                padding: "3rem",
                borderRadius: "1.5rem",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                gap: "2rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "1rem",
                  backgroundColor: `${cap.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: cap.color,
                  flexShrink: 0,
                }}
              >
                {cap.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    color: "#a1a1aa",
                    lineHeight: "1.7",
                    fontSize: "1.125rem",
                  }}
                >
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline - Horizontal */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "4rem",
              letterSpacing: "-0.02em",
            }}
          >
            Our Development Process
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "01", phase: "Research", desc: "User & market analysis" },
              { num: "02", phase: "Design", desc: "UX/UI & prototyping" },
              { num: "03", phase: "Build", desc: "Engineering & development" },
              { num: "04", phase: "Test", desc: "QA & optimization" },
              { num: "05", phase: "Launch", desc: "Deploy & monitor" },
              { num: "06", phase: "Scale", desc: "Improve & expand" },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  flex: "1 1 150px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#2563eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    margin: "0 auto 1.5rem",
                    color: "#ffffff",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.phase}
                </h3>
                <p style={{ color: "#a1a1aa", fontSize: "0.875rem" }}>
                  {step.desc}
                </p>
                {i < 5 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "40px",
                      left: "calc(50% + 40px)",
                      width: "calc(100% - 80px)",
                      height: "2px",
                      background:
                        "linear-gradient(90deg, #2563eb 0%, transparent 100%)",
                      zIndex: -1,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Grid */}
      <section
        style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 800,
            marginBottom: "4rem",
            letterSpacing: "-0.02em",
          }}
        >
          Why SkilledHyre Labs?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              title: "End-to-End Ownership",
              desc: "Complete product lifecycle from concept to launch and beyond",
            },
            {
              title: "Agile Execution",
              desc: "Weekly sprints with transparent communication and structured milestones",
            },
            {
              title: "High-Quality Engineering",
              desc: "Clean code, scalable architecture, and enterprise-level security",
            },
            {
              title: "Flexible Engagement",
              desc: "Full product build, dedicated team, or MVP-only projects",
            },
          ].map((reason, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#1a1a1a",
                padding: "2.5rem",
                borderRadius: "1.5rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "1rem",
                  backgroundColor: "rgba(37,99,235,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#60a5fa",
                  marginBottom: "1.5rem",
                }}
              >
                <CheckCircleIcon />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {reason.title}
              </h3>
              <p style={{ color: "#a1a1aa", lineHeight: "1.7" }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "6rem 4rem",
            backgroundColor: "#1a1a1a",
            borderRadius: "2rem",
            border: "1px solid rgba(255,255,255,0.1)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Build Your Product?
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#a1a1aa",
                marginBottom: "3rem",
                lineHeight: "1.7",
              }}
            >
              Let&apos;s transform your vision into a market-ready product that
              users love.
            </p>
            <button
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "1.5rem 4rem",
                fontSize: "1.25rem",
                border: "none",
                borderRadius: "0.75rem",
                cursor: "pointer",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "0 10px 40px rgba(37,99,235,0.4)",
              }}
            >
              Book a Consultation <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
