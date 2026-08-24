// Shared style tokens and small style-object factories, ported 1:1 from the
// inline styles in the design canvas source so every screen stays visually
// consistent without repeating the same declarations everywhere.

export const A = "#8c5239";
export const INK = "#30231e";
export const MUTE = "#a3948a";

export const serif = { fontFamily: "var(--font-serif), Georgia, serif" };

export const page = { maxWidth: 1240, margin: "0 auto", padding: "52px 40px 100px" };
export const pageNarrow = { maxWidth: 1040, margin: "0 auto", padding: "52px 40px 110px" };

export const eyebrow = {
  fontSize: 11,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: A,
};

export const h1 = {
  margin: 0,
  ...serif,
  fontWeight: 400,
  fontSize: 44,
  color: INK,
};

export const btnBase = {
  cursor: "pointer",
  display: "inline-block",
  fontSize: 11.5,
  fontWeight: 600,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  borderRadius: 2,
  border: "1px solid transparent",
};

export function btnPrimary(extra) {
  return {
    ...btnBase,
    padding: "17px 30px",
    background: A,
    color: "#fefaf4",
    ...extra,
  };
}

export function btnSecondary(extra) {
  return {
    ...btnBase,
    padding: "16px 28px",
    border: "1px solid #c9ab93",
    color: "#5f524a",
    background: "transparent",
    ...extra,
  };
}

export function btnGhost(extra) {
  return {
    ...btnBase,
    padding: "15px 26px",
    border: "1px solid #ddd0c2",
    color: "#5f524a",
    background: "transparent",
    ...extra,
  };
}

export const card = {
  border: "1px solid #e8ded2",
  background: "#fffdfa",
};

export const panel = {
  border: "1px solid #e8ded2",
  background: "#fffdfa",
  padding: 26,
};

export const fieldLabel = {
  fontSize: 12,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "#7d6a5f",
  marginBottom: 9,
};

export const inputStyle = {
  width: "100%",
  padding: "15px 16px",
  border: "1px solid #e8ded2",
  background: "#fffdfa",
  fontSize: 15,
  borderRadius: 2,
  outline: "none",
};

export const textareaStyle = {
  ...inputStyle,
  lineHeight: 1.6,
  resize: "vertical",
};

export function chip({ on, extra } = {}) {
  return {
    cursor: "pointer",
    padding: "11px 18px",
    border: `1px solid ${on ? A : "#e8ded2"}`,
    background: on ? A : "transparent",
    color: on ? "#fefaf4" : "#5f524a",
    fontSize: 12.5,
    borderRadius: 2,
    ...extra,
  };
}
