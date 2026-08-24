import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, MUTE, page } from "../../lib/ui";

export default function Roles({ v }) {
  return (
    <div style={page}>
      <div style={{ fontSize: 11.5, letterSpacing: ".2em", textTransform: "uppercase", color: A }}>How it works</div>
      <h1 style={{ margin: "16px 0 0", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 50, lineHeight: 1.08, color: "#30231e", maxWidth: 760 }}>
        A retreat is a production. This is who makes it happen.
      </h1>
      <p style={{ margin: "20px 0 0", fontFamily: "var(--font-serif), serif", fontSize: 22, lineHeight: 1.55, color: "#5f524a", maxWidth: 680 }}>
        One host, a team of contributors, and eventually participants. Everyone gets the same trust primitives —
        verification, tier, video — and proves themselves differently depending on what they supply.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 52 }}>
        {v.roleModel.map((r) => (
          <div key={r.key} style={{ border: "1px solid #e8ded2", background: "#fffdfa", display: "flex", flexDirection: "column" }}>
            <div style={{ height: 190 }}>
              <ImageSlot id={r.slot} shape="rect" />
            </div>
            <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: A }}>{r.tag}</div>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 32, color: "#30231e", marginTop: 8 }}>{r.name}</div>
              </div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "#5f524a" }}>{r.desc}</p>
              <div>
                <div style={{ fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: MUTE, marginBottom: 10 }}>Categories</div>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {r.cats.map((c, i) => (
                    <span key={i} style={{ padding: "6px 12px", background: "#f7f0e7", border: "1px solid #eee4d8", fontSize: 12, color: "#5f524a" }}>
                      {c.label}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid #f0e7db" }}>
                <div style={{ fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: MUTE, marginBottom: 7 }}>How they prove it</div>
                <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "#5f524a" }}>{r.proof}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ margin: "76px 0 0", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 38, color: "#30231e" }}>The badge system</h2>
      <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.7, color: "#7d6a5f", maxWidth: 620 }}>
        Every badge on the platform means one specific, checkable thing. Nothing is a vibe and nothing is self-reported.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 34 }}>
        {v.badgeLegend.map((g) => (
          <div key={g.group} style={{ border: "1px solid #e8ded2", background: "#fffdfa", padding: 26 }}>
            <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: A, marginBottom: 20 }}>{g.group}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {g.items.map((i) => (
                <div key={i.label}>
                  <span style={{ display: "inline-block", padding: "5px 11px", border: "1px solid #d9bda6", background: "#f9f0e8", fontSize: 10.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: A }}>
                    {i.label}
                  </span>
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: "#5f524a", marginTop: 8 }}>{i.note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 60, border: "1px solid #d9bda6", background: "#f9f0e8", padding: 40, display: "flex", alignItems: "center", gap: 36, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 30, color: "#30231e" }}>Seat Credit</div>
          <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.7, color: "#5f524a", maxWidth: 620 }}>
            Bring guests, earn your seat. One guest covers a third, two cover two-thirds, three cover it entirely. Hosts
            can adjust the thresholds, but this is the network standard — and it is why trips here fill.
          </p>
        </div>
        <Hover
          as="span"
          onClick={v.navExplore}
          style={{ marginLeft: "auto", cursor: "pointer", flex: "none", padding: "18px 30px", background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
          hoverStyle={{ background: "#30231e" }}
        >
          Find a retreat
        </Hover>
      </div>
    </div>
  );
}
