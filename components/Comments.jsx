const Comments = ({ comments }) => {
    return (
        <div className="mx-14">
            Place for the comments

            {
                comments.map((comment) => {
                        return (
                            <div key={comment._id}>
                                    { 
                                        comment.body
                                    }
                                </div>
                        )
                })
            }
        </div>
    )
}

export default Comments;