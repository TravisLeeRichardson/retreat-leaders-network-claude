import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, MUTE, page, h1, inputStyle, chip } from "../../lib/ui";

const selectStyle = { ...inputStyle, width: "auto" };

export default function Explore({ v }) {
  return (
    <div style={page}>
      <h1 style={h1}>Explore retreats</h1>
      <p style={{ margin: "10px 0 0", fontSize: 15, color: "#7d6a5f" }}>
        {v.resultCount} retreats in the network · {v.seekingCount} currently seeking leaders
      </p>

      <div style={{ marginTop: 34, border: "1px solid #e8ded2", background: "#fffdfa", padding: 18, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <input
          value={v.query}
          onChange={v.setQuery}
          placeholder="Search retreats, topics, hosts"
          style={{ ...inputStyle, flex: 1, minWidth: 220 }}
        />
        <select value={v.loc} onChange={v.setLoc} style={selectStyle}>
          <option value="">Any location</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="United States">United States</option>
          <option value="Japan">Japan</option>
          <option value="Peru">Peru</option>
          <option value="Portugal">Portugal</option>
        </select>
        <select value={v.when} onChange={v.setWhen} style={selectStyle}>
          <option value="">Any dates</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
        </select>
        <select value={v.cat} onChange={v.setCat} style={selectStyle}>
          <option value="">All categories</option>
          <option value="Wellness">Wellness</option>
          <option value="Longevity">Longevity</option>
          <option value="Business">Business</option>
          <option value="Personal development">Personal development</option>
        </select>
        <select value={v.price} onChange={v.setPrice} style={selectStyle}>
          <option value="">Any price</option>
          <option value="low">Under $6k</option>
          <option value="mid">$6k–$10k</option>
          <option value="high">$10k+</option>
          <option value="inv">By invitation</option>
        </select>
        <select value={v.dur} onChange={v.setDur} style={selectStyle}>
          <option value="">Any length</option>
          <option value="short">3–6 days</option>
          <option value="long">7+ days</option>
        </select>
        <span
          onClick={v.toggleSeeking}
          style={{ cursor: "pointer", padding: "11px 18px", border: `1px solid ${A}`, background: v.seekingBg, color: v.seekingFg, fontSize: 12, fontWeight: 600, letterSpacing: ".06em", borderRadius: 2 }}
        >
          Seeking Leaders
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE }}>Show retreats needing</span>
        {v.needFilters.map((n) => (
          <span key={n.label} onClick={n.pick} style={{ cursor: "pointer", padding: "9px 15px", border: `1px solid ${n.bd}`, background: n.bg, color: n.fg, fontSize: 12, borderRadius: 2 }}>
            {n.label}
          </span>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 32 }}>
        {v.retreats.map((r) => (
          <Hover as="div" key={r.id} style={{ border: "1px solid #e8ded2", background: "#fffdfa", display: "flex", flexDirection: "column" }} hoverStyle={{ borderColor: "#c9ab93" }}>
            <div onClick={r.open} style={{ cursor: "pointer", height: 250, position: "relative" }}>
              <ImageSlot id={r.slot} shape="rect" />
            </div>
            <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: A }}>{r.badge}</div>
                <div style={{ marginLeft: "auto", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: MUTE }}>{r.category}</div>
              </div>
              <div onClick={r.open} style={{ cursor: "pointer", fontFamily: "var(--font-serif), serif", fontSize: 29, lineHeight: 1.15, color: "#30231e" }}>
                {r.name}
              </div>
              <div style={{ fontSize: 13, color: "#7d6a5f", letterSpacing: ".02em" }}>{r.meta}</div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "#5f524a" }}>{r.blurb}</p>
              <div style={{ border: "1px solid #eee4d8", background: "#faf5ee", padding: 16 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: MUTE }}>Production</span>
                  <span style={{ marginLeft: "auto", fontSize: 11.5, color: MUTE }}>{r.readiness}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {r.openBadges.map((b, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 19, height: 19, borderRadius: "50%", background: "#f4e2cf", border: "1px solid #d9bda6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: A, flex: "none" }}>
                          ?
                        </span>
                        <span style={{ fontSize: 12.5, color: A, fontWeight: 500, lineHeight: 1.3 }}>{b.label}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {r.lockedBadges.map((b, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 19, height: 19, borderRadius: "50%", background: "#e6ece0", border: "1px solid #cfd8c4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600, color: "#5c6b4a", flex: "none" }}>
                          ✓
                        </span>
                        <span style={{ fontSize: 12.5, color: "#5f524a", lineHeight: 1.3 }}>{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ height: 4, background: "#f0e7db", marginTop: 14 }}>
                  <div style={{ height: 4, width: r.pct, background: A }} />
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 6, borderTop: "1px solid #f0e7db", marginTop: "auto" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", overflow: "hidden", border: "1px solid #e8ded2", flex: "none" }}>
                  <ImageSlot id={r.hostSlot} shape="circle" />
                </div>
                <div style={{ fontSize: 12.5, color: "#7d6a5f" }}>{r.host}</div>
                <div style={{ marginLeft: "auto", fontFamily: "var(--font-serif), serif", fontSize: 20, color: "#30231e" }}>{r.price}</div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <Hover
                  as="span"
                  onClick={r.open}
                  style={{ cursor: "pointer", flex: 1, textAlign: "center", padding: 14, background: A, color: "#fefaf4", fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
                  hoverStyle={{ background: "#a35f42" }}
                >
                  View Retreat
                </Hover>
                <Hover
                  as="span"
                  onClick={r.save}
                  style={{ cursor: "pointer", padding: "14px 18px", border: "1px solid #ddd0c2", color: "#5f524a", fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
                  hoverStyle={{ borderColor: A }}
                >
                  Save
                </Hover>
              </div>
            </div>
          </Hover>
        ))}
      </div>
    </div>
  );
}
