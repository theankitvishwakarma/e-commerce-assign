// Simple login stub - not persistent (for demo only)
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { email } = req.body || {};
  if (!email) {
    return res.status(400).json({ error: 'Missing email' });
  }
  // Return a simple user object
  res.status(200).json({ name: 'Demo User', email, message: 'Logged in (demo stub)' });
}
