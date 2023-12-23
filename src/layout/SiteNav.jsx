import { NavLink } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar } from 'react-bootstrap';
import logo from "../asstes/images/logo.png"
export default function SiteNav() {

    const { t } = useTranslation()


    let handleLang = () => {
        i18next.language === "en" ? i18next.changeLanguage("ar") : i18next.changeLanguage("en")
        localStorage.setItem("siteLanguage", i18next.language)
    }

    return (
        <Navbar expand="lg" className="tw-bg-primary">
            <Container>
                <img src={logo} alt="Site logo" width="100" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="tw-bg-white" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="mx-auto tw-flex tw-items-center tw-justify-between tw-w-1/2">
                        <li>
                            <NavLink className="nav-link tw-text-white" to="/">{t('home')}</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link tw-text-white" to="/about">{t('about')}</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link tw-text-white" to="/products">{t('products')}</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link tw-text-white" to="/contact">{t('contact_us')}</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link tw-text-white" to="/toolkit">Toolkit</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link tw-text-white" to="/users">Users</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon className="fa-2x tw-text-white" icon={faLanguage} onClick={handleLang} />
                        </li>
                    </ul>
                    <h6>
                        <a className="nav-link tw-text-white" href="tel:123456789">
                            <h5>{t('help')}</h5>
                            <span>123456789</span>
                        </a>
                    </h6>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
