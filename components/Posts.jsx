import { useContext, useEffect, useState } from "react";
import BASE_URL  from '../BASE_URL'
import { useRouter } from 'next/router'

import axios from 'axios'
import SinglePost from "./Post";
import { postsContext } from "../contexts/PostsContextWrapper";

const Posts = () => {
    const router = useRouter()
   
    const [isLoading, setIsLoading] = useState(true)
    const postsContainer = useContext(postsContext)

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async()=>{
            const isSuccesful = await postsContainer.getPosts()
            setIsLoading(false)
    }

   

    return (
        <div className="mt-2 px-12">
            {
                (isLoading) ? (
                    <p>Please wait while the posts are loading</p>
                ) :
                    (
                        <div>
                           {
                            (postsContainer.posts.length === 0)?(<p>No post exits or cannot get posts</p>):
                            (<p>
                                {
                                    postsContainer.posts.map((post)=>{
                                        return <div onClick={()=>{router.push('/post/'+post._id)}}>
                                             <SinglePost post = {post} />
                                        </div>
                                    })
                                }
                            </p>)
                           }
                        </div>
                    )
            }
        </div>
    )
}

export default Posts;