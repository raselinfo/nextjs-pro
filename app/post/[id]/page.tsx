import React, { Suspense } from "react";
import getPost from "@/lib/getPost";
import getComments from "@/lib/getComments";
import Comments from "@/components/Comments";
import getAllPost from "@/lib/getAllPost";
type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = params;
  const postId = parseInt(id);
  const post = await getPost(postId);
  return {
    title: post.title,
    description: post.body,
  };
};

const page = async ({ params }: Props) => {
  const { id } = params;
  const postId = parseInt(id);
  const postPromise = getPost(postId);
  const commentsPromise = getComments(postId);
  // console.log(">>>>>>>>>r", await commentsPromise)
  const post = await postPromise;
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <br />
      <hr />
      <br />
      <h1>Comments</h1>
      <br />
      <hr />
      <Suspense fallback={<div>Comments Loading...</div>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default page;

export const generateStaticParams = async () => {
  const posts = await getAllPost();

  return posts?.map((post: any) => {
    return {
      id: post.id.toString(),
    };
  });
};
