import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Vahan Bazar",
        description:
          "Check Vehicle status, book vehicles, and manage your journeys with ease and confidence.",
        features: "Our Features",
      },
    },
    hi: {
      translation: {
        welcome: "वाहन बाज़ार में आपका स्वागत है",
        description:
          "वाहन की स्थिति जांचें, दो पहिया वाहन बुक करें, और आसानी और आत्मविश्वास के साथ अपनी यात्रा का प्रबंधन करें",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
