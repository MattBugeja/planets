
// -----JSON Request-------
let requestURl = "data.json";
let request = new XMLHttpRequest();
request.open("GET", requestURl);
request.responseType = "json";
request.send();
request.onload = function () {
  let planetInfo = request.response;

  // ------End JSON request------

  const planetMenu = document.querySelectorAll(".js-planet-menu__btn");

  let planetName = document.querySelector(".js-planet-name");
  const text = document.querySelector(".js-text");
  const planetImg = document.querySelector(".js-planet-img");
  const planetSurfaceImg = document.querySelector(".js-planet__surface");
  const sourceLink = document.querySelector(".js-source");
  const homeMenu = document.querySelector(".home-menu");
  const wrapper = document.querySelector(".wrapper");
  let index = 0;

  const attributeQuantities = document.querySelectorAll(
    ".attributes__quantity"
  );


  const navBtn = document.querySelectorAll(".nav-item");

  navBtn.forEach((btn)=>{btn.addEventListener("click",function(){

    planetName.textContent = btn.textContent;
      index = planetInfo.findIndex(
        (x) => x.name.toLowerCase() === `${planetName.textContent}`
      );

      planetImg.src = planetInfo[index].images.overview;

      attributeQuantities[0].textContent = planetInfo[index].rotation;
      attributeQuantities[1].textContent = planetInfo[index].revolution;
      attributeQuantities[2].textContent = planetInfo[index].radius;
      attributeQuantities[3].textContent = planetInfo[index].temperature;
      text.textContent = planetInfo[index].overview.content;

      sourceLink.setAttribute("href", planetInfo[index].overview.source)
      planetSurfaceImg.style.visibility = "hidden";
  
  
  
  })})



  planetMenu.forEach((btn) =>
    btn.addEventListener("click", function () {
      const menuChoice = this.dataset.type;
      planetSurfaceImg.src = planetInfo[index].images.surface;
  
      text.textContent = planetInfo[index][menuChoice].content;
           sourceLink.setAttribute("href", planetInfo[index][menuChoice].source);

      if (menuChoice === "surface") {
        planetSurfaceImg.style.visibility = "visible";
        planetImg.src = planetInfo[index].images.overview;
      } else {
        planetSurfaceImg.style.visibility = "hidden";
        planetImg.src = planetInfo[index].images[menuChoice];
      }

         })
  );
};


// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
<<<<<<< HEAD


||||||| 81f72e5 (planet choice btn  color effects work)
<<<<<<< HEAD
=======


// small change
>>>>>>> planetchoiceeffects
=======
>>>>>>> parent of 81f72e5 (planet choice btn  color effects work)
