// Ensures the database connection is established during server startup/cold start
// This runs once per server process (or per Lambda cold start on Vercel)

export async function register() {
  try {
    const { connectToDatabase } = await import("./utils/db.js");
    await connectToDatabase();
    // eslint-disable-next-line no-console
    console.log("[instrumentation] Database connected on startup");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[instrumentation] Failed to connect to database on startup", error);
  }
}


