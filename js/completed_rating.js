const urlParams = new URLSearchParams(window.location.search);
const userRateElement = document.querySelector("span.user_rate");
const userRate = urlParams.get("user_rate");

userRateElement.textContent = userRate;
