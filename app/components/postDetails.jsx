import React from 'react'


async function PostDetails({postId}) {
   
    await new Promise((res)=>{
        setTimeout(()=>{
        res()

        },2000)
    })

 

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}` ,{
        //ssr

        //cache:'no-store' 

        //isr
        next:{
            revalidate:60,
        }
    });
      let dataPost = await res.json();
return(
    <div>
        <div className="ggg">
            <h1>{dataPost.title}</h1>
            <hr />
            <p>{dataPost.body}</p>
        </div>
    </div>
)
}

export default PostDetails