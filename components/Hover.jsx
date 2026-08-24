"use client";

import { useState } from "react";

const BORDER_RE = /^\s*(\d+(?:\.\d+)?px)\s+(\S+)\s+(.+)\s*$/;

// React warns when a `border` shorthand and a longhand like `borderColor`
// coexist across a style diff (e.g. base style sets `border`, hoverStyle
// only overrides `borderColor`). Expand the shorthand up front so hover
// merges never mix the two.
function expandBorder(style) {
  if (!style || typeof style.border !== "string") return style;
  const m = style.border.match(BORDER_RE);
  if (!m) return style;
  const { border, ...rest } = style;
  return { borderWidth: m[1], borderStyle: m[2], borderColor: m[3], ...rest };
}

/**
 * Generic hover-state wrapper — a stand-in for the design canvas's
 * `style-hover="..."` attribute, which has no plain-CSS/React equivalent
 * without a stylesheet. Renders `Tag` with `style`, merging `hoverStyle`
 * in while the pointer is over it.
 */
export default function Hover({ as: Tag = "span", style, hoverStyle, onClick, children, ...props }) {
  const [hover, setHover] = useState(false);
  const baseStyle = hoverStyle ? expandBorder(style) : style;
  // Most callers pass a clickable <span>/<div>, which carries no button
  // semantics on its own — add them here so these act as real controls for
  // keyboard and screen-reader users, not just mouse clicks.
  const interactive =
    onClick && Tag !== "a" && Tag !== "button"
      ? {
          role: "button",
          tabIndex: 0,
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onClick(e);
            }
          },
        }
      : null;
  return (
    <Tag
      {...props}
      {...interactive}
      onClick={onClick}
      onMouseEnter={(e) => {
        setHover(true);
        props.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setHover(false);
        props.onMouseLeave?.(e);
      }}
      style={{ ...baseStyle, ...(hover ? hoverStyle : null) }}
    >
      {children}
    </Tag>
  );
}
