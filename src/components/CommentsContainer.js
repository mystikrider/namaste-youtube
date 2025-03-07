import Comment from "./Comment";

const CommentsContainer = () => {

const commentsData = [
    {
        name: "Yash",
        text: "Sample comment",
        replies: [
            {
                name: "111",
                text: "Sample comment",
                replies: [
                    {
                        name: "122",
                        text: "Sample comment",
                        replies: [
                            {
                                name: "133",
                                text: "Sample comment",
                                replies: [
                                    {
                                        name: "111",
                                        text: "Sample comment",
                                        replies: [
                                            {
                                                name: "122",
                                                text: "Sample comment",
                                                replies: [
                                                    {
                                                        name: "133",
                                                        text: "Sample comment",
                                                        replies: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        name: "111",
                                        text: "Sample comment",
                                        replies: [
                                            {
                                                name: "122",
                                                text: "Sample comment",
                                                replies: [
                                                    {
                                                        name: "133",
                                                        text: "Sample comment",
                                                        replies: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        name: "111",
                                        text: "Sample comment",
                                        replies: [
                                            {
                                                name: "122",
                                                text: "Sample comment",
                                                replies: [
                                                    {
                                                        name: "133",
                                                        text: "Sample comment",
                                                        replies: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "111",
                text: "Sample comment",
                replies: [
                    {
                        name: "122",
                        text: "Sample comment",
                        replies: [
                            {
                                name: "133",
                                text: "Sample comment",
                                replies: []
                            }
                        ]
                    }
                ]
            },
            {
                name: "111",
                text: "Sample comment",
                replies: [
                    {
                        name: "122",
                        text: "Sample comment",
                        replies: [
                            {
                                name: "133",
                                text: "Sample comment",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Renjith",
        text: "Sample comment",
        replies: [
            {
                name: "211",
                text: "Sample comment",
                replies: [
                    {
                        name: "222",
                        text: "Sample comment",
                        replies: [
                            {
                                name: "233",
                                text: "Sample comment",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Sethu",
        text: "Sample comment",
        replies: [
            {
                name: "311",
                text: "Sample comment",
                replies: [
                    {
                        name: "322",
                        text: "Sample comment",
                        replies: [
                            {
                                name: "333",
                                text: "Sample comment",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Pyotr",
        text: "Sample comment",
        replies: [
            {
                name: "411",
                text: "Sample comment",
                replies: [
                    {
                        name: "422",
                        text: "Sample comment",
                        replies: [
                            {
                                name: "433",
                                text: "Sample comment",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const CommentList = ({comments}) => {
    return comments.map((comment, index) => <div key={index}>
        <Comment data={comment} />
        <div className="pl-2 ml-2 border-l border-l-[#ddd]">
            <CommentList comments={comment.replies} />
        </div>
        </div>)
}



    return (
        <div className="p-3 m-3">
            <h1 className="font-bold text-2xl">Comments</h1>
            <CommentList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;