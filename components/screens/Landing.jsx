import Image from "next/image";
import ImageSlot from "../ImageSlot";
import Hover from "../Hover";
import { A } from "../../lib/ui";

const CATEGORIES = [
  { label: "Venues", done: false },
  { label: "Practitioners", done: false },
  { label: "Photographers", done: false },
  { label: "Videographers", done: false },
  { label: "Chefs", done: false },
  { label: "Transportation", done: false },
  { label: "Other services", done: false },
  { label: "Media & promotion ✓", done: true },
];

export default function Landing({ v }) {
  return (
    <div>
      <div style={{ position: "relative", height: 640, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ImageSlot id="hero-landing" shape="rect" />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg,rgba(36,26,22,.5) 0%,rgba(36,26,22,.28) 45%,rgba(36,26,22,.72) 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", pointerEvents: "none" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px", width: "100%" }}>
            <div style={{ maxWidth: 780 }}>
              <div style={{ fontSize: 11.5, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(254,250,244,.72)", marginBottom: 26 }}>
                The network behind extraordinary retreats
              </div>
              <h1 style={{ margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 74, lineHeight: 1.04, color: "#fefaf4", letterSpacing: "-.015em" }}>
                Create. Lead. Experience.
                <br />
                <em style={{ fontStyle: "italic", color: "#e6b898" }}>Extraordinary Retreats.</em>
              </h1>
              <p style={{ margin: "28px 0 0", maxWidth: 600, fontSize: 17, lineHeight: 1.65, color: "rgba(254,250,244,.86)" }}>
                Retreat Leaders Network connects retreat organizers with the experts, leaders, and resources they need to
                create exceptional retreats.
              </p>
              <div style={{ display: "flex", gap: 14, marginTop: 38, pointerEvents: "auto" }}>
                <Hover
                  onClick={v.navCreate}
                  style={{ cursor: "pointer", padding: "17px 30px", background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
                  hoverStyle={{ background: "#a35f42" }}
                >
                  Create a Retreat
                </Hover>
                <Hover
                  onClick={v.navExplore}
                  style={{ cursor: "pointer", padding: "17px 30px", border: "1px solid rgba(254,250,244,.5)", color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
                  hoverStyle={{ background: "rgba(254,250,244,.12)" }}
                >
                  Explore Retreats
                </Hover>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 40px 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 52 }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 42, lineHeight: 1.15, color: "#30231e", maxWidth: 520 }}>
            A retreat takes more than one person.
          </h2>
          <p style={{ margin: "0 0 0 auto", maxWidth: 400, fontSize: 14.5, lineHeight: 1.7, color: "#7d6a5f" }}>
            Three sides of the same experience. Today the network connects the first two — organizers and leaders.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: 260, border: "1px solid #e8ded2" }}>
              <ImageSlot id="eco-organizers" shape="rect" />
            </div>
            <div style={{ paddingTop: 24 }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 25, color: "#30231e" }}>Organizers</div>
              <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.7, color: "#7d6a5f" }}>
                Create retreats — define the experience, the audience, and the leaders you need beside you.
              </p>
              <span onClick={v.navCreate} style={{ cursor: "pointer", display: "inline-block", marginTop: 16, fontSize: 12, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: A }}>
                Create a retreat →
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: 260, border: "1px solid #e8ded2" }}>
              <ImageSlot id="eco-leaders" shape="rect" />
            </div>
            <div style={{ paddingTop: 24 }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 25, color: "#30231e" }}>Leaders</div>
              <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.7, color: "#7d6a5f" }}>
                Bring expertise and audiences — teach, facilitate, speak, and grow your practice on the road.
              </p>
              <span onClick={v.navLeaders} style={{ cursor: "pointer", display: "inline-block", marginTop: 16, fontSize: 12, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: A }}>
                Browse leaders →
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", opacity: 0.6 }}>
            <div style={{ height: 260, border: "1px solid #e8ded2" }}>
              <ImageSlot id="eco-participants" shape="rect" />
            </div>
            <div style={{ paddingTop: 24 }}>
              <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 25, color: "#30231e" }}>Participants</div>
              <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.7, color: "#7d6a5f" }}>
                Discover exceptional experiences — and the people leading them.
              </p>
              <span style={{ display: "inline-block", marginTop: 16, fontSize: 12, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "#a3948a" }}>
                Opening 2027
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 112, background: "#30231e", color: "#fefaf4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "88px 40px", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "#c98e6c", marginBottom: 22 }}>
              Featured program · 4 seats
            </div>
            <h2 style={{ margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 46, lineHeight: 1.1, color: "#fefaf4" }}>
              The Founding Leader Cohort
            </h2>
            <p style={{ margin: "22px 0 0", fontSize: 16, lineHeight: 1.7, color: "rgba(254,250,244,.78)", maxWidth: 480 }}>
              One year, three retreats, three roles. Participate in Japan, co-lead in Costa Rica, co-create Asheville with a
              profit share — then run your own with the network behind you.
            </p>
            <div style={{ display: "flex", gap: 0, margin: "34px 0 0", borderTop: "1px solid rgba(254,250,244,.16)" }}>
              <div style={{ flex: 1, padding: "18px 18px 18px 0", borderRight: "1px solid rgba(254,250,244,.16)" }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, color: "#e6b898" }}>Japan</div>
                <div style={{ fontSize: 12, color: "rgba(254,250,244,.6)", marginTop: 4 }}>Apr 2027 · Participate</div>
              </div>
              <div style={{ flex: 1, padding: "18px", borderRight: "1px solid rgba(254,250,244,.16)" }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, color: "#e6b898" }}>Costa Rica</div>
                <div style={{ fontSize: 12, color: "rgba(254,250,244,.6)", marginTop: 4 }}>Nov 2027 · Lead</div>
              </div>
              <div style={{ flex: 1, padding: "18px 0 18px 18px" }}>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 19, color: "#e6b898" }}>Asheville</div>
                <div style={{ fontSize: 12, color: "rgba(254,250,244,.6)", marginTop: 4 }}>Apr 2028 · Co-create</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
              <Hover
                as="span"
                onClick={v.navCohort}
                style={{ cursor: "pointer", padding: "16px 28px", background: A, color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2 }}
                hoverStyle={{ background: "#a35f42" }}
              >
                View the program
              </Hover>
              <Hover
                as="a"
                href="https://www.retreatleadersnetwork.com/"
                target="_blank"
                rel="noreferrer"
                style={{ padding: "16px 28px", border: "1px solid rgba(254,250,244,.4)", color: "#fefaf4", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", borderRadius: 2, display: "inline-block" }}
                hoverStyle={{ background: "rgba(254,250,244,.1)" }}
              >
                Apply on the site
              </Hover>
            </div>
          </div>
          <div style={{ height: 440 }}>
            <ImageSlot id="cohort-feature" shape="rect" />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "104px 40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 44 }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 38, color: "#30231e" }}>
            Retreats seeking leaders
          </h2>
          <span onClick={v.navExplore} style={{ cursor: "pointer", fontSize: 12, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: A }}>
            See all retreats →
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
          {v.featured.map((r) => (
            <Hover
              as="div"
              key={r.id}
              onClick={r.open}
              style={{ cursor: "pointer", border: "1px solid #e8ded2", background: "#fffdfa" }}
              hoverStyle={{ borderColor: "#c9ab93" }}
            >
              <div style={{ height: 200 }}>
                <ImageSlot id={r.slot} shape="rect" />
              </div>
              <div style={{ padding: 22 }}>
                <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: A }}>{r.badge}</div>
                <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 24, lineHeight: 1.2, color: "#30231e", marginTop: 10 }}>{r.name}</div>
                <div style={{ fontSize: 13, color: "#7d6a5f", marginTop: 8 }}>{r.meta}</div>
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #f0e7db" }}>
                  <div style={{ fontSize: 12.5, color: A, fontWeight: 600 }}>{r.needsStrip}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 9 }}>
                    <div style={{ flex: 1, height: 4, background: "#f0e7db" }}>
                      <div style={{ height: 4, width: r.pct, background: A }} />
                    </div>
                    <span style={{ fontSize: 11, color: "#a3948a", whiteSpace: "nowrap" }}>{r.readiness}</span>
                  </div>
                </div>
              </div>
            </Hover>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid #e8ded2" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 40px" }}>
          <div style={{ display: "flex", gap: 56, alignItems: "flex-start" }}>
            <div style={{ maxWidth: 340, flex: "none" }}>
              <h3 style={{ margin: 0, fontFamily: "var(--font-serif), serif", fontWeight: 400, fontSize: 30, color: "#30231e" }}>
                The rest of the ecosystem is coming.
              </h3>
              <p style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.7, color: "#7d6a5f" }}>
                Every retreat needs more than leaders. These join the network next — media and promotion is already live
                through Be Well Asheville.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 14, flex: 1 }}>
              {CATEGORIES.map((c) => (
                <div
                  key={c.label}
                  style={
                    c.done
                      ? { border: "1px solid #d9bda6", background: "#f9f0e8", padding: 18, color: A, fontSize: 13.5, fontWeight: 600 }
                      : { border: "1px solid #eee4d8", padding: 18, color: "#a3948a", fontSize: 13.5 }
                  }
                >
                  {c.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#30231e", color: "rgba(254,250,244,.6)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 40px", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ fontFamily: "var(--font-serif), serif", fontSize: 20, color: "#fefaf4" }}>Retreat Leaders Network</div>
          <div style={{ fontSize: 13 }}>Experience it. Lead it. Create it. Own it.</div>
          <div style={{ marginLeft: "auto", fontSize: 12.5 }}>© {new Date().getFullYear()} · Asheville, North Carolina</div>
        </div>
      </div>
    </div>
  );
}
