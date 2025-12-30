let selectedRating = 0;
const stars = document.querySelectorAll(".star");
const msg = document.getElementById("msg");
const reviewList = document.getElementById("reviewList");

// Load saved ratings
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("ratings")) || [];
  saved.forEach((data, index) => showReview(data, index));
};

// Star click
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    selectedRating = index + 1;
    stars.forEach(s => s.classList.remove("active"));
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("active");
    }
  });
});

// Save rating
function saveRating() {
  const name = document.getElementById("name").value.trim();

  if (name === "" || selectedRating === 0) {
    msg.textContent = "Please enter name and select rating!";
    msg.style.color = "red";
    return;
  }

  let ratings = JSON.parse(localStorage.getItem("ratings")) || [];

  const ratingData = {
    name: name,
    rating: selectedRating
  };

  ratings.push(ratingData);
  localStorage.setItem("ratings", JSON.stringify(ratings));

  refreshList();

  msg.textContent = "Rating saved successfully!";
  msg.style.color = "green";

  document.getElementById("name").value = "";
  stars.forEach(s => s.classList.remove("active"));
  selectedRating = 0;
}

// Show review with delete
function showReview(data, index) {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${data.name}</strong> rated ${data.rating} ★
    <button onclick="deleteRating(${index})" class="delete-btn">❌</button>
  `;
  reviewList.appendChild(li);
}

// Refresh list
function refreshList() {
  reviewList.innerHTML = "";
  const ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  ratings.forEach((data, index) => showReview(data, index));
}

// Delete rating
function deleteRating(index) {
  let ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  ratings.splice(index, 1);
  localStorage.setItem("ratings", JSON.stringify(ratings));
  refreshList();
}