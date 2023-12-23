import { useState } from "react"
import { useSelector } from "react-redux"

export default function Cart() {

    // const countState = useSelector(state => state.count)

    // let [username, setUsername] = useState("Senior")
    let username = "Senior"

    let handleUsername = () => {
        username = "Mohamed";
        console.log(username)
    }


    return (
        <div>
            <h2>Cart</h2>
            <h3>{username}</h3>
            <button className="btn btn-primary" onClick={handleUsername}>Change</button>
            {/* {countState} */}
        </div>
    )
}
