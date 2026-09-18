/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hm: {
          canvas: "#F7F8FA",
          surface: "#FFFFFF",
          tint: "#EDF0F4",
          line: "#DFE3E9",
          ink: "#0F172A",
          body: "#475569",
          muted: "#5B6B7C",
          primary: "#1D4ED8",
          "primary-hover": "#1A44B8",
          soft: "#E4EBFC",
          "on-primary": "#FFFFFF",
          scrim: "#0B1220",
          "on-photo": "#FFFFFF",
        },
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "1.05", letterSpacing: "-2px", fontWeight: "700" }],
        "display-lg": ["44px", { lineHeight: "1.10", letterSpacing: "-1.2px", fontWeight: "700" }],
        "display-md": ["30px", { lineHeight: "1.20", letterSpacing: "-0.6px", fontWeight: "600" }],
        title: ["20px", { lineHeight: "1.35", letterSpacing: "-0.2px", fontWeight: "600" }],
        lead: ["20px", { lineHeight: "1.60", letterSpacing: "-0.1px" }],
        body: ["17px", { lineHeight: "1.65", letterSpacing: "-0.1px" }],
        caption: ["14px", { lineHeight: "1.50", letterSpacing: "0px" }],
        label: ["12px", { lineHeight: "1.20", letterSpacing: "0.6px", fontWeight: "600" }],
        micro: ["12px", { lineHeight: "1.40", letterSpacing: "0px" }],
      },
      borderRadius: {
        hm: "12px",
        "hm-lg": "18px",
        "hm-xl": "24px",
      },
      boxShadow: {
        lift: "0 1px 2px rgba(15,23,42,0.04), 0 6px 16px rgba(15,23,42,0.06)",
        float: "0 2px 6px rgba(15,23,42,0.06), 0 20px 48px rgba(15,23,42,0.12)",
      },
      transitionTimingFunction: {
        enter: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
