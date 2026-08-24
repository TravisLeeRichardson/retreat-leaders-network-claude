import { EB_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Retreat Leaders Network",
  description:
    "Retreat Leaders Network connects retreat organizers with the experts, leaders, and resources they need to create exceptional retreats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
