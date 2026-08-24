import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, MUTE, page, h1 } from "../../lib/ui";

export default function Applications({ v }) {
  return (
    <div style={page}>
      <span onClick={v.navDash} style={{ cursor: "pointer", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: MUTE }}>
        ← Dashboard
      </span>
      <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginTop: 20 }}>
        <div>
          <h1 style={h1}>Applications</h1>
          <p style={{ margin: "10px 0 0", fontSize: 15, color: "#7d6a5f" }}>Costa Rica Wellness &amp; Longevity · Nov 1–9, 2027</p>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 30, color: "#30231e" }}>{v.filledLabel}</div>
          <div style={{ fontSize: 12, color: "#7d6a5f", marginTop: 4 }}>leader slots filled</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 32, paddingBottom: 20, borderBottom: "1px solid #e8ded2", alignItems: "center", flexWrap: "wrap" }}>
        {v.slotTabs.map((t) => (
          <span key={t.label} onClick={t.pick} style={{ cursor: "pointer", padding: "11px 18px", border: `1px solid ${t.bd}`, background: t.bg, color: t.fg, fontSize: 12.5, fontWeight: 500, borderRadius: 2 }}>
            {t.label}
          </span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 12.5, color: MUTE }}>Sorted by newest</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 28 }}>
        {v.applicants.length === 0 && (
          <div style={{ border: "1px dashed #ddd0c2", padding: 40, textAlign: "center", fontSize: 14, color: MUTE }}>
            No applicants in this slot yet.
          </div>
        )}
        {v.applicants.map((p) => (
          <div key={p.id} style={{ border: `1px solid ${p.bd}`, background: p.bg, padding: 26, display: "flex", gap: 26, flexWrap: "wrap" }}>
            <div style={{ width: 104, flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ width: 96, height: 96, borderRadius: "50%", overflow: "hidden", border: "1px solid #e8ded2" }}>
                <ImageSlot id={p.slot} shape="circle" />
              </div>
              <div style={{ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: A, textAlign: "center" }}>{p.stage}</div>
            </div>
            <div style={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 27, color: "#30231e" }}>{p.name}</div>
                {p.tag && (
                  <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: p.tagFg }}>{p.tag}</span>
                )}
              </div>
              <div style={{ fontSize: 13.5, color: "#7d6a5f" }}>
                {p.title} · {p.location}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ padding: "6px 12px", border: `1px solid ${p.tierBd}`, background: p.tierBg, fontSize: 10.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: p.tierFg }}>
                  {p.tierName}
                </span>
                <span style={{ fontSize: 12, color: "#7d6a5f" }}>{p.tierNote}</span>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ padding: "6px 12px", background: "#f7f0e7", border: "1px solid #eee4d8", fontSize: 12, color: "#5f524a" }}>{p.c1}</span>
                <span style={{ padding: "6px 12px", background: "#f7f0e7", border: "1px solid #eee4d8", fontSize: 12, color: "#5f524a" }}>{p.c2}</span>
                <span style={{ padding: "6px 12px", background: "#f7f0e7", border: "1px solid #eee4d8", fontSize: 12, color: "#5f524a" }}>{p.c3}</span>
              </div>
              <div style={{ borderLeft: "2px solid #d9bda6", paddingLeft: 16, marginTop: 4 }}>
                <div style={{ fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: MUTE, marginBottom: 7 }}>Would teach</div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "#5f524a", maxWidth: 560 }}>{p.pitch}</p>
              </div>
              <div style={{ display: "flex", gap: 22, fontSize: 12.5, color: "#7d6a5f", marginTop: 2, flexWrap: "wrap" }}>
                <span>{p.experience}</span>
                <span>{p.guests}</span>
                <span style={{ color: A, cursor: "pointer" }}>{p.video}</span>
              </div>
            </div>
            <div style={{ width: 150, flex: "none", display: "flex", flexDirection: "column", gap: 9, justifyContent: "center" }}>
              <Hover
                as="span"
                onClick={p.accept}
                style={{ cursor: "pointer", textAlign: "center", padding: 14, background: A, color: "#fefaf4", fontSize: 11, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ background: "#30231e" }}
              >
                Accept
              </Hover>
              <Hover
                as="span"
                onClick={p.view}
                style={{ cursor: "pointer", textAlign: "center", padding: 13, border: "1px solid #c9ab93", color: "#5f524a", fontSize: 11, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ borderColor: A }}
              >
                View Profile
              </Hover>
              <span onClick={p.message} style={{ cursor: "pointer", textAlign: "center", padding: 13, border: "1px solid #e2d7c9", color: "#7d6a5f", fontSize: 11, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}>
                Message
              </span>
              <span onClick={p.decline} style={{ cursor: "pointer", textAlign: "center", padding: 6, fontSize: 12, color: MUTE }}>
                Decline
              </span>
              {p.decision && (
                <div style={{ textAlign: "center", fontSize: 11.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: A }}>{p.decision}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
