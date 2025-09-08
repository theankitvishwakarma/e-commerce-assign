export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // For stateless JWT, logout means client deletes the token
  res.status(200).json({ message: "Logged out successfully" });
}
