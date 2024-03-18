import React from "react";

const Comments = async ({ commentsPromise }: { commentsPromise: any }) => {
  const comments = await commentsPromise;
  return (
    <>
      {comments.map((comment: any) => (
        <div
          className="bg-green-950 border-green-400 border rounded-md p-5 m-5"
          key={comment.id}
        >
          <h3>{comment.name}</h3>
          <h3>{comment.email}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
};

export default Comments;
