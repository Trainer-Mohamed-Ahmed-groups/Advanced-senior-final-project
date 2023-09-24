import { NavLink } from "react-router-dom";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

export default function SiteNav() {

    const { t } = useTranslation()

    let [currentLang, setCurrentLang] = useState(i18next.language)

    let handleLang = () => {
        if (i18next.language === "en") {
            i18next.changeLanguage("ar")
            setCurrentLang("ar")
        }
        else {
            i18next.changeLanguage("en")
            setCurrentLang("en")
        }
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">{t('home')}</NavLink>
                </li>
                <li>
                    <NavLink to="/about">{t('about')}</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">{t('blog')}</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">{t('contact_us')}</NavLink>
                </li>
                <li>
                    <FontAwesomeIcon className="fa-2x" icon={faLanguage} onClick={handleLang} />
                </li>
            </ul>
        </nav>
    )
}
