const getPost = async (id: number) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  // throw new Error("This is an error for post")

  return data.json();
};

export default getPost;
