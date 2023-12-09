
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../context/auth/Auth';
import { useState } from 'react';
import Swal from 'sweetalert2'

export default function SignUpForm() {

    let { t } = useTranslation()
    const auth = useAuth()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [c_password, setC_password] = useState("")

    let handleData = (ev) => {
        ev.target.name === 'username'
            ? setUsername(ev.target.value)
            : ev.target.name === "user_email"
                ? setEmail(ev.target.value)
                : ev.target.name === "user_password"
                    ? setPassword(ev.target.value)
                    : ev.target.name === "user_c_password"
                    && setC_password(ev.target.value)
    }

    let handleRegister = async (ev) => {
        ev.preventDefault()
        fetch("http://react-ecommerce.activegroup-eg.com/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password, c_password })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (!data.status) {
                    Swal.fire({
                        title: `${t('sign_up_title')}`,
                        text: "May be duplicated username or password please try again",
                        icon: "error"
                    });
                }
                else {
                    auth.login(username)
                    navigate("/", { replace: true })
                }
            })
    }

    return (
        <div className='tw-mt-5'>
            <h5 className='tw-ms-8'>
                {t('new_client')}
                <FontAwesomeIcon icon={faUserCheck} className='tw-mx-2' />
            </h5>
            <div className="tw-ps-4 tw-shadow-lg tw-bg-white">
                <h6 className='tw-py-5 tw-px-6'>{t('register')}</h6>
                <form onSubmit={handleRegister}>
                    <input type="email" name="user_email" onChange={handleData} className='custom_input placeholder:tw-text-gray-600' placeholder={t("email_placeholder")} />
                    <input type="text" name="username" onChange={handleData} className='custom_input placeholder:tw-text-gray-600' placeholder={t("username_placeholder")} />
                    <input type="password" name="user_password" onChange={handleData} className='custom_input placeholder:tw-text-gray-600' placeholder={t("password_placeholder")} />
                    <input type="password" name="user_c_password" onChange={handleData} className='custom_input placeholder:tw-text-gray-600' placeholder={t("password_c_placeholder")} />
                    <input type="submit" value={t('register')} />
                </form>
            </div>
        </div>
    )
}
