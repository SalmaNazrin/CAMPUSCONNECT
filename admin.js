// ===== ADMIN CREDENTIALS =====
const ADMIN_ID = "admin";
const ADMIN_PASS = "campus123";


let events = [];

function handleLogin() {
  const id   = document.getElementById("adminId").value.trim();
  const pass = document.getElementById("adminPass").value.trim();
  const err  = document.getElementById("loginError");

  if (id === ADMIN_ID && pass === ADMIN_PASS) {
    err.classList.add("hidden");
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("dashboardPage").classList.add("active");
    renderEvents();
  } else {
    err.classList.remove("hidden");
  }
}


document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const loginPage = document.getElementById("loginPage");
    if (loginPage.classList.contains("active")) {
      handleLogin();
    }
  }
});

// ===== LOGOUT =====
function handleLogout() {
  document.getElementById("dashboardPage").classList.remove("active");
  document.getElementById("loginPage").classList.add("active");
  document.getElementById("adminId").value = "";
  document.getElementById("adminPass").value = "";
  document.getElementById("loginError").classList.add("hidden");
}

// ===== ADD EVENT =====
function addEvent() {
  const name  = document.getElementById("evtName").value.trim();
  const date  = document.getElementById("evtDate").value;
  const time  = document.getElementById("evtTime").value;
  const place = document.getElementById("evtPlace").value.trim();
  const msg   = document.getElementById("formSuccess");

  if (!name || !date || !time || !place) {
    alert("Please fill in all fields.");
    return;
  }

  const event = {
    id: Date.now(),
    name,
    date,
    time,
    place
  };

  events.push(event);

  // Clear form
  document.getElementById("evtName").value  = "";
  document.getElementById("evtDate").value  = "";
  document.getElementById("evtTime").value  = "";
  document.getElementById("evtPlace").value = "";

  // Show success
  msg.classList.remove("hidden");
  setTimeout(() => msg.classList.add("hidden"), 2500);

  renderEvents();
}

// ===== RENDER EVENTS =====
function renderEvents() {
  const list = document.getElementById("eventList");

  // if (events.length === 0) {
  //   list.innerHTML = '<p class="empty-msg">No events added yet.</p>';
  //   return;
  // }

  list.innerHTML = events.map(e => {
    const formattedDate = new Date(e.date + "T00:00:00").toLocaleDateString("en-IN", {
      day: "numeric", month: "long", year: "numeric"
    });

    const [h, m]  = e.time.split(":");
    const hour    = parseInt(h);
    const ampm    = hour >= 12 ? "PM" : "AM";
    const hour12  = hour % 12 || 12;
    const formattedTime = `${hour12}:${m} ${ampm}`;

    return `
      <div class="event-item">
        <h4> ${e.name}</h4>
        <p> <strong>Date:</strong> ${formattedDate}</p>
        <p> <strong>Time:</strong> ${formattedTime}</p>
        <p><strong>Venue:</strong> ${e.place}</p>
      </div>
    `;
  }).join("");
}
