"use client";

import Image from "next/image";
import { useState } from "react";
import ImageSlot from "./ImageSlot";
import { A, INK } from "../lib/ui";

function NavLink({ onClick, children }) {
  const [hover, setHover] = useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: "pointer",
        fontSize: 13.5,
        fontWeight: 500,
        color: hover ? A : "#5f524a",
        letterSpacing: ".01em",
      }}
    >
      {children}
    </span>
  );
}

export default function Header({ v }) {
  const [joinHover, setJoinHover] = useState(false);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(254,250,244,.94)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e8ded2",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px", height: 74, display: "flex", alignItems: "center", gap: 36 }}>
        <div onClick={v.navLanding} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, flex: "none" }}>
          {/* The exported lockup PNG has its wordmark cropped at the top edge
              (a bad source export, not a sizing bug) — use the clean mark
              icon plus live text instead, so it always renders crisp. */}
          <Image src="/brand/rln-mark.png" alt="" width={26} height={28} style={{ display: "block" }} priority />
          <span style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 19, whiteSpace: "nowrap" }}>
            <span style={{ color: INK }}>Retreat Leaders </span>
            <span style={{ color: A }}>Network</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
          <NavLink onClick={v.navExplore}>Explore Retreats</NavLink>
          <NavLink onClick={v.navLeaders}>Find Leaders</NavLink>
          <NavLink onClick={v.navCreate}>Create a Retreat</NavLink>
          <NavLink onClick={v.navHow}>How It Works</NavLink>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 18 }}>
          {v.isGuest && (
            <>
              <NavLink onClick={v.navLogin}>Log In</NavLink>
              <span
                onClick={v.navLogin}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#30231e")}
                onMouseLeave={(e) => (e.currentTarget.style.background = A)}
                style={{
                  cursor: "pointer",
                  padding: "12px 20px",
                  background: A,
                  color: "#fefaf4",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  borderRadius: 2,
                }}
              >
                Join the Network
              </span>
            </>
          )}
          {v.isAuthed && (
            <>
              <span onClick={v.navDash} style={{ cursor: "pointer", fontSize: 13.5, fontWeight: 600, color: A }}>
                Dashboard
              </span>
              <div onClick={v.navProfile} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 9 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", overflow: "hidden", border: "1px solid #e8ded2" }}>
                  <ImageSlot id="nav-avatar" shape="circle" />
                </div>
                <span style={{ fontSize: 12.5, color: "#7d6a5f" }}>{v.userLabel}</span>
              </div>
              <NavLink onClick={v.logout}>Log out</NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
