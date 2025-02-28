import { useState } from "react";
import "./Counter.css";
function Counter()
{
    const[count,setCount]=useState(0);
    return(
        <div className="counter-container">
            <h1>Counter : {count}</h1>
            <button className="increment" onClick={()=>
                setCount(count+1)}>Increament</button>

<button className="decrement" onClick={()=>
                setCount(count-1)}style={{marginLeft:"10px"}}>Decreament</button>
<button className="double" onClick={()=>
                setCount(count*2)}style={{marginLeft:"10px"}}>Double</button>


<button className="reset" onClick={()=>
                setCount(0)}>
              Reset
                </button>
        </div>
    );
}

export default Counter;