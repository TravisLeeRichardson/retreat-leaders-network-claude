"use client";

import Image from "next/image";
import { useState } from "react";
import Hover from "../Hover";
import { A, inputStyle } from "../../lib/ui";
import { signUp, signIn } from "../../lib/supabase";

export default function Login({ v }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        if (!selectedRole || !name) {
          setError("Please select a role and enter your name");
          setLoading(false);
          return;
        }

        const { data, error: signUpError } = await signUp(email, password, name, selectedRole);
        if (signUpError) throw signUpError;

        if (data.session) {
          // Email confirmation is off — Supabase returned a live session,
          // so send them wherever they were headed before the login gate.
          v.flash("Welcome to the network!");
          v.go(v.loginDest);
        } else {
          // Email confirmation is required — no session yet.
          v.flash("Check your email to confirm your account.");
          v.go("landing");
        }
      } else {
        const { data, error: signInError } = await signIn(email, password);
        if (signInError) throw signInError;

        v.flash("Logged in successfully!");
        v.go(v.loginDest);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "calc(100vh - 74px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 40px" }}>
      <div style={{ width: "100%", maxWidth: 460 }}>
        <div style={{ textAlign: "center" }}>
          <Image src="/brand/rln-mark.png" alt="" height={64} width={60} style={{ height: 64, width: "auto", display: "inline-block" }} />
        </div>
        <h1 style={{ margin: "26px 0 0", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 38, color: "#30231e", textAlign: "center" }}>
          {isSignUp ? "Join the network" : "Log in"}
        </h1>
        <p style={{ margin: "12px 0 0", fontSize: 14.5, color: "#7d6a5f", textAlign: "center" }}>
          {isSignUp ? "Create your account" : "Welcome back"}
        </p>

        {isSignUp && (
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <div
              onClick={() => setSelectedRole("leader")}
              style={{
                cursor: "pointer",
                flex: 1,
                border: `1px solid ${selectedRole === "leader" ? A : "#e8ded2"}`,
                background: selectedRole === "leader" ? "#faf7f4" : "#fff",
                padding: 22,
              }}
            >
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, color: "#30231e" }}>I lead</div>
              <div style={{ fontSize: 12.5, color: "#7d6a5f", marginTop: 6, lineHeight: 1.5 }}>Teach, speak, facilitate</div>
            </div>
            <div
              onClick={() => setSelectedRole("organizer")}
              style={{
                cursor: "pointer",
                flex: 1,
                border: `1px solid ${selectedRole === "organizer" ? A : "#e8ded2"}`,
                background: selectedRole === "organizer" ? "#faf7f4" : "#fff",
                padding: 22,
              }}
            >
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, color: "#30231e" }}>I organize</div>
              <div style={{ fontSize: 12.5, color: "#7d6a5f", marginTop: 6, lineHeight: 1.5 }}>Create and host retreats</div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
            {isSignUp && (
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {error && (
            <div style={{ margin: "12px 0 0", padding: 12, background: "#fde", color: "#c00", fontSize: 13, borderRadius: 2 }}>
              {error}
            </div>
          )}

          <Hover
            as="button"
            type="submit"
            disabled={loading}
            style={{
              cursor: loading ? "not-allowed" : "pointer",
              display: "block",
              width: "100%",
              textAlign: "center",
              marginTop: 18,
              padding: 18,
              background: loading ? "#a3948a" : A,
              color: "#fefaf4",
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              borderRadius: 2,
              border: "none",
            }}
            hoverStyle={{ background: loading ? "#a3948a" : "#30231e" }}
          >
            {loading ? "Loading..." : isSignUp ? "Create account" : "Log in"}
          </Hover>

          <div style={{ textAlign: "center", fontSize: 13, color: "#a3948a", marginTop: 16 }}>
            {isSignUp ? "Already a member? " : "Don't have an account? "}
            <span
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
              }}
              style={{ cursor: "pointer", color: A }}
            >
              {isSignUp ? "Log in" : "Sign up"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
