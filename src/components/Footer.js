import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ 
      padding: "3rem 2rem 2rem",
      // borderTop: "1px solid #e5e7eb",
      backgroundColor: "#1C1C1C"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
        marginBottom: "2rem"
      }}>
        <div>
          <Link href="/">
            <img 
              src="" 
              alt="Techstaunch" 
              style={{ marginBottom: "1rem", width: "150px", height: "40px", backgroundColor: "#000000", cursor: "pointer" }}
            />
          </Link>
          <p style={{ color: "#ffffff", fontSize: "0.875rem" }}>
            info@techstaunch.com
          </p>
        </div>
        <div>
          {/* <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: "#111827" }}>Quick Links</h4> */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/services" style={{ color: "rgb(189, 189, 193)", textDecoration: "none", fontSize: "0.875rem" }}>Services</Link>
            <Link href="/portfolio" style={{ color: "rgb(189, 189, 193)", textDecoration: "none", fontSize: "0.875rem" }}>Case Studies</Link>
            <Link href="/about" style={{ color: "rgb(189, 189, 193)", textDecoration: "none", fontSize: "0.875rem" }}>About Us</Link>
            <Link href="/partnership" style={{ color: "rgb(189, 189, 193)", textDecoration: "none", fontSize: "0.875rem" }}>Startup Partnership</Link>
          </div>
        </div>
        <div>
          {/* <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: "#111827" }}>More</h4> */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Link href="/careers" style={{ color: "rgb(189, 189, 193)", textDecoration: "none", fontSize: "0.875rem" }}>Careers</Link>
            <Link href="/testimonials" style={{ color: "rgb(189, 189, 193)", textDecoration: "none", fontSize: "0.875rem" }}>Testimonials</Link>
          </div>
        </div>
      </div>
      <div style={{ 
        textAlign: "center", 
        paddingTop: "2rem",
        // borderTop: "1px solid #e5e7eb",
        color: "#9ca3af",
        fontSize: "0.875rem"
      }}>
        2025 © TechStaunch Software Solutions Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

