import axios from "axios";
import { useState } from "react";
import BASE_URL from "../../BASE_URL";
import Comments from "../../components/Comments";
import CreateComment from "../../components/CreateComment";
import Navbar from "../../components/Navbar";
import SinglePost from "../../components/Post";

const PostPage = ({ post, comments }) => {

    const [commentsSate, setCommentsState] = useState(comments)

    const [showCreateComment, setShowCreateComment] = useState(false)

    return (
        <div>
            <Navbar />
            
            <SinglePost post={post} />
           {
            (!showCreateComment) ? ( <button onClick={()=>{setShowCreateComment(true)}} className="px-2 py-2 mx-14  bg-teal-700 text-white ">
            Add Comment
        </button>) : (<span></span>)
           }
            {
                (showCreateComment) ? (<CreateComment post_id={post._id} newComment={(com) => {
                    setCommentsState([com, ...commentsSate])
                }} />) : (<div></div>)
            }

            <Comments comments={commentsSate} />
        </div>
    )

}


export async function getStaticPaths() {
    const resp = await axios.get(BASE_URL + '/post');
    const posts = resp.data.posts
    return {
        paths: posts.map((post) => {
            return {
                params: {
                    id: `${post._id}`
                }
            }
        }),
        fallback: false, // can also be true or 'blocking'
    }
}


export async function getStaticProps(context) {
    const resp = await axios.get(BASE_URL + '/post/' + context.params.id)


    return {
        props: { post: resp.data.post, comments: resp.data.comments },
    }
}


export default PostPage;