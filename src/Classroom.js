import { useState } from "react"
import React from 'react'

function Classroom() {
 const [Count, setCount] = useState(0);
    return (
        <div>
            <button onClick={()=> setCount(Count + 1)}>Count {Count}</button>
        </div>
    )
}

export default Classroom
