// ==========================
// TABS
// ==========================

const loginTab =
document.getElementById("login-tab");

const registerTab =
document.getElementById("register-tab");

const loginForm =
document.getElementById("login-form");

const registerForm =
document.getElementById("register-form");

loginTab.addEventListener("click", () => {

  loginTab.classList.add("active");
  registerTab.classList.remove("active");

  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");

});

registerTab.addEventListener("click", () => {

  registerTab.classList.add("active");
  loginTab.classList.remove("active");

  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");

});


// ==========================
// DATABASE
// ==========================

let clients =
JSON.parse(localStorage.getItem("jloodnaClients"))
|| [];


// ==========================
// REGISTER
// ==========================

registerForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const name =
  document.getElementById("register-name")
  .value.trim();

  const email =
  document.getElementById("register-email")
  .value.trim();

  const phone =
  document.getElementById("register-phone")
  .value.trim();

  const address =
  document.getElementById("register-address")
  .value.trim();

  const password =
  document.getElementById("register-password")
  .value;

  const confirmPassword =
  document.getElementById("confirm-password")
  .value;

  // PASSWORD VALIDATION

  if(password.length < 8){

    alert(
      "Mot de passe minimum 8 caractères."
    );

    return;
  }

  if(password !== confirmPassword){

    alert(
      "Les mots de passe ne correspondent pas."
    );

    return;
  }

  // EMAIL EXIST

  const emailExist =
  clients.find(client =>
    client.email === email
  );

  if(emailExist){

    alert(
      "Cet email existe déjà."
    );

    return;
  }

  // NEW CLIENT

  const newClient = {

    id: Date.now(),

    name:name,

    email:email,

    phone:phone,

    address:address,

    password:btoa(password),

    orders:0,

    totalSpent:0,

    status:"active",

    registerDate:
    new Date().toLocaleDateString()

  };

  clients.push(newClient);

  localStorage.setItem(
    "jloodnaClients",
    JSON.stringify(clients)
  );

  // AUTO LOGIN

  localStorage.setItem(
    "jloodnaUser",
    JSON.stringify(newClient)
  );

  // SUCCESS

  document.getElementById("success-message")
  .style.display = "block";

  registerForm.reset();

  setTimeout(() => {

    window.location.href =
    "index.html";

  }, 2000);

});


// ==========================
// LOGIN
// ==========================

loginForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const email =
  document.getElementById("login-email")
  .value.trim();

  const password =
  document.getElementById("login-password")
  .value;

  const client =
  clients.find(user =>

    user.email === email &&
    user.password === btoa(password)

  );

  if(!client){

    alert(
      "Email ou mot de passe incorrect."
    );

    return;
  }

  // BLOCKED CLIENT

  if(client.status === "blocked"){

    alert(
      "Compte bloqué. Contactez support."
    );

    return;
  }

  // LOGIN

  localStorage.setItem(
    "jloodnaUser",
    JSON.stringify(client)
  );

  alert(
    "Connexion réussie."
  );

  window.location.href =
  "index.html";

});


// ==========================
// SESSION SECURITY
// ==========================

// Auto logout après 24h

const loginTime =
localStorage.getItem("loginTime");

if(loginTime){

  const now = Date.now();

  const hours =
  (now - parseInt(loginTime))
  / 1000 / 60 / 60;

  if(hours >= 24){

    localStorage.removeItem("jloodnaUser");

    localStorage.removeItem("loginTime");

  }

}


// SAVE LOGIN TIME

if(localStorage.getItem("jloodnaUser")){

  localStorage.setItem(
    "loginTime",
    Date.now()
  );

    }
