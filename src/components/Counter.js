import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux/actions/counter'

function Counter() {
    
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h2>
                The current count is : {count}
            </h2>
            <button onClick={() => dispatch(increment())}>
                Increment count
            </button>
        </div>
    )

}

export default Counter
