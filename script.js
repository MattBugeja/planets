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
  const attributeQuantities = document.querySelectorAll(
    ".attributes__quantity"
  );

  const navBtn = document.querySelectorAll(".nav-item");

  const planetThemeColors = {
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

  const startingPlanet = {
    mercury: 0,
    venus: 1,
    earth: 2,
    mars: 3,
    jupiter: 4,
    saturn: 5,
    uranus: 6,
    neptune: 7,
  };

  let index = startingPlanet["earth"]; //loads first planet;

  console.log(index);

  const desktopScreen = window.matchMedia("(min-width:1300px)");

  const mobileScreen = window.matchMedia("(max-width:500px)");

  function indexHandler(planetName) {
    index = planetInfo.findIndex(
      (x) => x.name.toLowerCase() === `${planetName.textContent}`
    );
    return index;
  }

  function attributesBuilder(index) {
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

    attributesBuilder(index);

    surfaceImgToggle(index, menuChoice);
  }

  navBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      planetName.textContent = btn.textContent;

      index = indexHandler(planetName);
     
      menuChoice = null;

      pageBuilder(index, menuChoice);

      planetMenu.forEach((btn) => {
        btn.style.backgroundColor = "transparent";
        btn.style.border = "none";
      });

      navBtn.forEach((btn) => {
        btn.style.border = "none";
      });

      if (desktopScreen.matches) {
        btn.style.borderTop = ` thick solid ${
          planetThemeColors[planetName.textContent]
        }`;
      }

      planetSurfaceImg.style.visibility = "hidden";
    });
  });

  planetMenu.forEach((btn) =>
    btn.addEventListener("click", function () {
      menuChoice = this.dataset.type;
      pageBuilder(index, menuChoice);

      planetMenu.forEach((btn) => {
        btn.style.backgroundColor = "transparent";
      });

      if (mobileScreen.matches) {
        planetMenu.forEach((btn) => {
          btn.style.border = 0;
        });

        btn.style.borderBottom = ` thick solid ${
          planetThemeColors[planetName.textContent]
        }`;
      } else {
        btn.style.backgroundColor = `${
          planetThemeColors[planetName.textContent]
        }`;
      }
    })
  );

  planetName.textContent = planetInfo[index].name;

  pageBuilder(index, menuChoice);
};

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const body = document.querySelector("body");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle(".fixed-position");
}

hamburger.addEventListener("click", mobileMenu);

navItem.forEach((item) => item.addEventListener("click", mobileMenu));
