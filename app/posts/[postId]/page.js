import PostDetails from "@/app/components/postDetails";
import  { Suspense } from "react"; //من اجل عند تحميل الصفحة فقط العناصر التي لم تجهز بعد تقوم بالانتظار اما العناصر الجاهزة تقوم بارسالها مباشرة

async function PostDetailsPage({ params }) {
  console.log(params);

  let postId = params.postId;
  let loadinJSX = (
    <div>
      <h1>wait secound 🤌</h1>
    </div>
  );
  return (
    <div>
      <h1>Post Details</h1>
      <Suspense fallback={loadinJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}

export default PostDetailsPage;
