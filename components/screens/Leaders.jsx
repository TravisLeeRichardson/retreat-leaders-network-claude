import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, MUTE, page, h1 } from "../../lib/ui";

export default function Leaders({ v }) {
  return (
    <div style={page}>
      <h1 style={h1}>Find leaders</h1>
      <p style={{ margin: "10px 0 0", fontSize: 15, color: "#7d6a5f" }}>
        Doctors, practitioners, coaches, speakers and educators who lead retreats.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 30 }}>
        {v.dirFilters.map((f) => (
          <span key={f.label} onClick={f.pick} style={{ cursor: "pointer", padding: "11px 18px", border: `1px solid ${f.bd}`, background: f.bg, color: f.fg, fontSize: 12.5, borderRadius: 2 }}>
            {f.label}
          </span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28, marginTop: 34 }}>
        {v.directory.map((l) => (
          <Hover as="div" key={l.slot} onClick={l.open} style={{ cursor: "pointer", border: "1px solid #e8ded2", background: "#fffdfa" }} hoverStyle={{ borderColor: "#c9ab93" }}>
            <div style={{ height: 250 }}>
              <ImageSlot id={l.slot} shape="rect" />
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7d8a6a" }} />
                <span style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#7d6a5f" }}>{l.status}</span>
              </div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 25, color: "#30231e", marginTop: 12 }}>{l.name}</div>
              <div style={{ fontSize: 13, color: "#7d6a5f", marginTop: 5, lineHeight: 1.5 }}>{l.title}</div>
              <div style={{ fontSize: 12.5, color: MUTE, marginTop: 10 }}>
                {l.location} · {l.stage}
              </div>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 14 }}>
                <span style={{ padding: "5px 11px", border: `1px solid ${l.tierBd}`, background: l.tierBg, fontSize: 10.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: l.tierFg }}>
                  {l.tierName}
                </span>
                <span style={{ padding: "5px 11px", border: "1px solid #e8ded2", fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: MUTE }}>{l.videoBadge}</span>
              </div>
              <div style={{ fontSize: 12, color: "#7d6a5f", marginTop: 10 }}>{l.tierNote}</div>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 14 }}>
                <span style={{ padding: "5px 10px", background: "#f7f0e7", fontSize: 11.5, color: "#5f524a" }}>{l.t1}</span>
                <span style={{ padding: "5px 10px", background: "#f7f0e7", fontSize: 11.5, color: "#5f524a" }}>{l.t2}</span>
              </div>
            </div>
          </Hover>
        ))}
      </div>
    </div>
  );
}
