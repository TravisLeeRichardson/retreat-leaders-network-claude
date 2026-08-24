import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, INK, MUTE } from "../../lib/ui";

export default function RetreatDetail({ v }) {
  const { retreat } = v;
  return (
    <div>
      <div style={{ position: "relative", height: 520, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageSlot id="retreat-hero" shape="rect" />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg,rgba(36,26,22,.32) 0%,rgba(36,26,22,.18) 40%,rgba(36,26,22,.78) 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px 46px" }}>
            <span onClick={v.navExplore} style={{ pointerEvents: "auto", cursor: "pointer", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(254,250,244,.75)" }}>
              ← All retreats
            </span>
            <div style={{ fontSize: 11.5, letterSpacing: ".2em", textTransform: "uppercase", color: "#e6b898", margin: "22px 0 14px" }}>{retreat.kicker}</div>
            <h1 style={{ margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 60, lineHeight: 1.06, color: "#fefaf4", maxWidth: 800 }}>{retreat.name}</h1>
            <div style={{ display: "flex", gap: 26, marginTop: 22, fontSize: 13.5, color: "rgba(254,250,244,.85)" }}>
              <span>{retreat.location}</span>
              <span>{retreat.dates}</span>
              <span>{retreat.duration}</span>
              <span>{retreat.groupSize}</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 40px 110px", display: "grid", gridTemplateColumns: "1fr 372px", gap: 72, alignItems: "start" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, paddingBottom: 28, borderBottom: "1px solid #e8ded2" }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", border: "1px solid #e8ded2", flex: "none" }}>
              <ImageSlot id="retreat-host" shape="circle" />
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE }}>Organized by</div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 22, color: "#30231e", marginTop: 3 }}>{retreat.host}</div>
            </div>
            <span onClick={v.viewHost} style={{ marginLeft: "auto", cursor: "pointer", fontSize: 12, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: A }}>
              View profile →
            </span>
          </div>

          <div style={{ marginTop: 38, border: "1px solid #e8ded2", background: "#fffdfa" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, padding: "22px 24px", borderBottom: "1px solid #f0e7db" }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: A }}>This retreat still needs</div>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 27, color: "#30231e", marginTop: 6 }}>{retreat.short} · production board</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
                  <div style={{ width: 180, height: 5, background: "#f0e7db" }}>
                    <div style={{ height: 5, width: v.boardPct, background: A }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: A }}>{v.boardReadiness}</span>
                </div>
              </div>
              <Hover
                as="span"
                onClick={v.startApply}
                style={{ marginLeft: "auto", cursor: "pointer", padding: "13px 20px", background: A, color: "#fefaf4", fontSize: 11, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ background: "#30231e" }}
              >
                Claim a slot
              </Hover>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: "#f0e7db" }}>
              {v.needs.map((n, i) => (
                <Hover
                  as="div"
                  key={i}
                  onClick={n.act}
                  style={{ cursor: "pointer", border: `1px solid ${n.bd}`, background: n.bg, padding: 20, display: "flex", flexDirection: "column", gap: 8 }}
                  hoverStyle={{ borderColor: A }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", border: `1px solid ${n.bd}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: n.fg, flex: "none" }}>
                      {n.mark}
                    </span>
                    <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 20, color: "#30231e" }}>{n.label}</span>
                    <span style={{ marginLeft: "auto", fontSize: 10.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: n.fg }}>{n.state}</span>
                  </div>
                  <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#7d6a5f" }}>{n.detail}</div>
                  <div style={{ fontSize: 12, color: MUTE, marginTop: "auto" }}>{n.who}</div>
                </Hover>
              ))}
            </div>
          </div>

          <p style={{ margin: "44px 0 0", fontFamily: "var(--font-serif), serif", fontSize: 25, lineHeight: 1.5, color: "#30231e" }}>{retreat.lede}</p>
          <p style={{ margin: "24px 0 0", fontSize: 15.5, lineHeight: 1.8, color: "#5f524a" }}>{retreat.body}</p>

          <div style={{ marginTop: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: MUTE, marginBottom: 8 }}>Philosophy</div>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.8, color: "#5f524a", maxWidth: 660 }}>{retreat.philosophy}</p>
          </div>

          <div style={{ marginTop: 64 }}>
            <h2 style={{ margin: "0 0 26px", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 34, color: "#30231e" }}>Trip elements</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
              {v.elements.map((e) => (
                <div key={e.slot} style={{ border: "1px solid #e8ded2", background: "#fffdfa" }}>
                  <div style={{ height: 132 }}>
                    <ImageSlot id={e.slot} shape="rect" />
                  </div>
                  <div style={{ padding: 16 }}>
                    <div style={{ fontSize: 10.5, letterSpacing: ".14em", color: "#c9ab93" }}>{e.num}</div>
                    <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, lineHeight: 1.25, color: "#30231e", marginTop: 6 }}>{e.name}</div>
                    <p style={{ margin: "7px 0 0", fontSize: 12.5, lineHeight: 1.6, color: "#7d6a5f" }}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 64 }}>
            <h2 style={{ margin: "0 0 22px", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 34, color: "#30231e" }}>Schedule overview</h2>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {v.days.map((d, i) => (
                <div key={i} onClick={d.pick} style={{ cursor: "pointer", flex: 1, minWidth: 96, border: `1px solid ${d.bd}`, background: d.bg, padding: "14px 12px" }}>
                  <div style={{ fontSize: 10.5, letterSpacing: ".12em", textTransform: "uppercase", color: MUTE }}>{d.label}</div>
                  <div style={{ fontSize: 13, color: "#30231e", marginTop: 6, fontWeight: 500 }}>{d.title}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 20, border: "1px solid #e8ded2", background: "#fffdfa", padding: 22 }}>
              <div style={{ width: 200, height: 130, flex: "none" }}>
                <ImageSlot id="day-detail" shape="rect" />
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: A }}>{v.day.label}</div>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 26, color: "#30231e", marginTop: 8 }}>{v.day.title}</div>
                <p style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.7, color: "#5f524a", maxWidth: 520 }}>{v.day.desc}</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 64 }}>
            <h2 style={{ margin: "0 0 18px", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 34, color: "#30231e" }}>Who it&apos;s for</h2>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {v.audience.map((a, i) => (
                <span key={i} style={{ padding: "11px 18px", background: "#f7f0e7", border: "1px solid #eee4d8", fontSize: 13.5, color: "#5f524a" }}>
                  {a.label}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 64 }}>
            <h2 style={{ margin: "0 0 22px", fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 34, color: "#30231e" }}>Current leaders</h2>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {v.crew.map((c) => (
                <div key={c.slot} onClick={c.open} style={{ cursor: "pointer", width: 168, border: "1px solid #e8ded2", background: "#fffdfa", padding: 18, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 74, height: 74, borderRadius: "50%", overflow: "hidden", border: "1px solid #e8ded2" }}>
                    <ImageSlot id={c.slot} shape="circle" />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 18, color: "#30231e" }}>{c.name}</div>
                    <div style={{ fontSize: 11.5, color: "#7d6a5f", marginTop: 4 }}>{c.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 64, border: "1px solid #d9bda6", background: "#f9f0e8", padding: 38 }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 36, color: "#30231e" }}>We&apos;re Looking For</h2>
            <p style={{ margin: "12px 0 26px", fontSize: 14.5, lineHeight: 1.7, color: "#7d6a5f", maxWidth: 560 }}>{retreat.seekingNote}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {v.slots.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 18, background: "#fffdfa", border: "1px solid #e8ded2", padding: "20px 22px" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, color: "#30231e" }}>{s.role}</div>
                    <div style={{ fontSize: 12.5, color: "#7d6a5f", marginTop: 4 }}>{s.detail}</div>
                  </div>
                  <div style={{ marginLeft: "auto", fontSize: 11, fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: A }}>{s.status}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid #e2c9b3" }}>
              <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE, marginBottom: 10 }}>What the organizer is looking for</div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.75, color: "#5f524a", maxWidth: 620 }}>{retreat.wants}</p>
            </div>
            <Hover
              as="span"
              onClick={v.startApply}
              style={{ cursor: "pointer", display: "inline-block", marginTop: 30, padding: "18px 34px", background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
              hoverStyle={{ background: "#30231e" }}
            >
              Apply to Lead This Retreat
            </Hover>
          </div>
        </div>

        <div style={{ position: "sticky", top: 106, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ border: "1px solid #e8ded2", background: "#fffdfa", padding: 28 }}>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 34, color: "#30231e" }}>{retreat.price}</div>
            <div style={{ fontSize: 12.5, color: "#7d6a5f", marginTop: 5 }}>{retreat.priceNote}</div>
            <div style={{ margin: "22px 0", height: 1, background: "#f0e7db" }} />
            <div style={{ fontSize: 13, lineHeight: 1.6, color: A, fontWeight: 600 }}>{retreat.leaderTerms}</div>
            <div style={{ marginTop: 18, padding: 18, border: "1px solid #d9bda6", background: "#f9f0e8" }}>
              <div style={{ fontSize: 10.5, letterSpacing: ".16em", textTransform: "uppercase", color: A }}>Seat credit</div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, lineHeight: 1.3, color: "#30231e", marginTop: 8 }}>{v.seatCredit.headline}</div>
              <div style={{ height: 6, background: "#eddcc9", marginTop: 14 }}>
                <div style={{ height: 6, width: v.seatCredit.pct, background: A }} />
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 9 }}>
                <span style={{ fontSize: 11.5, color: "#7d6a5f" }}>{v.seatCredit.brought}</span>
                <span style={{ marginLeft: "auto", fontSize: 11.5, fontWeight: 600, color: A }}>{v.seatCredit.value}</span>
              </div>
              <div style={{ fontSize: 11.5, lineHeight: 1.55, color: "#7d6a5f", marginTop: 10 }}>{v.seatCredit.detail}</div>
            </div>
            <Hover
              as="span"
              onClick={v.startApply}
              style={{ cursor: "pointer", display: "block", textAlign: "center", marginTop: 22, padding: 17, background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
              hoverStyle={{ background: "#30231e" }}
            >
              Apply to Lead
            </Hover>
            <Hover
              as="span"
              onClick={v.save}
              style={{ cursor: "pointer", display: "block", textAlign: "center", marginTop: 10, padding: 15, border: "1px solid #ddd0c2", color: "#5f524a", fontSize: 11.5, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
              hoverStyle={{ borderColor: A }}
            >
              Save retreat
            </Hover>
            <div style={{ fontSize: 11.5, color: MUTE, textAlign: "center", marginTop: 14 }}>{retreat.deadline}</div>
          </div>
          <div style={{ border: "1px solid #e8ded2", background: "#fffdfa" }}>
            <div style={{ height: 170 }}>
              <ImageSlot id="retreat-basecamp" shape="rect" />
            </div>
            <div style={{ padding: 22 }}>
              <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE }}>Home base</div>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 20, color: "#30231e", marginTop: 7 }}>{retreat.basecamp}</div>
            </div>
          </div>
          <div style={{ border: "1px solid #e8ded2", background: "#fffdfa", padding: 24 }}>
            <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE, marginBottom: 14 }}>Included</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {v.included.map((i, idx) => (
                <div key={idx} style={{ fontSize: 13.5, lineHeight: 1.5, color: "#5f524a" }}>
                  — {i.label}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 12.5, color: MUTE, marginTop: 16, lineHeight: 1.6 }}>Not included: {retreat.excluded}</div>
          </div>
          <Hover
            as="div"
            onClick={v.navCohort}
            style={{ cursor: "pointer", border: "1px solid #d9bda6", background: "#f9f0e8", padding: 24 }}
            hoverStyle={{ background: "#f4e6da" }}
          >
            <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE }}>Part of</div>
            <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 21, color: "#30231e", marginTop: 7 }}>Founding Leader Cohort</div>
            <div style={{ fontSize: 12.5, color: A, marginTop: 8, fontWeight: 600 }}>{retreat.stage} →</div>
          </Hover>
        </div>
      </div>
    </div>
  );
}
