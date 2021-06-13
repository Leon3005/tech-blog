const createBlogPost = async (event) => {
  event.preventDefault();

  const title = $("#postTitle").val();
  const description = $("#postDescription").val();

  if (!title || !description) {
    console.log("You must complete all fields");
    return;
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      description,
    }),
  };

  const response = await fetch("/api/blogposts", options);

  if (response.status !== 201) {
    console.log("FAILED TO CREATE POST");
  } else {
    window.location.replace("/dashboard");
  }
};

const deleteBlogPost = async (event) => {
  const id = event.currentTarget.id;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      id,
    }),
  };

  const response = await fetch(`/api/blogposts/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED TO UPDATE POST");
  } else {
    window.location.replace("/dashboard");
  }
};

const viewBlogPost = async (event) => {
  const id = event.currentTarget.id;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    params: JSON.stringify({
      id,
    }),
  };

  const response = await fetch(`/api/blogposts/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED TO GET POST");
  } else {
    window.location.replace(`/blogposts/${id}`);
  }
};

// const handleCommentSubmit = () => {
//   // POST request with comment message
//   // /api/posts/{postId}/comments
//   // on success window location to /posts/{postId}
// };

$("[name='delete-btn']").click(deleteBlogPost);
$("#newPostForm").submit(createBlogPost);
$(".viewBlogPost").click(viewBlogPost);
