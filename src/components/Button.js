const Button = ({name}) => {
    return (
        <button className="bg-gray-200 hover:bg-black hover:text-white p-2 m-2 rounded-md cursor-pointer">{name}</button>
    )
}

export default Button;