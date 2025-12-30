/* CREATE ACCOUNT */
function signup(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(!name || !email || !password){
    alert("Please fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(u => u.email === email);
  if(exists){
    alert("Account already exists!");
    return;
  }

  users.push({name,email,password});
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  window.location.href = "login.html";
}

/* LOGIN */
function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if(user){
    localStorage.setItem("loggedUser", user.name);
    alert("Welcome " + user.name);
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
}
/* DELETE ACCOUNT */
function deleteAccount(){
  const userName = localStorage.getItem("loggedUser");

  if(!userName){
    alert("No user logged in!");
    return;
  }

  const confirmDelete = confirm(
    "⚠️ Are you sure?\nYour account will be permanently deleted."
  );

  if(!confirmDelete) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // remove logged-in user
  users = users.filter(u => u.name !== userName);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.removeItem("loggedUser");

  alert("Account deleted successfully!");
  window.location.href = "signup.html";
}
/* DELETE ACCOUNT */
function deleteAccount(){
  const userName = localStorage.getItem("loggedUser");

  if(!userName){
    alert("No user logged in!");
    return;
  }

  const confirmDelete = confirm(
    "⚠️ Are you sure?\nYour account will be permanently deleted."
  );

  if(!confirmDelete) return;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // remove logged-in user
  users = users.filter(u => u.name !== userName);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.removeItem("loggedUser");

  alert("Account deleted successfully!");
  window.location.href = "signup.html";
}
function logout(){
  localStorage.removeItem("loggedUser");
  alert("Logged out successfully");
  window.location.href = "login.html";
}
