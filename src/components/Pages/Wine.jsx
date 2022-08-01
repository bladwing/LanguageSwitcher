import { useTranslation } from "react-i18next";

export default function Wine() {
  const { t } = useTranslation();
  return (
    <section className="PageSection">
      <h1>{t("pageTitle.Wine")}</h1>
      <article>
        <p>{t("pageArticle.Wine")}</p>
      </article>
    </section>
  );
}
