import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A, INK, MUTE, fieldLabel, inputStyle, textareaStyle } from "../../lib/ui";

const stepHeading = { margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 32, color: "#30231e" };
const stepIntro = { margin: "6px 0 32px", fontSize: 14.5, color: "#7d6a5f" };

export default function CreateWizard({ v }) {
  const { f } = v;
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "52px 40px 110px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
        <h1 style={{ margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 42, color: "#30231e" }}>Create a retreat</h1>
        <div style={{ marginLeft: "auto", fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: MUTE }}>Step {v.step} of 5</div>
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: 26 }}>
        {v.steps.map((s, i) => (
          <div key={i} onClick={s.pick} style={{ cursor: "pointer", flex: 1 }}>
            <div style={{ height: 3, background: s.bar }} />
            <div style={{ fontSize: 12, color: s.fg, marginTop: 11, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 320px", gap: 56, alignItems: "start" }}>
        <div>
          {v.step1 && (
            <div>
              <h2 style={stepHeading}>The basics</h2>
              <p style={stepIntro}>Where and when. You can change all of this before publishing.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div>
                  <div style={fieldLabel}>Retreat name</div>
                  <input value={f.name} onChange={v.setName} placeholder="Costa Rica Wellness &amp; Longevity Retreat" style={inputStyle} />
                </div>
                <div>
                  <div style={fieldLabel}>Location</div>
                  <input value={f.location} onChange={v.setLocation} placeholder="Jaco &amp; La Fortuna, Costa Rica" style={inputStyle} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                  <div>
                    <div style={fieldLabel}>Start</div>
                    <input value={f.start} onChange={v.setStart} placeholder="Nov 1, 2027" style={inputStyle} />
                  </div>
                  <div>
                    <div style={fieldLabel}>End</div>
                    <input value={f.end} onChange={v.setEnd} placeholder="Nov 9, 2027" style={inputStyle} />
                  </div>
                  <div>
                    <div style={fieldLabel}>Duration</div>
                    <input value={f.duration} onChange={v.setDuration} placeholder="9 days" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <div style={fieldLabel}>Hero image</div>
                  <div style={{ height: 220, border: "1px solid #e8ded2" }}>
                    <ImageSlot id="create-hero" shape="rect" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {v.step2 && (
            <div>
              <h2 style={stepHeading}>Describe it</h2>
              <p style={stepIntro}>This is what leaders read before deciding to apply.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div>
                  <div style={fieldLabel}>Description</div>
                  <textarea value={f.desc} onChange={v.setDesc} placeholder="An immersive retreat combining longevity, wellness, nature, and transformational experiences." style={{ ...textareaStyle, height: 130 }} />
                </div>
                <div>
                  <div style={fieldLabel}>Who is this retreat for?</div>
                  <textarea value={f.who} onChange={v.setWho} placeholder="Founders, coaches, speakers and healers who are running on empty." style={{ ...textareaStyle, height: 100 }} />
                </div>
                <div>
                  <div style={fieldLabel}>What makes it unique?</div>
                  <textarea value={f.unique} onChange={v.setUnique} placeholder="A filmed stage talk, a jungle villa, and a private chef most nights." style={{ ...textareaStyle, height: 100 }} />
                </div>
              </div>
            </div>
          )}
          {v.step3 && (
            <div>
              <h2 style={stepHeading}>Retreat details</h2>
              <p style={stepIntro}>Category, size and money.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div>
                  <div style={fieldLabel}>Retreat category</div>
                  <select value={f.category} onChange={v.setCategory} style={inputStyle}>
                    <option>Wellness &amp; longevity</option>
                    <option>Business &amp; leadership</option>
                    <option>Spiritual &amp; contemplative</option>
                    <option>Adventure</option>
                    <option>Creative</option>
                  </select>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <div style={fieldLabel}>Expected participants</div>
                    <input value={f.participants} onChange={v.setParticipants} placeholder="14" style={inputStyle} />
                  </div>
                  <div>
                    <div style={fieldLabel}>Price per seat</div>
                    <input value={f.priceIn} onChange={v.setPriceIn} placeholder="$7,997" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <div style={fieldLabel}>Application requirements</div>
                  <textarea value={f.reqs} onChange={v.setReqs} placeholder="A session or workshop, a filmed stage talk, and 3 invited guests." style={{ ...textareaStyle, height: 110 }} />
                </div>
              </div>
            </div>
          )}
          {v.step4 && (
            <div>
              <h2 style={stepHeading}>What types of leaders are you looking for?</h2>
              <p style={{ margin: "6px 0 28px", fontSize: 14.5, color: "#7d6a5f" }}>Select all that apply, then set how many of each.</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {v.typeChips.map((t) => (
                  <span key={t.label} onClick={t.toggle} style={{ cursor: "pointer", padding: "12px 20px", border: `1px solid ${t.bd}`, background: t.bg, color: t.fg, fontSize: 13.5, borderRadius: 2 }}>
                    {t.label}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 40 }}>
                <div style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#7d6a5f", marginBottom: 14 }}>How many leaders are you looking for?</div>
                {v.noTypes && (
                  <div style={{ border: "1px dashed #ddd0c2", padding: 26, fontSize: 14, color: MUTE }}>Select at least one type above to set counts.</div>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {v.typeCounts.map((t) => (
                    <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 18, border: "1px solid #e8ded2", background: "#fffdfa", padding: "18px 22px" }}>
                      <span style={{ fontSize: 15, color: "#30231e", flex: 1 }}>{t.label}</span>
                      <span onClick={t.dec} style={{ cursor: "pointer", width: 34, height: 34, border: "1px solid #ddd0c2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, color: "#5f524a", borderRadius: 2 }}>
                        −
                      </span>
                      <span style={{ fontFamily: "var(--font-serif), serif", fontSize: 22, color: "#30231e", minWidth: 22, textAlign: "center" }}>{t.count}</span>
                      <span onClick={t.inc} style={{ cursor: "pointer", width: 34, height: 34, border: "1px solid #ddd0c2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, color: "#5f524a", borderRadius: 2 }}>
                        +
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 18, fontSize: 13, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: A }}>{v.totalSlots} leader slots total</div>
              </div>
            </div>
          )}
          {v.step5 && (
            <div>
              <h2 style={stepHeading}>Preview &amp; publish</h2>
              <p style={stepIntro}>This is how your retreat appears to leaders browsing the network.</p>
              <div style={{ border: "1px solid #e8ded2", background: "#fffdfa" }}>
                <div style={{ height: 250 }}>
                  <ImageSlot id="preview-hero" shape="rect" />
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: A }}>Seeking {v.totalSlots} leaders</div>
                  <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 32, lineHeight: 1.15, color: "#30231e", marginTop: 12 }}>{v.previewName}</div>
                  <div style={{ fontSize: 13, color: "#7d6a5f", marginTop: 9 }}>{v.previewMeta}</div>
                  <p style={{ margin: "16px 0 0", fontSize: 14.5, lineHeight: 1.7, color: "#5f524a" }}>{v.previewDesc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 22, paddingTop: 18, borderTop: "1px solid #f0e7db" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", overflow: "hidden", border: "1px solid #e8ded2" }}>
                      <ImageSlot id="preview-host" shape="circle" />
                    </div>
                    <div style={{ fontSize: 12.5, color: "#7d6a5f" }}>Travis Richardson</div>
                    <div style={{ marginLeft: "auto", fontFamily: "var(--font-serif), serif", fontSize: 21, color: "#30231e" }}>{v.previewPrice}</div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 26 }}>
                {v.previewSlots.map((s) => (
                  <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 14, border: "1px solid #d9bda6", background: "#f9f0e8", padding: "16px 20px" }}>
                    <span style={{ fontSize: 14.5, color: "#30231e", flex: 1 }}>{s.label}</span>
                    <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: A }}>{s.count} open</span>
                  </div>
                ))}
              </div>
              <Hover
                as="span"
                onClick={v.publish}
                style={{ cursor: "pointer", display: "inline-block", marginTop: 34, padding: "19px 38px", background: A, color: "#fefaf4", fontSize: 12, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ background: "#30231e" }}
              >
                Publish Retreat
              </Hover>
            </div>
          )}

          <div style={{ display: "flex", gap: 12, marginTop: 44, paddingTop: 26, borderTop: "1px solid #e8ded2" }}>
            <Hover
              as="span"
              onClick={v.back}
              style={{ cursor: "pointer", padding: "15px 26px", border: "1px solid #ddd0c2", color: "#5f524a", fontSize: 11.5, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
              hoverStyle={{ borderColor: A }}
            >
              Back
            </Hover>
            {v.notLastStep && (
              <Hover
                as="span"
                onClick={v.next}
                style={{ cursor: "pointer", padding: "15px 30px", background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".11em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ background: "#30231e" }}
              >
                Continue
              </Hover>
            )}
            <span onClick={v.saveDraft} style={{ cursor: "pointer", marginLeft: "auto", alignSelf: "center", fontSize: 12.5, color: MUTE }}>
              Save draft
            </span>
          </div>
        </div>

        <div style={{ position: "sticky", top: 106, border: "1px solid #e8ded2", background: "#fffdfa", padding: 26 }}>
          <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: MUTE, marginBottom: 16 }}>Live summary</div>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 22, lineHeight: 1.25, color: "#30231e" }}>{v.previewName}</div>
          <div style={{ fontSize: 12.5, color: "#7d6a5f", marginTop: 8, lineHeight: 1.6 }}>{v.previewMeta}</div>
          <div style={{ margin: "20px 0", height: 1, background: "#f0e7db" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <div style={{ display: "flex", fontSize: 13 }}>
              <span style={{ color: MUTE, flex: 1 }}>Category</span>
              <span style={{ color: "#5f524a" }}>{f.category}</span>
            </div>
            <div style={{ display: "flex", fontSize: 13 }}>
              <span style={{ color: MUTE, flex: 1 }}>Participants</span>
              <span style={{ color: "#5f524a" }}>{v.previewParticipants}</span>
            </div>
            <div style={{ display: "flex", fontSize: 13 }}>
              <span style={{ color: MUTE, flex: 1 }}>Price</span>
              <span style={{ color: "#5f524a" }}>{v.previewPrice}</span>
            </div>
            <div style={{ display: "flex", fontSize: 13 }}>
              <span style={{ color: MUTE, flex: 1 }}>Leader slots</span>
              <span style={{ color: A, fontWeight: 600 }}>{v.totalSlots}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
