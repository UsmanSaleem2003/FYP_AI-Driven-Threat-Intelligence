"use client";
import "./page.css";
import { useRouter } from "next/navigation";
// import dashboard from "./pages/dashboard/page";
import { useState } from "react";

export default function Home() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    // make API call for user login and authentication
    router.push("/pages/dashboard");
  };

  return (
    <div className="login">
      <div className="login-title">
        <h1 className="login-title-span">Login</h1>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email or Username</label>
        <input
          type="text"
          placeholder="Enter username or email"
          className="input-field"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          required
        />

        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          className="input-field"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          required
        />

        <div className="show-password">
          <label className="show-password-checkbox">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <span className="show-password-text">Show Password</span>
          </label>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Loggin In" : "Login"}
        </button>
      </form>
    </div>
  );
}
