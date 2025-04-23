function saveFeedback() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("feedback").value.trim();
  if (!name || !message) return;

  const entry = `${name}: ${message}`;
  let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbacks.push(entry);
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  displayFeedback();
}

function displayFeedback() {
  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  const list = document.getElementById("feedbackList");
  list.innerHTML = "";
  feedbacks.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

window.onload = displayFeedback;
