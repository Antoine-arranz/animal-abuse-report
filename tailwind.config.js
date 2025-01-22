/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/(index)/**/*.{js,jsx,ts,tsx}",
    "./<custom_folders>/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Couleurs principales
        primary: {
          DEFAULT: "#d41116",
          dark: "#6a0927",
          light: "#ff4d4d",
        },
        // Couleurs secondaires
        secondary: {
          DEFAULT: "#000000",
          gray: "#ededed",
          lightGray: "#e5e5e5",
        },
        // Couleurs d'état
        warning: "#ff9800",
        success: "#4caf50",
        error: "#f44336",
      },
      // Espacement personnalisé
      spacing: {
        nav: "70px", // Hauteur de la barre de navigation Android
        "nav-ios": "90px", // Hauteur de la barre de navigation iOS
      },
      // Tailles de police personnalisées
      fontSize: {
        nav: "12px", // Taille du texte de navigation
        title: "48px",
        subtitle: "18px",
        body: "16px",
        small: "14px",
      },
      // Bordures personnalisées
      borderRadius: {
        card: "12px",
        button: "9999px", // Pour les boutons arrondis
      },
      // Gradients personnalisés
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #d41116 0%, #6a0927 100%)",
      },
      fontFamily: {
        sans: ["Montserrat"],
        montserrat: ["Montserrat"],
        "montserrat-medium": ["Montserrat-Medium"],
        "montserrat-semibold": ["Montserrat-SemiBold"],
        "montserrat-bold": ["Montserrat-Bold"],
      },
    },
  },
  plugins: [],
};
