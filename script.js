
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

<<<<<<< HEAD

  const navBtn = document.querySelectorAll(".nav-item");
||||||| 7bd76d7 (plaent choice btn  color effects work)
  const navBtn = document.querySelectorAll(".nav-item");
  const planetColors = {
    mercury: "#419EBB",
    venus: "#EDA249",
    earth: "#6D2ED5",
    mars: "#D14C32",
    jupiter: "#D83A34",
    saturn: "#CD5120",
    uranus: "#1EC1A2",
    neptune: "#2D68F0",
  };

  let menuChoice = null;

  let index = 0; //loads Mercury as first planet;
  const desktopScreen = window.matchMedia('(min-width:1300px)');

  const mobileScreen = window.matchMedia('max-width: 365px');

  function indexHandler(planetName) {
    index = planetInfo.findIndex(
      (x) => x.name.toLowerCase() === `${planetName.textContent}`
    );
    return index;
  }

  function attributesHandler(index) {
    const attributesList = ["rotation", "revolution", "radius", "temperature"];

    for (let i = 0; i < attributeQuantities.length; i++) {
      attributeQuantities[i].textContent =
        planetInfo[index][`${attributesList[i]}`];
    }
  }

  function surfaceImgToggle(index, menuChoice) {
    if (menuChoice === "surface") {
      planetSurfaceImg.style.visibility = "visible";
      planetImg.src = planetInfo[index].images.overview;
    } else {
      planetSurfaceImg.style.visibility = "hidden";
      planetImg.src = planetInfo[index].images[menuChoice];
    }
  }

  function pageBuilder(index, menuChoice) {
    if (menuChoice === null) {
      menuChoice = "overview";
    }

    planetSurfaceImg.src = planetInfo[index].images.surface;

    text.textContent = planetInfo[index][menuChoice].content;
    sourceLink.setAttribute("href", planetInfo[index][menuChoice].source);

    surfaceImgToggle(index, menuChoice);
  }
=======
>>>>>>> parent of 7bd76d7 (plaent choice btn  color effects work)

<<<<<<< HEAD
  navBtn.forEach((btn)=>{btn.addEventListener("click",function(){
||||||| 7bd76d7 (plaent choice btn  color effects work)
  navBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      planetName.textContent = btn.textContent;
      index = indexHandler(planetName);
      attributesHandler(index);
=======
  const navBtn = document.querySelectorAll(".nav-item");
>>>>>>> parent of 7bd76d7 (plaent choice btn  color effects work)

<<<<<<< HEAD
    planetName.textContent = btn.textContent;
      index = planetInfo.findIndex(
        (x) => x.name.toLowerCase() === `${planetName.textContent}`
      );
||||||| 7bd76d7 (plaent choice btn  color effects work)
      menuChoice = null;
=======
  navBtn.forEach((btn)=>{btn.addEventListener("click",function(){
>>>>>>> parent of 7bd76d7 (plaent choice btn  color effects work)

<<<<<<< HEAD
      planetImg.src = planetInfo[index].images.overview;
||||||| 7bd76d7 (plaent choice btn  color effects work)
      pageBuilder(index, menuChoice);
=======
    planetName.textContent = btn.textContent;
      index = planetInfo.findIndex(
        (x) => x.name.toLowerCase() === `${planetName.textContent}`
      );
>>>>>>> parent of 7bd76d7 (plaent choice btn  color effects work)

<<<<<<< HEAD
      attributeQuantities[0].textContent = planetInfo[index].rotation;
      attributeQuantities[1].textContent = planetInfo[index].revolution;
      attributeQuantities[2].textContent = planetInfo[index].radius;
      attributeQuantities[3].textContent = planetInfo[index].temperature;
      text.textContent = planetInfo[index].overview.content;
||||||| 7bd76d7 (plaent choice btn  color effects work)
      planetMenu.forEach((btn) => {
        btn.style.backgroundColor = "transparent";
      });
=======
      planetImg.src = planetInfo[index].images.overview;
>>>>>>> parent of 7bd76d7 (plaent choice btn  color effects work)

<<<<<<< HEAD
      sourceLink.setAttribute("href", planetInfo[index].overview.source)
      planetSurfaceImg.style.visibility = "hidden";
  
  
  
  })})
||||||| 7bd76d7 (plaent choice btn  color effects work)
      navBtn.forEach((btn) => {
        btn.style.border = "none";
      });
      
=======
      attributeQuantities[0].textContent = planetInfo[index].rotation;
      attributeQuantities[1].textContent = planetInfo[index].revolution;
      attributeQuantities[2].textContent = planetInfo[index].radius;
      attributeQuantities[3].textContent = planetInfo[index].temperature;
      text.textContent = planetInfo[index].overview.content;
>>>>>>> parent of 7bd76d7 (plaent choice btn  color effects work)

<<<<<<< HEAD
||||||| 7bd76d7 (plaent choice btn  color effects work)
      if(desktopScreen.matches){
 
      btn.style.borderTop = ` thick solid ${
        planetColors[planetName.textContent]
      }`;
=======
      sourceLink.setAttribute("href", planetInfo[index].overview.source)
      planetSurfaceImg.style.visibility = "hidden";
  
  
  
  })})
>>>>>>> parent of 7bd76d7 (plaent choice btn  color effects work)

<<<<<<< HEAD
||||||| 7bd76d7 (plaent choice btn  color effects work)
    }

      planetSurfaceImg.style.visibility = "hidden";
    });
  });
=======

>>>>>>> parent of 7bd76d7 (plaent choice btn  color effects work)

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
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
||||||| 81f72e5 (planet choice btn  color effects work)
<<<<<<< HEAD
=======


// small change
>>>>>>> planetchoiceeffects
=======
>>>>>>> parent of 81f72e5 (planet choice btn  color effects work)
||||||| 81f72e5 (planet choice btn  color effects work)
<<<<<<< HEAD
=======


<<<<<<< HEAD
// small change
>>>>>>> planetchoiceeffects
=======
>>>>>>> parent of 81f72e5 (planet choice btn  color effects work)
||||||| a6dc3b2 (planet choice btn  color effects work)
// small change
=======
>>>>>>> parent of a6dc3b2 (planet choice btn  color effects work)
||||||| a6dc3b2 (planet choice btn  color effects work)
// small change
=======
>>>>>>> parent of a6dc3b2 (planet choice btn  color effects work)
||||||| a6dc3b2 (planet choice btn  color effects work)
// small change
=======
>>>>>>> parent of a6dc3b2 (planet choice btn  color effects work)
||||||| 7bd76d7 (plaent choice btn  color effects work)
=======


>>>>>>> parent of 7bd76d7 (plaent choice btn  color effects work)
