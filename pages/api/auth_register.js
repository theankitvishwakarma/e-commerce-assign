// Simple register stub - not persistent (for demo only)
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, email } = req.body || {};
  // Do not store passwords in plaintext in production! This is just a demo stub.
  if (!name || !email) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  // Return a simple user object
  res.status(200).json({ name, email, message: 'Registered (demo stub)' });
}
