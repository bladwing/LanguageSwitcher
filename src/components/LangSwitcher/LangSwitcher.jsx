import { useState } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import "./LangStyle.css";

export default function LangSwitcher() {
  const { i18n, t } = useTranslation();

  const languages = [
    { name: "English", code: "en" },
    { name: "ქართული", code: "ge" },
  ];

  const currentLocale = Cookies.get("i18next") || "en";

  const [language, setLanguage] = useState(currentLocale);

  const handleChangeLocale = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="LanguageContainer">
      <h4 className="languageTitle">{t("languageTitle")}</h4>
   <div className="glow-on-hover">
    
    <select
      onChange={handleChangeLocale}
      value={language}
      className="LangSwitcher glow-on-hover"
    >
      {languages.map(({ name, code }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
    </div>
    </div>
  );
}
