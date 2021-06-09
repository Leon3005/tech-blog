const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  console.log(email);
  console.log(password);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const response = await fetch("/auth/login", options);

  console.log(response);

  if (response.status !== 200) {
    console.log("FAILED LOGIN");
  } else {
    window.location.replace("/dashboard");
  }
};

$("#loginForm").submit(handleLogin);
