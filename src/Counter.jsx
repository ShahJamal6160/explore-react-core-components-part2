import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    
    const hendleAdd =()=>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const hendlReduce =()=>{
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={hendleAdd}>Add</button>
            <button onClick={hendlReduce}>Reduce</button>
        </div>
    )
}