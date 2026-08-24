import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, MUTE, fieldLabel, inputStyle, textareaStyle } from "../../lib/ui";

export default function Apply({ v }) {
  const { retreat } = v;
  return (
    <div style={{ maxWidth: 1040, margin: "0 auto", padding: "52px 40px 110px" }}>
      {v.applyDone && (
        <div style={{ border: "1px solid #d9bda6", background: "#f9f0e8", padding: 64, textAlign: "center" }}>
          <div style={{ fontSize: 11.5, letterSpacing: ".2em", textTransform: "uppercase", color: A }}>Application submitted</div>
          <h1 style={{ margin: "20px 0 0", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 44, color: "#30231e" }}>
            You&apos;ve applied to lead in Costa Rica.
          </h1>
          <p style={{ margin: "16px auto 0", maxWidth: 520, fontSize: 15.5, lineHeight: 1.7, color: "#5f524a" }}>
            Travis reviews every application personally. You&apos;ll hear back within a week, and you can track it from your
            dashboard.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 34 }}>
            <span onClick={v.navDash} style={{ cursor: "pointer", padding: "17px 30px", background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}>
              Track application
            </span>
            <span onClick={v.navExplore} style={{ cursor: "pointer", padding: "17px 30px", border: "1px solid #c9ab93", color: "#5f524a", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}>
              Keep exploring
            </span>
          </div>
        </div>
      )}
      {v.applyOpen && (
        <div>
          <span onClick={v.backToRetreat} style={{ cursor: "pointer", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: MUTE }}>
            ← Back to retreat
          </span>
          <h1 style={{ margin: "22px 0 0", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 44, color: "#30231e" }}>Apply to lead</h1>
          <div style={{ display: "flex", gap: 20, alignItems: "center", marginTop: 30, border: "1px solid #e8ded2", background: "#fffdfa", padding: 20 }}>
            <div style={{ width: 96, height: 72, flex: "none" }}>
              <ImageSlot id="apply-thumb" shape="rect" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 23, color: "#30231e" }}>{retreat.name}</div>
              <div style={{ fontSize: 13, color: "#7d6a5f", marginTop: 6 }}>
                {retreat.location} · {retreat.dates} · {retreat.duration} · hosted by {retreat.host}
              </div>
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right" }}>
              <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: MUTE }}>Open slots</div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 24, color: A, marginTop: 4 }}>{retreat.openSlots}</div>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#7d6a5f", marginBottom: 12 }}>Which role are you applying for?</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {v.roleOptions.map((r) => (
                <div key={r.label} onClick={r.pick} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 14, border: `1px solid ${r.bd}`, background: r.bg, padding: "18px 20px" }}>
                  <span style={{ width: 16, height: 16, borderRadius: "50%", border: `1px solid ${r.dot}`, background: r.dotFill, flex: "none" }} />
                  <span style={{ fontSize: 15, color: "#30231e", flex: 1 }}>{r.label}</span>
                  <span style={{ fontSize: 11.5, letterSpacing: ".1em", textTransform: "uppercase", color: MUTE }}>{r.state}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 26, marginTop: 38 }}>
            <div>
              <div style={fieldLabel}>Why are you interested?</div>
              <textarea value={v.a.why} onChange={v.setWhy} placeholder="What draws you to this retreat, this group, and this place." style={{ ...textareaStyle, height: 120 }} />
            </div>
            <div>
              <div style={fieldLabel}>What would you teach?</div>
              <textarea value={v.a.teach} onChange={v.setTeach} placeholder="The session, workshop or stage talk you'd bring — and what participants leave with." style={{ ...textareaStyle, height: 120 }} />
            </div>
            <div>
              <div style={fieldLabel}>Relevant experience</div>
              <textarea value={v.a.exp} onChange={v.setExp} placeholder="Retreats, groups, stages — and the guests you could bring." style={{ ...textareaStyle, height: 110 }} />
            </div>
            <div>
              <div style={fieldLabel}>Links</div>
              <input value={v.a.links} onChange={v.setLinks} placeholder="Website, Instagram, a past talk" style={inputStyle} />
            </div>
            <div>
              <div style={fieldLabel}>
                Video introduction <span style={{ textTransform: "none", letterSpacing: 0, color: MUTE }}>— optional, but organizers watch them</span>
              </div>
              <div style={{ border: "1px dashed #ddd0c2", background: "#fffdfa", padding: 30, textAlign: "center", fontSize: 14, color: MUTE }}>Drop a video file, or paste a link</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 38, paddingTop: 26, borderTop: "1px solid #e8ded2" }}>
            <Hover
              as="span"
              onClick={v.submitApply}
              style={{ cursor: "pointer", padding: "19px 36px", background: A, color: "#fefaf4", fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
              hoverStyle={{ background: "#30231e" }}
            >
              Submit Application
            </Hover>
            <span style={{ fontSize: 13, color: MUTE }}>Your profile, credentials and past retreats attach automatically.</span>
          </div>
        </div>
      )}
    </div>
  );
}
