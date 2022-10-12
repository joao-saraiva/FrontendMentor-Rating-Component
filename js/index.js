const ratingElements = document.querySelectorAll("p.rating_element");
const linkToCompletedRating = document.querySelector("a.submit_link");

ratingElements.forEach((ratingElement) => {
  ratingElement.addEventListener("click", function () {
    resetRatingElements();
    applyNewParamToCompletedRating(ratingElement.textContent);
    ratingElement.style.backgroundColor = "hsl(217, 12%, 63%)";
    ratingElement.style.color = "white";
  });
});

function resetRatingElements() {
  ratingElements.forEach((ratingElement) => {
    ratingElement.style.backgroundColor = null;
    ratingElement.style.color = null;
  });
}

function applyNewParamToCompletedRating(param) {
  linkToCompletedRating.setAttribute(
    "href",
    `http://127.0.0.1:5500/completed-rating.html?user_rate=${param}`
  );
}
