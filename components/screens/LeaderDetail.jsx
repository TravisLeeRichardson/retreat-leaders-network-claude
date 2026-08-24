import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, INK, MUTE } from "../../lib/ui";

export default function LeaderDetail({ v }) {
  const { leader, tier } = v;
  return (
    <div>
      <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageSlot id="leader-cover" shape="rect" />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(36,26,22,.2),rgba(36,26,22,.55))", pointerEvents: "none" }} />
      </div>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px 110px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 372px", gap: 72, alignItems: "start" }}>
          <div>
            <div style={{ marginTop: -72, display: "flex", alignItems: "flex-end", gap: 24 }}>
              <div style={{ width: 150, height: 150, borderRadius: "50%", overflow: "hidden", border: "4px solid #fefaf4", flex: "none", background: "#efe6da" }}>
                <ImageSlot id="leader-photo" shape="circle" />
              </div>
              <div style={{ paddingBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 13px", background: "#f9f0e8", border: "1px solid #d9bda6" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7d8a6a" }} />
                    <span style={{ fontSize: 11, letterSpacing: ".13em", textTransform: "uppercase", color: A, fontWeight: 600 }}>{leader.status}</span>
                  </span>
                  <span style={{ padding: "7px 13px", background: "#f2f5ee", border: "1px solid #cfd8c4", fontSize: 11, letterSpacing: ".13em", textTransform: "uppercase", color: "#5c6b4a", fontWeight: 600 }}>
                    {tier.name}
                  </span>
                  <span style={{ padding: "7px 13px", background: "#fefaf4", border: "1px solid #e8ded2", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#7d6a5f" }}>{v.tierVerified}</span>
                  <span style={{ padding: "7px 13px", background: "#fefaf4", border: "1px solid #e8ded2", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#7d6a5f" }}>{v.tierVideo}</span>
                </div>
                <h1 style={{ margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 50, lineHeight: 1.05, color: "#30231e" }}>{leader.name}</h1>
              </div>
            </div>
            <div style={{ marginTop: 18, fontSize: 16, color: "#5f524a" }}>{leader.title}</div>
            <div style={{ marginTop: 6, fontSize: 13.5, color: MUTE }}>
              {leader.location} · {tier.note}
            </div>

            <div style={{ marginTop: 26, border: "1px solid #e8ded2", background: "#fffdfa", padding: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 150, height: 96, flex: "none" }}>
                  <ImageSlot id="leader-video" shape="rect" />
                </div>
                <div>
                  <div style={{ fontSize: 10.5, letterSpacing: ".16em", textTransform: "uppercase", color: A }}>Meet them first</div>
                  <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, color: "#30231e", marginTop: 6 }}>A two-minute introduction, in their own words</div>
                  <div style={{ fontSize: 12.5, color: "#7d6a5f", marginTop: 6 }}>Why they lead, what they teach, and what a room with them feels like.</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 44, paddingTop: 34, borderTop: "1px solid #e8ded2" }}>
              <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: MUTE, marginBottom: 18 }}>Retreat ladder</div>
              <div style={{ display: "flex", gap: 2 }}>
                {v.ladder.map((s, i) => (
                  <div key={i} style={{ flex: 1 }}>
                    <div style={{ height: 4, background: s.bar }} />
                    <div style={{ fontSize: 12.5, fontWeight: 500, color: s.fg, marginTop: 10 }}>{s.label}</div>
                    <div style={{ fontSize: 11.5, color: MUTE, marginTop: 3 }}>{s.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ margin: "44px 0 0", fontFamily: "var(--font-serif), serif", fontSize: 23, lineHeight: 1.55, color: "#30231e" }}>{leader.lede}</p>
            <p style={{ margin: "20px 0 0", fontSize: 15.5, lineHeight: 1.8, color: "#5f524a" }}>{leader.bio}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, marginTop: 52 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: MUTE, marginBottom: 16 }}>Topics I teach</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {v.topics.map((t, i) => (
                    <span key={i} style={{ padding: "9px 15px", background: "#f7f0e7", border: "1px solid #eee4d8", fontSize: 13, color: "#5f524a" }}>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: MUTE, marginBottom: 16 }}>Credentials</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {v.credentials.map((c, i) => (
                    <div key={i} style={{ fontSize: 14, lineHeight: 1.5, color: "#5f524a" }}>
                      {c.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 56 }}>
              <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: MUTE, marginBottom: 18 }}>Retreat experience</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
                {v.pastRetreats.map((p) => (
                  <div key={p.slot} style={{ border: "1px solid #e8ded2", background: "#fffdfa" }}>
                    <div style={{ height: 130 }}>
                      <ImageSlot id={p.slot} shape="rect" />
                    </div>
                    <div style={{ padding: 16 }}>
                      <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, color: "#30231e" }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "#7d6a5f", marginTop: 5 }}>{p.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 46, marginTop: 52, padding: "32px 0", borderTop: "1px solid #e8ded2", borderBottom: "1px solid #e8ded2" }}>
              {v.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 38, color: "#30231e", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#7d6a5f", marginTop: 8 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 34, display: "flex", gap: 22, alignItems: "center" }}>
              <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: MUTE }}>Elsewhere</div>
              <div style={{ display: "flex", gap: 16 }}>
                <span style={{ fontSize: 13.5, color: A, cursor: "pointer" }}>Instagram</span>
                <span style={{ fontSize: 13.5, color: A, cursor: "pointer" }}>LinkedIn</span>
                <span style={{ fontSize: 13.5, color: A, cursor: "pointer" }}>Website</span>
                <span style={{ fontSize: 13.5, color: A, cursor: "pointer" }}>Podcast</span>
              </div>
            </div>
          </div>

          <div style={{ position: "sticky", top: 106, marginTop: 44, display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ border: "1px solid #e8ded2", background: "#fffdfa", padding: 26, display: "flex", flexDirection: "column", gap: 10 }}>
              <Hover
                as="span"
                onClick={v.invite}
                style={{ cursor: "pointer", textAlign: "center", padding: 17, background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ background: "#30231e" }}
              >
                Invite to Retreat
              </Hover>
              <Hover
                as="span"
                onClick={v.request}
                style={{ cursor: "pointer", textAlign: "center", padding: 15, border: `1px solid ${A}`, color: A, fontSize: 11.5, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ background: "#f9f0e8" }}
              >
                Request This Leader
              </Hover>
              <Hover
                as="span"
                onClick={v.message}
                style={{ cursor: "pointer", textAlign: "center", padding: 14, border: "1px solid #ddd0c2", color: "#5f524a", fontSize: 11.5, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ borderColor: A }}
              >
                Message
              </Hover>
            </div>
            {v.leaderIsApplicant && (
              <div style={{ border: "1px solid #d9bda6", background: "#f9f0e8", padding: 24 }}>
                <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE }}>Applied to</div>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 20, color: "#30231e", marginTop: 7 }}>Costa Rica · longevity slot</div>
                <div style={{ display: "flex", gap: 9, marginTop: 16 }}>
                  <span onClick={v.acceptFromProfile} style={{ cursor: "pointer", flex: 1, textAlign: "center", padding: 13, background: A, color: "#fefaf4", fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", borderRadius: 2 }}>
                    Accept
                  </span>
                  <span onClick={v.navApps} style={{ cursor: "pointer", flex: 1, textAlign: "center", padding: 13, border: "1px solid #c9ab93", color: "#5f524a", fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", borderRadius: 2 }}>
                    All applicants
                  </span>
                </div>
              </div>
            )}
            <div style={{ border: "1px solid #e8ded2", background: "#fffdfa", padding: 26 }}>
              <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE, marginBottom: 16 }}>Availability</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {v.availability.map((a, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 13.5, color: "#5f524a", flex: 1 }}>{a.window}</span>
                    <span style={{ fontSize: 11.5, letterSpacing: ".1em", textTransform: "uppercase", color: a.fg }}>{a.state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ border: "1px solid #e8ded2", background: "#fffdfa", padding: 26 }}>
              <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE, marginBottom: 14 }}>Audience</div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 30, color: "#30231e" }}>{leader.audience}</div>
              <div style={{ fontSize: 13, color: "#7d6a5f", marginTop: 6, lineHeight: 1.6 }}>{leader.audienceNote}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
