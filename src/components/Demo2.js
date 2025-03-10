import { useCallback, useRef, useState } from "react";
import DemoButton from "./DemoButton";

const Demo2 = () => {
    
    const [y, setY] = useState(0)
    let x = 0;
    const z = useRef(0)
    console.log(z)

    // const handleClick = () => {
    //     console.log("Demo button Clicked")
    // }

    const handleClick = useCallback(() => {
        console.log("Demo button Clicked")
    }, [y])
    
    return (
        <div className="p-4 border border-black w-96">
            <h1 className="font-bold text-2xl">Let X = {x}</h1>
            <button className="p-2 bg-red-600" onClick={() => {
                console.log("X=", x)
                return x++;
            }}>Add X</button>
            <hr className="my-3" />
            <h1 className="font-bold text-2xl">State Y = {y}</h1>
            <button className="p-2 bg-red-600" onClick={() => {
                console.log("Y=", y)
                setY(y + 1)
            }}>Add Y</button>
            <hr className="my-3" />
            <h1 className="font-bold text-2xl">Ref Z = {z.current}</h1>
            <button className="p-2 bg-red-600" onClick={() => {
                console.log("Z=", z.current)
                return z.current++
                
            }}>Add Z</button>
            <hr className="my-3" />
            <h1 className="font-bold text-2xl">useCallback</h1>
            <DemoButton handleClick={handleClick} />
        </div>
    )
}

export default Demo2;