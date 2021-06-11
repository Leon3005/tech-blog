const onClick = async (event) => {
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

$("[name='delete-btn']").click(onClick);
