import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, MUTE, pageNarrow } from "../../lib/ui";

export default function Cohort({ v }) {
  return (
    <div style={pageNarrow}>
      <span onClick={v.navLanding} style={{ cursor: "pointer", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: MUTE }}>
        ← Home
      </span>
      <div style={{ fontSize: 11.5, letterSpacing: ".2em", textTransform: "uppercase", color: A, marginTop: 26 }}>Featured program · 4 seats</div>
      <h1 style={{ margin: "16px 0 0", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 52, lineHeight: 1.08, color: "#30231e" }}>
        The Founding Leader Cohort
      </h1>
      <p style={{ margin: "20px 0 0", fontFamily: "var(--font-serif), serif", fontSize: 24, lineHeight: 1.55, color: "#5f524a", maxWidth: 700 }}>
        Experience it. Lead it. Create it. Own it. A real-world apprenticeship in transformational retreats — and the
        reason this network exists.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 44 }}>
        {v.stages.map((s) => (
          <div key={s.slot} style={{ display: "flex", gap: 26, border: "1px solid #e8ded2", background: "#fffdfa", padding: 26, flexWrap: "wrap" }}>
            <div style={{ width: 150, height: 110, flex: "none" }}>
              <ImageSlot id={s.slot} shape="rect" />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: A }}>{s.kicker}</div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 28, color: "#30231e", marginTop: 9 }}>{s.name}</div>
              <p style={{ margin: "9px 0 0", fontSize: 14.5, lineHeight: 1.7, color: "#5f524a", maxWidth: 560 }}>{s.desc}</p>
            </div>
            <div style={{ width: 140, flex: "none", textAlign: "right" }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 22, color: "#30231e" }}>{s.cost}</div>
              <div style={{ fontSize: 12, color: MUTE, marginTop: 5 }}>{s.role}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <a
          href="https://www.retreatleadersnetwork.com/"
          target="_blank"
          rel="noreferrer"
          style={{ padding: "18px 32px", background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
        >
          Apply on retreatleadersnetwork.com
        </a>
        <Hover
          as="span"
          onClick={v.openCostaRica}
          style={{ cursor: "pointer", padding: "18px 32px", border: "1px solid #c9ab93", color: "#5f524a", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
          hoverStyle={{ borderColor: A }}
        >
          View the Costa Rica retreat
        </Hover>
      </div>
    </div>
  );
}
