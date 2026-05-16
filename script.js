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

const flightPath = document.getElementById("flightPath");

function updatePath(){

  if(window.innerWidth < 768){

    flightPath.setAttribute(
      "d",
      "M220 420 C 260 260, 340 120, 470 140"
    );

  }else{

    flightPath.setAttribute(
      "d",
      "M290 445 C 340 180, 420 20, 490 140"
    );

  }

}

updatePath();

window.addEventListener("resize", updatePath);
