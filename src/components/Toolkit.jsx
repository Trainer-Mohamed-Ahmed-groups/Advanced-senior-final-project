import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../redux_toolkit/features/authSlice.js"

export default function Toolkit() {

    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.auth.isLogged)

    console.log(isLogged)
    return (
        <div>
            <h2>Toolkit</h2>
            {
                isLogged ?
                    <>
                        <h2>Hello user</h2>
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    </>
                    :
                    <>
                        <h2>Please login</h2>
                        <button onClick={() => dispatch(login())}>Login</button>
                    </>
            }
        </div>
    )
}
