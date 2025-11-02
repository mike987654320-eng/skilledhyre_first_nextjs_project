export default function Home() {
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#000000", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{ 
        padding: "6rem 2rem", 
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h1 style={{ 
          fontSize: "3.5rem", 
          fontWeight: 700, 
          marginBottom: "1.5rem",
          lineHeight: "1.2",
          color: "#111827"
        }}>
          End to End Software Development Company
        </h1>
        <p style={{ 
          fontSize: "1.25rem", 
          color: "#6b7280", 
          marginBottom: "2rem",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.6"
        }}>
          TechStaunch is an end-to-end software development company offering outcome driven solutions — from initial planning to final deployment. We build reliable, easy-to-manage software for Startups, SMEs, Businesses, and Enterprises in strong collaboration with stakeholders.
        </p>
        <button style={{
          backgroundColor: "#2563eb",
          color: "#ffffff",
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          fontWeight: 500
        }}>
          Get In Touch
        </button>
        <div style={{ marginTop: "2rem", color: "#9ca3af", fontSize: "0.875rem" }}>
          Clutch Rating
        </div>
      </section>

      {/* Trusted by Businesses Section */}
      <section style={{ 
        padding: "4rem 2rem",
        backgroundColor: "#f9fafb"
      }}>
        <h2 style={{ 
          textAlign: "center", 
          fontSize: "2rem", 
          fontWeight: 600,
          marginBottom: "1rem",
          color: "#111827"
        }}>
          Trusted by Businesses Worldwide
        </h2>
        <p style={{ 
          textAlign: "center", 
          color: "#6b7280",
          marginBottom: "2rem"
        }}>
          Over 70 software products delivered across industries, with teams that return for future projects.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} style={{
              backgroundColor: "#ffffff",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb"
            }}>
              <img 
                src=""
                alt={`Logo ${i + 1}`}
                style={{ maxWidth: "100%", maxHeight: "100%", width: "100px", height: "60px", backgroundColor: "#e5e7eb" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section style={{ 
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h2 style={{ 
          textAlign: "center", 
          fontSize: "2rem", 
          fontWeight: 600,
          marginBottom: "1rem",
          color: "#111827"
        }}>
          Our Capabilities
        </h2>
        <p style={{ 
          textAlign: "center", 
          color: "#6b7280",
          marginBottom: "3rem"
        }}>
          We are your full-service partner for software development, covering everything from design to delivery.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem"
        }}>
          {[
            { title: "Artificial Intelligence", desc: "Gen AI, Custom LLMs, Machine Learning & Computer Vision", tech: "OpenAI, Claude, Llama, LangChain, TensorFlow, Python" },
            { title: "ChatGPT Development", desc: "ChatGPT apps, ETL, data enrichment, visualization.", tech: "ChatGPT API, GPT-4, Databricks, Apache, Google BigQuery" },
            { title: "Software Development", desc: "Custom scalable systems, API automation, DevOps.", tech: "Node.js, Express.js, Docker, Kubernetes, Microservices" },
            { title: "Web Development", desc: "Building responsive and performant web applications.", tech: "React & Next.js, Ruby on Rails, NodeJS, Shopify, Webflow, WordPress" },
            { title: "Mobile Development", desc: "Creating mobile applications for iOS and Android.", tech: "iOS, Kotlin, React Native, Flutter" },
            { title: "UI/UX Design", desc: "Designing user-friendly interfaces and experiences.", tech: "Figma, Adobe In Design, Material Design, Tailwind, Sketch" }
          ].map((cap, i) => (
            <div key={i} style={{
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb"
            }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#111827" }}>
                {cap.title}
              </h3>
              <p style={{ color: "#6b7280", marginBottom: "1rem", lineHeight: "1.6" }}>
                {cap.desc}
              </p>
              <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                {cap.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section style={{ 
        padding: "6rem 2rem",
        backgroundColor: "#f9fafb"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            textAlign: "center", 
            fontSize: "2rem", 
            fontWeight: 600,
            marginBottom: "1rem",
            color: "#111827"
          }}>
            Discover the innovative products delivered by our expert team!
          </h2>
          <p style={{ 
            textAlign: "center", 
            color: "#6b7280",
            marginBottom: "3rem"
          }}>
            Our work powers 70+ products trusted by clients who come back — with a 94% repeat rate and perfect satisfaction scores.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem"
          }}>
            {[
              { name: "Macarne", desc: "Data Center and Network Infrastructure Services Providing Platform" },
              { name: "AlerteUnite", desc: "Emergency Response and Community Coordination App" },
              { name: "MegaCharts", desc: "Unlock Smarter Investing Through Data Visualisation" },
              { name: "Allrites", desc: "Revolutionizing Global Content Distribution" },
              { name: "GoShimmy", desc: "Revolutionizing the Dance Community's Digital Marketplace" },
              { name: "Platform X", desc: "Innovative solutions for modern businesses" }
            ].map((product, i) => (
              <div key={i} style={{
                backgroundColor: "#ffffff",
                borderRadius: "0.5rem",
                overflow: "hidden",
                border: "1px solid #e5e7eb"
              }}>
                <img 
                  src=""
                  alt={product.name}
                  style={{ width: "100%", height: "200px", backgroundColor: "#e5e7eb", objectFit: "cover" }}
                />
                <div style={{ padding: "1.5rem" }}>
                  <img 
                    src=""
                    alt={`${product.name} logo`}
                    style={{ marginBottom: "1rem", width: "120px", height: "40px", backgroundColor: "#f3f4f6" }}
                  />
                  <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#" style={{ 
              color: "#2563eb", 
              textDecoration: "none",
              fontWeight: 500
            }}>
              View All Case Studies →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ 
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <h2 style={{ 
          textAlign: "center", 
          fontSize: "2rem", 
          fontWeight: 600,
          marginBottom: "3rem",
          color: "#111827"
        }}>
          Hear It from Those Who Built with Us
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {[
            { author: "Sam P", role: "CEO, Marclex", quote: "Had our e-commerce platform developed, best group of people to work with, gives great insights for business developments and about work they do as well." },
            { author: "Clever Mukori", role: "Founder & CEO, Learn Or Teach", quote: "TechStaunch Software Solutions delivered on time and budget. A flexible partner, they communicated effectively through the client's preferred channels." },
            { author: "Caleb Abernathy", role: "Head of the Product, Owl Inventory", quote: "They have demonstrated advanced and competent knowledge of Vue.js and JavaScript for many projects. One of my \"go-to\" programmers." },
            { author: "Mariano Malisani", role: "Product Manager", quote: "TechStaunch Solutions developed a virtual reality solution, programming localization of user interfaces. They've also used the Lokalise platform, to launch the software in several languages." },
            { author: "Theresa Tran", role: "Head of Product, Free the Work", quote: "TechStaunch Solutions is upgrading the client's existing platform, which highlights underrepresented creators. The team is now conducting a code cleanup and entirely remaking some pieces." },
            { author: "Damian Miles", role: "Co-Founder & CTO, Allrites Management Pte Ltd", quote: "TechStaunch provides software development resources for a film and TV marketplace company. They help the client take on software development tasks using Laravel and Vue.js as their key tech stacks." }
          ].map((testimonial, i) => (
            <div key={i} style={{
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb"
            }}>
              <p style={{ 
                color: "#374151", 
                marginBottom: "1.5rem",
                lineHeight: "1.6",
                fontStyle: "italic"
              }}>
                "{testimonial.quote}"
              </p>
              <div>
                <div style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#111827" }}>
                  {testimonial.author}
                </div>
                <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="#" style={{ 
            color: "#2563eb", 
            textDecoration: "none",
            fontWeight: 500
          }}>
            Read All Reviews →
          </a>
        </div>
      </section>

      {/* Working with Us Section */}
      <section style={{ 
        padding: "6rem 2rem",
        backgroundColor: "#f9fafb"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            textAlign: "center", 
            fontSize: "2rem", 
            fontWeight: 600,
            marginBottom: "1rem",
            color: "#111827"
          }}>
            Working with an End-to-End Software Development Company
          </h2>
          <p style={{ 
            textAlign: "center", 
            color: "#6b7280",
            marginBottom: "3rem"
          }}>
            Choose the engagement model that fits your business needs.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {[
              { 
                title: "Staff Augmentation", 
                desc: "Seamlessly add skilled software engineers to your team. We provide individuals or full teams of 20+, including Project Managers, Tech Leads, DevOps, QA, and Designers." 
              },
              { 
                title: "Product Studio", 
                desc: "Quickly build high-quality, user-focused products or features from scratch—on time and on budget. Our embedded teams include PMs, UX/UI designers, frontend, backend, data engineers, and QA." 
              },
              { 
                title: "Project Sprints", 
                desc: "Project Sprints Audit data, code, or UX/UI. Train and optimize AI/ML models. Scope migrations or upgrades. Build proofs of concept or design prototypes. We deliver short-term, ready-to-start projects." 
              }
            ].map((model, i) => (
              <div key={i} style={{
                backgroundColor: "#ffffff",
                padding: "2rem",
                borderRadius: "0.5rem",
                border: "1px solid #e5e7eb"
              }}>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: 600, 
                  marginBottom: "1rem",
                  color: "#111827"
                }}>
                  {model.title}
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                  {model.desc}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontWeight: 500
            }}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        padding: "6rem 2rem",
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <h2 style={{ 
          fontSize: "2rem", 
          fontWeight: 600,
          marginBottom: "1rem",
          color: "#111827"
        }}>
          Let's Talk About Your Software Project
        </h2>
        <p style={{ 
          color: "#6b7280",
          marginBottom: "2rem",
          lineHeight: "1.6"
        }}>
          Contact us to discuss your needs and see how we can support your business with software solutions deployed in less than 3 months of time.
        </p>
        <div style={{
          backgroundColor: "#f9fafb",
          padding: "3rem",
          borderRadius: "0.5rem",
          marginBottom: "2rem"
        }}>
          <img 
            src=""
            alt="Contact background"
            style={{ width: "100%", borderRadius: "0.5rem", marginBottom: "1.5rem", height: "300px", backgroundColor: "#e5e7eb" }}
          />
          <button style={{
            backgroundColor: "#2563eb",
            color: "#ffffff",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontWeight: 500
          }}>
            Let's Talk!
          </button>
        </div>
      </section>
    </div>
  );
}
