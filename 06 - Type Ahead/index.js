const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    //Is the city or state match for the search?
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
//Format Population Numbers
function numberWithCommas(x) {
  return x.toString().replace(/B(?=(d{3})+(?!d))/g, ",");
}
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      //Find the user input & highlight it on the results
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(regex, `${this.value}`);
      const stateName = place.state.replace(regex, `${this.value}`);

      return `
      <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population"> ${numberWithCommas(place.population)}</span>
      </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
