import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, MUTE, page, h1 } from "../../lib/ui";

export default function Dashboard({ v }) {
  return (
    <div style={page}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
        <div>
          <h1 style={h1}>My retreats</h1>
          <p style={{ margin: "10px 0 0", fontSize: 15, color: "#7d6a5f" }}>{v.dashGreeting}</p>
        </div>
        <Hover
          as="span"
          onClick={v.navCreate}
          style={{ marginLeft: "auto", cursor: "pointer", padding: "16px 26px", background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
          hoverStyle={{ background: "#30231e" }}
        >
          New Retreat
        </Hover>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 18, marginTop: 38 }}>
        {v.dashStats.map((s, i) => (
          <div key={i} style={{ border: `1px solid ${s.bd}`, background: s.bg, padding: 26 }}>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 40, lineHeight: 1, color: s.fg }}>{s.value}</div>
            <div style={{ fontSize: 12.5, color: "#7d6a5f", marginTop: 10 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 34 }}>
        {v.myRetreats.map((r) => (
          <div key={r.slot} style={{ border: "1px solid #e8ded2", background: "#fffdfa", display: "flex", gap: 26, padding: 24 }}>
            <div style={{ width: 190, height: 140, flex: "none" }}>
              <ImageSlot id={r.slot} shape="rect" />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 27, color: "#30231e" }}>{r.name}</div>
                <span style={{ padding: "5px 11px", background: r.statusBg, color: r.statusFg, fontSize: 10.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase" }}>{r.status}</span>
              </div>
              <div style={{ fontSize: 13, color: "#7d6a5f" }}>{r.meta}</div>
              <div style={{ display: "flex", gap: 40, marginTop: "auto" }}>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#30231e" }}>{r.leaders}</div>
                  <div style={{ height: 4, width: 120, background: "#f0e7db", marginTop: 8 }}>
                    <div style={{ height: 4, width: r.pct, background: A }} />
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#30231e" }}>{r.apps}</div>
                  <div style={{ fontSize: 12, color: A, marginTop: 6 }}>{r.appsNote}</div>
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#30231e" }}>{r.participants}</div>
                  <div style={{ fontSize: 12, color: MUTE, marginTop: 6 }}>{r.participantsNote}</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, justifyContent: "center", width: 180, flex: "none" }}>
              <Hover
                as="span"
                onClick={r.review}
                style={{ cursor: "pointer", textAlign: "center", padding: 15, background: A, color: "#fefaf4", fontSize: 11, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ background: "#30231e" }}
              >
                {r.cta}
              </Hover>
              <Hover
                as="span"
                onClick={r.manage}
                style={{ cursor: "pointer", textAlign: "center", padding: 14, border: "1px solid #ddd0c2", color: "#5f524a", fontSize: 11, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ borderColor: A }}
              >
                Manage Retreat
              </Hover>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 46, border: "1px dashed #ddd0c2", padding: 26, display: "flex", alignItems: "center", gap: 18 }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, color: "#30231e" }}>Need a venue, chef or photographer?</div>
          <div style={{ fontSize: 13.5, color: MUTE, marginTop: 6 }}>Service partners join the network next. Media &amp; promotion is available now.</div>
        </div>
        <span onClick={v.soon} style={{ marginLeft: "auto", cursor: "pointer", padding: "14px 22px", border: "1px solid #ddd0c2", color: MUTE, fontSize: 11, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}>
          Coming soon
        </span>
      </div>
    </div>
  );
}
