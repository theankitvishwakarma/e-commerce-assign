DeepSeek - Next.js conversion package
====================================

What I included:
- The original HTML file you uploaded is included unchanged at: /public/original.html
- A small Next.js wrapper that serves a simple index page with an iframe to the original HTML.
- Example API routes (products and auth stubs) to show frontend/backend structure suitable for Vercel.
- package.json so you can `npm install` and deploy to Vercel directly.

How to run locally:
1. cd into the project folder
2. npm install
3. npm run dev
4. Open http://localhost:3000 — the index page loads the original HTML (served at /original.html)

Notes:
- I did NOT modify your original HTML; it is placed as-is in /public/original.html. 
- The iframe on the Next.js index page displays that file so you can host unchanged code while using Next.js.
- The included API routes are simple examples and not tied to your original localStorage-based auth/cart.
- For full server-side persistence you'd replace the stubs with a real database.

Files of interest:
- public/original.html   <-- your original HTML (unchanged)
- pages/index.js         <-- Next.js index page (iframe to original.html)
- pages/api/products.js  <-- example products API (serves JSON)
- pages/api/auth/login.js, register.js <-- example auth stubs
- package.json
- README.md

If you want me to convert the HTML into a full React/Next page (JSX) that removes the iframe and integrates with the API routes,
I can do that next — but that would necessarily change the original code. You explicitly asked to keep it unchanged, so I left it intact.


---
### MongoDB Integration
Added MongoDB connection with bcrypt + JWT auth.
1. Install deps: `npm install mongodb bcrypt jsonwebtoken`
2. Create `.env.local` with:
```
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```
