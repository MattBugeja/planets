let requestURl = "data.json";

let request = new XMLHttpRequest();

request.open("GET", requestURl);
request.responseType = "json";
request.send();
request.onload = function () {
  let planetInfo = request.response;

  const planetMenu = document.querySelectorAll(".js-planet-menu__btn");

  let planetName = document.querySelector(".js-planet-name");
  const text = document.querySelector(".js-text");
  const planetImg = document.querySelector(".js-planet-img");
  const planetSurfaceImg = document.querySelector(".js-planet__surface");
  const sourceLink = document.querySelector(".js-source");
  const homeMenu = document.querySelector(".home-menu");
  const wrapper = document.querySelector(".wrapper");
  let index;

  const attributeQuantities = document.querySelectorAll(
    ".attributes__quantity"
  );

  const menu_btn = document.querySelectorAll(".home__btn");

  menu_btn.forEach((btn) =>
    btn.addEventListener("click", () => {
      homeMenu.style.display = "none";
      wrapper.style.display = "block";
      console;
      planetName.textContent = btn.textContent;
      index = planetInfo.findIndex(
        (x) => x.name.toLowerCase() === `${planetName.textContent}`
      );

      planetImg.src = planetInfo[index].images.overview;

      attributeQuantities[0].textContent = planetInfo[index].rotation;
      attributeQuantities[1].textContent = planetInfo[index].revolution;
      attributeQuantities[2].textContent = planetInfo[index].radius;
      attributeQuantities[3].textContent = planetInfo[index].temperature;

      sourceLink.setAttribute("href", planetInfo[index].overview.source);
    })
  );

  planetMenu.forEach((btn) =>
    btn.addEventListener("click", function () {
      const menuChoice = btn.textContent;

      console.log(index);
      console.log(planetName);
      text.textContent = planetInfo[index][menuChoice].content;
      planetSurfaceImg.src = planetInfo[index].images.surface;

      sourceLink.setAttribute("href", planetInfo[index][menuChoice].source);

      if (menuChoice === "surface") {
        planetSurfaceImg.style.visibility = "visible";
        planetImg.src = planetInfo[index].images.overview;
      } else {
        planetSurfaceImg.style.visibility = "hidden";
        planetImg.src = planetInfo[index].images[menuChoice];
      }

      // planetImg.src = planetInfo[index].images[menuChoice];
      console.log(planetInfo);

      console.log(menuChoice);
    })
  );
};
