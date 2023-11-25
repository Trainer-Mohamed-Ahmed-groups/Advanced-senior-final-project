import { faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/auth/Auth';
import {useNavigate} from "react-router-dom"

export default function Login() {

    let { t } = useTranslation()
    const [user, setUser] = useState("")
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = (ev) => {
        auth.login(user)
        navigate("/")
        ev.preventDefault()
    }
    return (
        <div className="tw-bg-gray-400 tw-min-h-[80vh]">
            <div className='tw-container tw-m-auto tw-grid lg:tw-grid-cols-2 tw-p-10 tw-gap-5'>
                <div className='tw-mt-5'>
                    <h5 className='tw-ms-8'>
                        {t('already_client')}
                        <FontAwesomeIcon icon={faUserPlus} className='tw-mx-2' />
                    </h5>
                    <div className="tw-ps-4 tw-shadow-lg tw-bg-white">
                        <h6 className='tw-py-5 tw-px-6'>{t('login')}</h6>
                        <form action="">
                            <input type="email" name="user_email" className='custom_input placeholder:tw-text-gray-600' placeholder={t("email_placeholder")} />
                            <input type="text" name="username" className='custom_input placeholder:tw-text-gray-600' placeholder={t("username_placeholder")} onChange={e => setUser(e.target.value)} />
                            <input type="password" name="user_password" className='custom_input placeholder:tw-text-gray-600' placeholder={t("password_placeholder")} />
                            <input type="submit" value={t('login')} onClick={handleLogin} />
                        </form>
                    </div>
                </div>
                <div className='tw-mt-5'>
                    <h5 className='tw-ms-8'>
                        {t('new_client')}
                        <FontAwesomeIcon icon={faUserCheck} className='tw-mx-2' />
                    </h5>
                    {/* <div className="tw-ps-4 tw-shadow-lg tw-bg-white">
                        <h6 className='tw-py-5 tw-px-6'>{t('register')}</h6>
                        <form action="">
                            <input type="email" name="user_email" className='custom_input placeholder:tw-text-gray-600' placeholder={t("email_placeholder")} />
                            <input type="text" name="username" className='custom_input placeholder:tw-text-gray-600' placeholder={t("username_placeholder")} />
                            <input type="password" name="user_password" className='custom_input placeholder:tw-text-gray-600' placeholder={t("password_placeholder")} />
                            <input type="password" name="user_c_password" className='custom_input placeholder:tw-text-gray-600' placeholder={t("password_c_placeholder")} />
                            <input type="submit" value={t('register')} />
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
