"use client";

import Image from "next/image";
import { useState } from "react";
import Hover from "../Hover";
import { A, inputStyle } from "../../lib/ui";
import { updatePassword } from "../../lib/supabase";

// Reached only via the emailed reset link: Supabase's client SDK detects the
// recovery token in the URL and fires a PASSWORD_RECOVERY auth event, which
// useAppState listens for and routes here (see lib/useAppState.js).
export default function ResetPassword({ v }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    try {
      const { error: updateError } = await updatePassword(password);
      if (updateError) throw updateError;
      setDone(true);
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
          {done ? "Password updated" : "Set a new password"}
        </h1>
        <p style={{ margin: "12px 0 0", fontSize: 14.5, color: "#7d6a5f", textAlign: "center" }}>
          {done ? "You're all set — continue into the network." : "Choose a new password for your account."}
        </p>

        {done ? (
          <Hover
            as="span"
            onClick={() => v.go("landing")}
            style={{ cursor: "pointer", display: "block", textAlign: "center", marginTop: 24, padding: 18, background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
            hoverStyle={{ background: "#30231e" }}
          >
            Continue
          </Hover>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
              <input
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                required
              />
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
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
              {loading ? "Saving..." : "Save new password"}
            </Hover>
          </form>
        )}
      </div>
    </div>
  );
}
