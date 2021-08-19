let requestURl = "data.json";

let request = new XMLHttpRequest();

request.open("GET", requestURl);
request.responseType = "json";
request.send();
request.onload = function () {
  let planetInfo = request.response;

  const planetMenu = document.querySelectorAll(".js-planet-menu__btn");

  planetMenu.forEach((btn) =>
    btn.addEventListener("click", function () {
      const menuChoice = btn.textContent;

      const planetName = document.querySelector(".js-planet-name").textContent;
      const text = document.querySelector(".js-text");
      const planetImg = document.querySelector(".js-planet-img");
      const planetSurfaceImg = document.querySelector(".js-planet__surface");
      const sourceLink = document.querySelector(".js-source");

      let index = planetInfo.findIndex(
        (x) => x.name.toLowerCase() === `${planetName}`
      );

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

// }))
