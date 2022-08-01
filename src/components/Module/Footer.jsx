import { useTranslation } from "react-i18next";
import "./footer.css"

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      
     <div className="portfolio"><a href={t("footer.portfolioLink")} target="_blank" rel="noopener noreferrer" className="portfolio"> <h2 className="flipX">{t("footer.nameOfCreator")}</h2></a> </div>  <br />
      {t("footer.infoSource")}{" "}
      <a
        href={t("footer.SourceLink")}
        target="_blank"
        rel="noopener noreferrer"
        className="source"
      > {" "}
        {t("footer.Source")}
      </a>
      <br />
      <span className="Year">&copy; {new Date().getFullYear()} {t("footer.year")}</span> <br />{" "}
     

 
    </footer>
  );
}
