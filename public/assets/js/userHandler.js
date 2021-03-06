const handleLogin = async (event) => {
  event.preventDefault();

  const loginToast = $("#loginToast");
  const showLoginToast = new bootstrap.Toast(loginToast);

  const email = $("#email").val();
  const password = $("#password").val();

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

  if (response.status !== 200) {
    showLoginToast.show();
  } else {
    window.location.replace("/dashboard");
  }
};

const handleLogout = async (event) => {
  event.preventDefault();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch("/auth/logout", options);

  if (response.status !== 200) {
    console.log("FAILED TO LOG OUT");
  } else {
    window.location.replace("/login");
  }
};

const handleSignup = async (event) => {
  event.preventDefault();

  const signupToast = $("#signupToast");
  const showSignupToast = new bootstrap.Toast(signupToast);

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
    showSignupToast.show();
  } else {
    window.location.replace("/dashboard");
  }
};

$("#loginForm").submit(handleLogin);
$("#logoutButton").click(handleLogout);
$("#signupForm").submit(handleSignup);
