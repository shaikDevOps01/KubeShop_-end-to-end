import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios.post("http://localhost:8082/login", { username, password })
      .then(res => alert("Login Successful: " + res.data.token))
      .catch(err => alert("Login Failed"));
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8083/cart")
      .then(res => setCart(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(c => (
          <li key={c.id}>{c.productName} - Qty: {c.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

function Orders() {
  const placeOrder = () => {
    axios.post("http://localhost:8084/orders")
      .then(res => alert("Order Placed!"))
      .catch(err => alert("Order Failed"));
  };

  return (
    <div>
      <h2>Orders</h2>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/cart">Cart</Link> |{" "}
        <Link to="/orders">Orders</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}
