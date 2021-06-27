const createBlogPost = async (event) => {
  event.preventDefault();

  const newPostToast = $("#newPostToast");
  const showNewPostToast = new bootstrap.Toast(newPostToast);
  const title = $("#postTitle").val();
  const description = $("#postDescription").val();

  if (!title || !description) {
    showNewPostToast.show();
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
    showNewPostToast.show();
  } else {
    window.location.replace("/dashboard");
  }
};

const updateBlogPost = async (event) => {
  event.preventDefault();

  const editPostToast = $("#editPostToast");
  const showEditPostToast = new bootstrap.Toast(editPostToast);
  const { id } = event.currentTarget;
  const title = $("#updatedPostTitle").val();
  const description = $("#updatedPostDescription").val();

  if (!title || !description) {
    showEditPostToast.show();
    return;
  }

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      description,
    }),
  };

  const response = await fetch(`/api/blogposts/${id}`, options);

  if (response.status !== 200) {
    showEditPostToast.show();
  } else {
    window.location.replace("/dashboard");
  }
};

const deleteBlogPost = async (event) => {
  const id = event.currentTarget.id;

  const deletePostToast = $("#deletePostToast");
  const showDeletePostToast = new bootstrap.Toast(deletePostToast);

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
    showDeletePostToast.show();
  } else {
    window.location.replace("/dashboard");
  }
};

const viewBlogPost = async (event) => {
  const id = event.currentTarget.id;

  const viewPostToast = $("#viewPostToast");
  const showViewPostToast = new bootstrap.Toast(viewPostToast);

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
    showViewPostToast.show();
  } else {
    window.location.replace(`/blogposts/${id}`);
  }
};

const addComment = async (event) => {
  event.preventDefault();

  const addCommentToast = $("#addCommentToast");
  const showAddCommentToast = new bootstrap.Toast(addCommentToast);
  const { id } = event.currentTarget;
  const message = $("#commentText").val();

  if (!message) {
    showAddCommentToast.show();
    return;
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      message,
    }),
  };

  const response = await fetch(`/api/blogposts/${id}/comments`, options);

  if (response.status !== 201) {
    showAddCommentToast.show();
  } else {
    window.location.replace(`/blogposts/${id}`);
  }
};

$("[name='delete-btn']").click(deleteBlogPost);
$("#newPostForm").submit(createBlogPost);
$(".viewBlogPost").click(viewBlogPost);
$(".newComment").submit(addComment);
$(".update-btn").click(updateBlogPost);
