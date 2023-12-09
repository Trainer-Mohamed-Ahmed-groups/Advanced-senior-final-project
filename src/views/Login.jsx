import SignUpForm from '../components/SignUpForm';
import LoginForm from "../components/LoginForm";

export default function Login() {

    return (
        <div className="tw-bg-gray-400 tw-min-h-[80vh]">
            <div className='tw-container tw-m-auto tw-grid lg:tw-grid-cols-2 tw-p-10 tw-gap-5'>
                <LoginForm />
                {/* <SignUpForm /> */}
            </div>
        </div>
    )
}
