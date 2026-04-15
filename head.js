const targetDate = new Date("MAY 1, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);



function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errMsg   = document.getElementById("errMsg");
  const btn      = document.getElementById("loginBtn");

  errMsg.classList.remove("visible");

  if (!username) {
    showError("Please enter your username.");
    return;
  }

  if (!password) {
    showError("Please enter your password.");
    return;
  }

  btn.disabled = true;
  btn.textContent = "Signing in...";

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = "Sign in";
    alert("Signed in as: " + username);
  }, 1200);
}

function showError(msg) {
  const errMsg = document.getElementById("errMsg");
  errMsg.textContent = msg;
  errMsg.classList.add("visible");
}

document.getElementById("password").addEventListener("keydown", function(e) {
  if (e.key === "Enter") handleLogin( window.location.href = "head.html";
}, 1200););
});

