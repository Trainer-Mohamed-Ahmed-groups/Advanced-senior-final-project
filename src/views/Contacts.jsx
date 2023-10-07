import { useSelector } from "react-redux"
export default function Contacts() {
    const cart = useSelector(state => state.count)
    return (
        <div>
            <button className="senior-btn">OK</button>
            {cart}
        </div>
    )
}
