import { useSelector,useDispatch } from "react-redux";
import { decrement ,increment, incrementByAmount} from "./counterSlice";


export function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div>
            <div>
                <button
                     onClick={() => dispatch(increment())}>
                        Increment
                </button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <button onClick={() => dispatch(incrementByAmount(100))}>
                    IncrementbyAmount
                </button>
            </div>
        </div>
    )
}
