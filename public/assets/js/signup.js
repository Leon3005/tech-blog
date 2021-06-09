const handleSignup = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  };

  const response = await fetch("/auth/signup", options);

  console.log(response);

  if (response.status !== 201) {
    console.log("FAILED TO CREATE USER");
  } else {
    window.location.replace("/dashboard");
  }
};

$("#signupForm").submit(handleSignup);
