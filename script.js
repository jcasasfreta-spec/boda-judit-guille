const point = document.getElementById("barcelonaPoint");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

point.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {

  if(e.target === popup){
    popup.style.display = "none";
  }

});

const weddingDate = new Date("July 17, 2027 18:00:00").getTime();

function updateCountdown(){

  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();

setInterval(updateCountdown,1000);