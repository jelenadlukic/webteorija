(() => {
  const loginForm = document.getElementById("loginForm");
  const usernameEl = document.getElementById("username");
  const passwordEl = document.getElementById("password");
  const loginError = document.getElementById("loginError");

  const authSection = document.getElementById("auth");
  const appMain = document.getElementById("app");
  const logoutBtn = document.getElementById("logoutBtn");

  const links = [
    document.getElementById("goWebDizajn"),
    document.getElementById("goWebProg"),
    document.getElementById("goBaze"),
  ].filter(Boolean);

  function setLocked(locked) {
    links.forEach((a) => {
      if (!a) return;

      a.dataset.locked = locked ? "1" : "0";
      a.style.opacity = locked ? "0.55" : "1";
      a.style.pointerEvents = locked ? "none" : "auto";
      a.style.cursor = locked ? "not-allowed" : "pointer";
      a.setAttribute("aria-disabled", locked ? "true" : "false");
    });
  }

  function showApp() {
    authSection.hidden = true;
    appMain.hidden = false;
    logoutBtn.hidden = false;
    setLocked(false);
  }

  function showAuth() {
    authSection.hidden = false;
    appMain.hidden = true;
    logoutBtn.hidden = true;
    setLocked(true);
  }

  // početno stanje: zaključano dok se ne unese admin/admin
  showAuth();
  setLocked(true);

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // ovo sprečava refresh

    const u = (usernameEl.value || "").trim();
    const p = (passwordEl.value || "").trim();

    if (u === "admin" && p === "admin") {
      loginError.textContent = "";
      showApp();
    } else {
      loginError.textContent = "Pogrešno korisničko ime ili šifra.";
      passwordEl.value = "";
      passwordEl.focus();
    }
  });

  logoutBtn.addEventListener("click", () => {
    usernameEl.value = "";
    passwordEl.value = "";
    loginError.textContent = "";
    showAuth();
    usernameEl.focus();
  });
})();