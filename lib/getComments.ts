const getComments = async (postId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    {
      next: {
        revalidate: 10, // revalidate every 10 seconds
      },

      // cache: "no-cache",
    }
  );
  const comments = await response.json();
  return comments;
};

export default getComments;
