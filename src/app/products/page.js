async function fetchProducts() {
  const res = await fetch("http://localhost:5000/api/products", {
    // Revalidate frequently during dev; remove or adjust for prod
    next: { revalidate: 0 },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data.products || [];
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Products
      </h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {products.map((p) => (
            <li
              key={p.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: 16,
                background: "#fff",
              }}
            >
              <h2 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{p.name}</h2>
              <p style={{ margin: "8px 0 12px", color: "#4b5563" }}>
                {p.description}
              </p>
              <strong>${p.price?.toFixed?.(2) ?? p.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}


