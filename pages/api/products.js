// Example products API - returns the same sample products your HTML used
export default function handler(req, res) {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, category: "electronics", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Smart Watch", price: 199.99, category: "electronics", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Cotton T-Shirt", price: 24.99, category: "clothing", image: "https://via.placeholder.com/200" },
    { id: 4, name: "Jeans", price: 59.99, category: "clothing", image: "https://via.placeholder.com/200" },
    { id: 5, name: "Programming Book", price: 39.99, category: "books", image: "https://via.placeholder.com/200" },
    { id: 6, name: "Coffee Maker", price: 79.99, category: "home", image: "https://via.placeholder.com/200" },
    { id: 7, name: "Bluetooth Speaker", price: 49.99, category: "electronics", image: "https://via.placeholder.com/200" },
    { id: 8, name: "Desk Lamp", price: 29.99, category: "home", image: "https://via.placeholder.com/200" }
  ];
  res.status(200).json(products);
}
