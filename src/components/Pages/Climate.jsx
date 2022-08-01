import { useTranslation } from "react-i18next";

export default function Climate() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t("pageTitle.Climate")}</h1>
      <article>
        <p>{t("pageArticle.Climate")}</p>
      </article>
    </section>
  );
}
