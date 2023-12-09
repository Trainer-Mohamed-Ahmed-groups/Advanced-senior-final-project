import { faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../context/auth/Auth';
import { useState } from 'react';
import Swal from 'sweetalert2'
import Cookies from 'js-cookie';

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let token;

    const auth = useAuth()
    const navigate = useNavigate()
    let { t } = useTranslation()

    let handleData = (ev) => {
        ev.target.name === "user_email"
            ? setEmail(ev.target.value)
            : ev.target.name === "user_password"
            && setPassword(ev.target.value)
    }
    const handleLogin = async (ev) => {

        ev.preventDefault()
        fetch("http://react-ecommerce.activegroup-eg.com/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (!data.status) {
                    Swal.fire({
                        title: "Error",
                        text: `${data.message}`,
                        icon: "error"
                    });
                }
                else {
                    auth.login(data.data.username)
                    navigate("/")
                    token = data.data.accessToken;
                    Cookies.set("token", token, { expires: 1, secure: true })
                }   
                console.log(data)
            })
    }

    return (
        <div className='tw-mt-5'>
            <h5 className='tw-ms-8'>
                {t('already_client')}
                <FontAwesomeIcon icon={faUserPlus} className='tw-mx-2' />
            </h5>
            <div className="tw-ps-4 tw-shadow-lg tw-bg-white">
                <h6 className='tw-py-5 tw-px-6'>{t('login')}</h6>
                <form onSubmit={handleLogin}>
                    <input type="email" onChange={handleData} name="user_email" className='custom_input placeholder:tw-text-gray-600' placeholder={t("email_placeholder")} />
                    <input type="password" onChange={handleData} name="user_password" className='custom_input placeholder:tw-text-gray-600' placeholder={t("password_placeholder")} />
                    <input type="submit" value={t('login')} onClick={handleLogin} />
                </form>
            </div>
        </div>
    )
}
