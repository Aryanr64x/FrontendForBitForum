const Comments = ({ comments }) => {
    return (
        <div className="mx-14">
            Place for the comments

            {
                comments.map((comment) => {
                        return (
                            <div>
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