import { useTranslation } from "react-i18next";
import "./pages.scss"

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("pageTitle.Home")}</h1>
      <article className="articleMainPage">
        <p className="Description">{t("Description")} </p>
        <img src={t("countrySpecification")} alt="countrySpecification" className="CountrySpecification mainImg"/>
        <img src="img/GeorgiaFlagGerb.png" alt="flag" className="flagMainPage mainImg"/>
      </article>
    </div>
  );
}
