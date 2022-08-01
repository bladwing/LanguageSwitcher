import { useTranslation } from "react-i18next";
import "./footer.css"

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <span className="Year">{new Date().getFullYear()} {t("footer.year")}</span> <br />{" "}
      {t("footer.nameOfCreator")}  <br />
      {t("footer.infoSource")}{" "}
      <a
        href={t("footer.SourceLink")}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("footer.Source")}
      </a>
    </footer>
  );
}
