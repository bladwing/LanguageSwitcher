import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import "./menu.scss"

export default function Nav() {
  const { t } = useTranslation();

  return (
    <div className="topNavigation">
      <Link to="/">
        <img src={t("img")} alt="Logo" className="Logo" />
      </Link>

      <nav className="navigation">
        <Link to="/" className="btn btn-3">
          {t("menu.MainPage")}
        </Link>
        <Link to="/geography" className="btn btn-3">
          {t("menu.Geography")}
        </Link>
        <Link to="/climate" className="btn btn-3">
          {t("menu.Climate")}
        </Link>
        <Link to="/wine" className="btn btn-3">
          {t("menu.Wine")}
        </Link>
      </nav>
      <LangSwitcher />
    </div>
  );
}
