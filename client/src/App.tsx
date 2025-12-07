import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="w-full bg-white/70 backdrop-blur shadow-sm px-6 py-3 sticky top-0">
    <div className="max-w-5xl mx-auto flex justify-between items-center">
      <Link to="/" className="font-semibold text-xl">
        🧠 ChittaMitra
      </Link>
      <div className="flex gap-4 text-sm">
        <Link to="/journal">Journal</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  </nav>
);

interface PageProps {
  title: string;
}

const Page = ({ title }: PageProps) => (
  <div className="max-w-5xl mx-auto p-6">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-slate-600">Coming soon...</p>
  </div>
);

const Home = () => {
  const [apiStatus, setApiStatus] = useState<string>("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/health")
      .then((res) => setApiStatus(`✅ Backend says: ${res.data.service}`))
      .catch((err) => setApiStatus("❌ Cannot reach backend."));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Welcome to ChittaMitra</h1>
      <p className="text-slate-600 mb-4">
        Track your moods, write your thoughts, and grow your mind.
      </p>
      <div className="bg-white/70 border border-gray-200 rounded-xl shadow p-4 text-center text-slate-700">
        {apiStatus}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-lilac via-sand to-mint">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Page title="Journal" />} />
          <Route path="/chat" element={<Page title="Chat" />} />
          <Route path="/dashboard" element={<Page title="Dashboard" />} />
          <Route path="/login" element={<Page title="Login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
