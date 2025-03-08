const ChatMessage = ({ name, message}) => {
    return (
        <div className="flex m-3">
            <img alt="user" className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-a-TsxH9PktJwB8farsqn2EOlcsO9ODhp_Q&s" />
            <span className="font-bold mx-2">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage;