import Link from "next/link";

export default function Header() {
  return (
    <header style={{ 
      padding: "1rem 2rem", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e5e7eb"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Link href="/">
          <img 
            src="" 
            alt="TechStaunch Logo" 
            style={{ height: "40px", width: "150px", backgroundColor: "#000000", border: "none", cursor: "pointer" }}
          />
        </Link>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <Link href="/services" style={{ color: "#000000", textDecoration: "none" }}>Services</Link>
          <Link href="/portfolio" style={{ color: "#000000", textDecoration: "none" }}>Portfolio</Link>
          <Link href="/about" style={{ color: "#000000", textDecoration: "none" }}>About</Link>
          <Link href="/blogs" style={{ color: "#000000", textDecoration: "none" }}>Blogs</Link>
          <Link href="/hiring" style={{ color: "#000000", textDecoration: "none" }}>Hiring!</Link>
          <Link href="/contact" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>Get In Touch</Link>
        </nav>
      </div>
    </header>
  );
}

