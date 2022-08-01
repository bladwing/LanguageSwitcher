import { useTranslation } from "react-i18next";

export default function Geography() {
  const { t } = useTranslation();
  return (
    <section className="PageSection">
      <h1>{t("pageTitle.Geography")}</h1>
      <article>
        <p>{t("pageArticle.Geography")}</p>
        <img src={t("images.map")} alt="map" className="mapImg"/>
      </article>
    </section>
  );
}
