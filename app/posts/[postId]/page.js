import PostDetails from '@/app/components/postDetails';
import React, { Suspense } from 'react'

async function PostDetailsPage({params}) {
    let postId=params.postId
let loadinJSX=(
    <div>
        <h1>Loading...</h1>
    </div>
)
  return (
    <div>
        <h1>Post Details</h1>
        <Suspense fallback={loadinJSX}>
            <PostDetails postId={postId}/>
        </Suspense>
        
       
    </div>
  )
}

export default PostDetailsPage