import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREAMENT, DECREAMENT } from "../redux/actions/types"
export default function Blog() {

    // const [counter, setCounter] = useState(0)
    const cartState = useSelector(state => state.count)
    const dispatch = useDispatch()

    console.log(cartState)

    let increaseCounter = () => {
        // setCounter(counter + 1)
        dispatch({ type: INCREAMENT })
    }

    let decreaseCounter = () => {
        // setCounter(counter - 1)
        dispatch({ type: DECREAMENT })
    }

    return (
        <div className="bg-emerald-700 text-center">
            <h2 className="text-xl text-zinc-50">{cartState}</h2>
            <button onClick={increaseCounter} className="h-6 w-10 bg-slate-600 m-5">+</button>
            <button onClick={decreaseCounter} className="h-6 w-10 bg-slate-600 m-5">-</button>
        </div>
    )
}
