import { useCallback, useMemo, useState } from "react";
import { nthPrime } from "../utils/helper";

const Demo = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [newNum, setNewNum] = useState(0);
    const [count, setCount] = useState(0);
    console.log("re rendering");

// const prime = () => {
//     console.log("Prime changed")
//     return findPrimes(newNum)
    
// };

const prime = useMemo(() => {
    console.log("Prime changed")
    return nthPrime(newNum)
}, [newNum])

// const Button = ({onClick}) => {
//     console.log("Button Rendered")
//     return <button className="p-2 bg-red-300" onClick={onClick}>Add Count</button>
// }

//const handleCount = useCallback(() => setCount(count + 1), [count])






    return (
        <div className={"p-4 border border-black w-96 " + (isDarkTheme && "bg-black")}>

            <p>{prime}</p>
            <p>Count: {count}</p>
            <p><button className="p-2 bg-green-300" onClick={() => setCount(count + 1)}>Add COunt</button></p>
            
            <p className="my-4"><button className="p-2 bg-green-300" onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button></p>
            <p className=""><input className="border border-black" type="number" value={newNum} onChange={(e) => setNewNum(e.target.value)} /></p>
        </div>
    )
}

export default Demo;