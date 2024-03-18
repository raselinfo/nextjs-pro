const getAllPost = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10,
    },
  });
  const posts = data.json();

  return posts;
};

export default getAllPost;
