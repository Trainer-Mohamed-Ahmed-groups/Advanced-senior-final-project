import { useDispatch, useSelector } from "react-redux"
import { INCREAMENT, DECREAMENT, ADD_BY_AMOUNT } from "../redux/actions/types"
export default function Contacts() {

    const countState = useSelector(state => state.count)
    const dispatch = useDispatch()

    let addOne = () => {
        dispatch({ type: INCREAMENT })
    }
    let AddMore = () => {
        dispatch({ type: ADD_BY_AMOUNT, payload: 6 })
    }


    return (
        <div>
            <h3>{countState}</h3>
            <button className="btn btn-primary" onClick={addOne}>Add</button>
            <button className="btn btn-success" onClick={AddMore}>Add</button>
            {/* {cart} */}
        </div>
    )
}
