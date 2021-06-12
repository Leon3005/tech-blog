const handleSignup = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const email = $("#email").val();
  const password = $("#password").val();

  if (!username || !email || !password) {
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
      username,
      email,
      password,
    }),
  };

  const response = await fetch("/auth/signup", options);

  if (response.status !== 201) {
    console.log("FAILED TO CREATE USER");
  } else {
    window.location.replace("/dashboard");
  }
};

$("#signupForm").submit(handleSignup);
