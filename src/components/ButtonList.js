import Button from "./Button";

const ButtonList = () => {
    const btnList = ["All", "Sports", "Music", "Live", "Games"]
    return (
        <div className="flex p-2">
            {btnList?.map((name) => <Button key={name} name={name} />)}
        </div>
    )
}

export default ButtonList;