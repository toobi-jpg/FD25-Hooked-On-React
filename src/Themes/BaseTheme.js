export const baseThemeOptions = { 
  typography: {
    fontFamily: "'Roboto', sans-serif", // body/p font
    h1: { fontFamily: "'Montserrat', system-ui",fontSize: "56px", fontWeight: 400, textShadow: "0px 0px 8px #0000004b", padding: "2rem", textAlign: "center", gap: "2rem" },
    h2: { fontFamily: "'Montserrat', sans-serif", fontSize: "32px", fontWeight: 200, textShadow: "0px 1px 8px #00000070", padding: "1rem", textAlign: "center", gap: "1rem" },
    h3: { fontFamily: "'Montserrat', sans-serif", fontSize: "28px", fontWeight: 600, textShadow: "0px 1px 8px #000000bd", padding: "1rem", textAlign: "center", gap: "1rem"  },
    h4: { fontFamily: "'Montserrat', sans-serif", fontSize: "24px", fontWeight: 600, textShadow: "0px 0px 8px #000000bd",  padding: "1rem", textAlign: "center", gap: "1rem" },
    body1: { fontSize: "18px", lineHeight: 1.6, padding: "1rem", textAlign: "center", gap: "2rem" },
  },
    accentColors: {
    success: "#7bdf7e8a",
    error: "#7914256c", },
    
  shape: {
    borderRadius: 8, // gemensam för kort, knappar osv.
  },
  spacing: 3, // MUI spacing
};