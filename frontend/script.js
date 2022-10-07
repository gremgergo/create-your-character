const pictureComponent = function() {
  return `
    <img class="background" src="/img/destiny-sample.png">
  `
}

const formComponent = function() {
  return `
    <form onsubmit="alert('stop submit'); return false;">
      <input type="text" placeholder="Character Name">
      
      <label for="genre">Genre
        <select name="genre" id="genre">
          <option value=" ">Select your Genre</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>

      <label for="class">Class
        <select name="class" id="class">
          <option value=" ">Select your Class</option>
          <option value="Titan">Titan</option>
          <option value="Warlock">Warlock</option>
          <option value="Hunter">Hunter</option>
        </select>
      </label>

      <label for="race">Race
        <select name="race" id="race">
          <option value=" ">Select your Race</option>
          <option value="theAwoken">theAwoken</option>
          <option value="theHuman">theHuman</option>
          <option value="theExo">theExo</option>
        </select>
      </label>

    </form>
  `
} 

const characterSheetComponent = function() {
  return `
    <section>
      <div class="list">
        <li class="genre"></li>
        <li class="class"></li>
        <li class="race"></li>
      </div>
      <div class="character-details">
        <h1 id="character-name">Your Character Name</h1>
        <div class="pics">
          <div class="pics-genre">
            <img src="img/male.png" class="genre-icon hidden" data-img="male">
            <img src="img/female.png" class="genre-icon hidden" data-img="female">
          </div>
          <div class="pics-class">
            <img src="img/Hunter_icon.png" class="class-icon hidden" data-img="hunter">
            <img src="img/Titan_icon.png" class="class-icon hidden" data-img="titan">
            <img src="img/Warlock_icon.png" class="class-icon hidden" data-img="warlock">
          </div>
          <div class="pics-race">
            <img src="img/theAwaken.png" class="race-icon hidden theAwaken" data-img="theAwaken">
            <img src="img/theExo.png" class="race-icon hidden theExo" data-img="theExo">
            <img src="img/theHuman.png" class="race-icon hidden theHuman" data-img="theHuman">
          </div>
        </div>
      </div>
    </section>
  `
}
 

const loadEvent = function() {
  const rootElement = document.getElementById("root");
  
  rootElement.insertAdjacentHTML("beforeend", pictureComponent());
  rootElement.insertAdjacentHTML("beforeend", formComponent());
  rootElement.insertAdjacentHTML("beforeend", characterSheetComponent());

  
  // character name:
  const input = document.querySelector('input');
  const log = document.getElementById('character-name');
  
  input.addEventListener('input', updateValue);
  
  function updateValue(e) {
    log.textContent = e.target.value;
  }

  // selectors:
  const selectElementGenre = document.querySelector('#genre');
  const selectElementClass = document.querySelector('#class');
  const selectElementRace = document.querySelector('#race');

  selectElementGenre.addEventListener('change', selectGenre);
  selectElementClass.addEventListener('change', selectClass);
  selectElementRace.addEventListener('change', selectRace);

  function selectGenre(event) {
    const result = document.querySelector('.genre');
    result.textContent = `${event.target.value}`;
  };

  function selectClass(event) {
    const result = document.querySelector('.class');
    result.textContent = `${event.target.value}`;
  };
  
  function selectRace(event) {
    const result = document.querySelector('.race');
    result.textContent = `${event.target.value}`;
  };

  
  const pictureGenreSelector = document.querySelector("#genre");

  pictureGenreSelector.addEventListener("change", genrePicture);

  function genrePicture(event) {
    const pictureElements = [...document.querySelectorAll(".genre-icon")];
    const target = event.target;
    const dataId = target.value.toLowerCase();
    const genreImg = document.querySelector(`[data-img = "${dataId}"]`);

    pictureElements.forEach( element => element === genreImg ? element.classList.remove("hidden") : element.classList.add("hidden") );
  };
  
  const pictureClassSelector = document.querySelector("#class");

  pictureClassSelector.addEventListener("change", classPicture);

  function classPicture(event) {
    const pictureElements = [...document.querySelectorAll(".class-icon")];
    const target = event.target;
    const dataId = target.value.toLowerCase();
    const classImg = document.querySelector(`[data-img = "${dataId}"]`);

    pictureElements.forEach( element => element === classImg ? element.classList.remove("hidden") : element.classList.add("hidden") );
  };
  
  const pictureRaceSelector = document.querySelector("#race");

  pictureRaceSelector.addEventListener("change", racePicture);

  function racePicture(event) {
    const pictureElements = [...document.querySelectorAll(".race-icon")];
    const target = event.target;
    const dataId = target.value.toLowerCase();
    const raceImg = document.querySelector(`[data-img = "${dataId}"]`);

    pictureElements.forEach( element => element === raceImg ? element.classList.remove("hidden") : element.classList.add("hidden") );
  };

}

window.addEventListener("load", loadEvent)