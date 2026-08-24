// Stand-in for the design canvas's `<image-slot>` — real photography hasn't
// been shot for this site yet, so every slot renders a soft, deterministic
// gradient instead of a broken image or a "drop your image" prompt.

const GRADIENTS = [
  "linear-gradient(135deg,#e9d8c4,#c9a479)",
  "linear-gradient(135deg,#ddd3c3,#a98a68)",
  "linear-gradient(135deg,#e3cdb3,#8c6a4f)",
  "linear-gradient(135deg,#eee0cc,#b98f66)",
  "linear-gradient(135deg,#d8c7b0,#93765a)",
  "linear-gradient(135deg,#ecdcc6,#c2a37c)",
];

function pick(id) {
  if (!id) return GRADIENTS[0];
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return GRADIENTS[h % GRADIENTS.length];
}

export default function ImageSlot({ id, shape = "rect", style, className }) {
  const radius = shape === "circle" ? "50%" : "0";
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: radius,
        background: pick(id),
        ...style,
      }}
    />
  );
}
