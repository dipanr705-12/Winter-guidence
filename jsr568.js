const alerts = document.getElementById("alertList");

function addAlert(message) {
  alerts.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = message;
  alerts.appendChild(li);
}

// Simulate live data updates
setInterval(() => {
  const garbage = Math.floor(Math.random() * 100);
  document.getElementById("garbageLevel").textContent = garbage + "%";

  if (garbage > 80) {
    addAlert("🚨 Garbage bin overflow detected!");
  } else {
    addAlert("✅ All systems running smoothly");
  }
}, 3000);

// Random road issue simulation
setTimeout(() => {
  document.getElementById("roadStatus").textContent = "Damage Detected";
  addAlert("🚧 Road damage reported near Sector 5");
}, 10000);

