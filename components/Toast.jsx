export default function Toast({ v }) {
  if (!v.toast) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 60,
        background: "#30231e",
        color: "#fefaf4",
        padding: "14px 24px",
        borderRadius: 3,
        fontSize: 13.5,
        boxShadow: "0 12px 34px rgba(48,35,30,.28)",
      }}
    >
      {v.toast}
    </div>
  );
}
