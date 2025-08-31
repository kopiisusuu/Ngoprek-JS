document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const mulaiBelajarBtn = document.getElementById("mulaiBelajarBtn");

  const authButtons = document.getElementById("auth-buttons");
  const userProfile = document.getElementById("user-profile");
  const usernameDisplay = document.getElementById("usernameDisplay");

  const authModal = document.getElementById("authModal");
  const authTitle = document.getElementById("authTitle");
  const usernameInput = document.getElementById("usernameInput");
  const passwordInput = document.getElementById("passwordInput");
  const authSubmit = document.getElementById("authSubmit");
  const closeModal = document.getElementById("closeModal");

  let currentAction = "login"; // default

  // Cek status login
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    showUserProfile(loggedInUser);
  }

  function showUserProfile(username) {
    authButtons.classList.add("hidden");
    userProfile.classList.remove("hidden");
    usernameDisplay.textContent = `👤 ${username}`;
    mulaiBelajarBtn.href = "materi.html";
    mulaiBelajarBtn.classList.add("hover:bg-blue-100");
  }

  function showAuthModal(action) {
    currentAction = action;
    authTitle.textContent = action === "login" ? "Login" : "Register";
    authModal.classList.remove("hidden");
  }

  loginBtn.addEventListener("click", () => showAuthModal("login"));
  registerBtn.addEventListener("click", () => showAuthModal("register"));
  closeModal.addEventListener("click", () => authModal.classList.add("hidden"));

  authSubmit.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Isi username dan password!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (currentAction === "register") {
      if (users.find(u => u.username === username)) {
        alert("Username sudah terdaftar!");
        return;
      }
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registrasi berhasil! Silakan login.");
      authModal.classList.add("hidden");
    } else {
      const user = users.find(u => u.username === username && u.password === password);
      if (!user) {
        alert("Username atau password salah!");
        return;
      }
      localStorage.setItem("loggedInUser", username);
      showUserProfile(username);
      authModal.classList.add("hidden");
    }
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    authButtons.classList.remove("hidden");
    userProfile.classList.add("hidden");
    mulaiBelajarBtn.href = "#";
    mulaiBelajarBtn.classList.remove("hover:bg-blue-100");
  });

  // Cegah akses "Mulai Belajar" kalau belum login
  mulaiBelajarBtn.addEventListener("click", (e) => {
    if (!localStorage.getItem("loggedInUser")) {
      e.preventDefault();
      alert("Silakan login/register terlebih dahulu!");
    }
  });
});
