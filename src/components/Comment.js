const Comment = ({data}) => {
    const {name, text} = data;
    return (
        <div className="comment flex bg-gray-100 p-2 m-2">
            <img alt="user" className="h-6 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-a-TsxH9PktJwB8farsqn2EOlcsO9ODhp_Q&s" />
            <div>
                <h3>{name}</h3>
                <h4>{text}</h4>
            </div>
        </div>
    )
}

export default Comment;