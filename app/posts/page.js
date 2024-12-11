import Link from "next/link";

async function PostPage() {
   
  let res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{
    //ssr

    //cache:'no-store' 

    //isr
    next:{
        revalidate:60,
    }
});
  let data = await res.json();


  let postsJSX=data.map((post)=>{
    return(
      <Link href={`/posts/${post.id}`}>
      <div className="ggg">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </Link>
    )

  })
  return (
    <div>
    {/* <h1>{data.title}</h1> */}
    {/* <Todo/> */}

    {/* posts */}
    <div>
    {postsJSX}
    </div>
 


  </div>
  );
}

export default PostPage;
