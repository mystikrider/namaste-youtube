import React from "react";

const DemoButton = React.memo(({handleClick}) => {
    console.log("Demo Button")
    return (
        <button onClick={handleClick} className="bg-gray-200 hover:bg-black hover:text-white p-2 m-2 rounded-md cursor-pointer">Demo Button</button>
    )
})

export default DemoButton;