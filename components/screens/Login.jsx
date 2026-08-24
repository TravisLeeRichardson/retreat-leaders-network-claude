import Image from "next/image";
import Hover from "../Hover";
import { A, inputStyle } from "../../lib/ui";

export default function Login({ v }) {
  return (
    <div style={{ minHeight: "calc(100vh - 74px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 40px" }}>
      <div style={{ width: "100%", maxWidth: 460 }}>
        <div style={{ textAlign: "center" }}>
          <Image src="/brand/rln-mark.png" alt="" height={64} width={60} style={{ height: 64, width: "auto", display: "inline-block" }} />
        </div>
        <h1 style={{ margin: "26px 0 0", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 38, color: "#30231e", textAlign: "center" }}>
          Join the network
        </h1>
        <p style={{ margin: "12px 0 0", fontSize: 14.5, color: "#7d6a5f", textAlign: "center" }}>{v.loginNote}</p>
        <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
          <div onClick={v.pickLeader} style={{ cursor: "pointer", flex: 1, border: `1px solid ${v.leaderRoleBd}`, background: v.leaderRoleBg, padding: 22 }}>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, color: "#30231e" }}>I lead</div>
            <div style={{ fontSize: 12.5, color: "#7d6a5f", marginTop: 6, lineHeight: 1.5 }}>Teach, speak, facilitate</div>
          </div>
          <div onClick={v.pickOrganizer} style={{ cursor: "pointer", flex: 1, border: `1px solid ${v.orgRoleBd}`, background: v.orgRoleBg, padding: 22 }}>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, color: "#30231e" }}>I organize</div>
            <div style={{ fontSize: 12.5, color: "#7d6a5f", marginTop: 6, lineHeight: 1.5 }}>Create and host retreats</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
          <input placeholder="Email" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
        </div>
        <Hover
          as="span"
          onClick={v.doLogin}
          style={{ cursor: "pointer", display: "block", textAlign: "center", marginTop: 18, padding: 18, background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
          hoverStyle={{ background: "#30231e" }}
        >
          Continue as {v.roleLabel}
        </Hover>
        <div style={{ textAlign: "center", fontSize: 13, color: "#a3948a", marginTop: 16 }}>
          Already a member?{" "}
          <span onClick={v.doLogin} style={{ cursor: "pointer", color: A }}>
            Log in
          </span>
        </div>
      </div>
    </div>
  );
}
