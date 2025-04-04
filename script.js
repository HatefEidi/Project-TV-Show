import { getOneEpisode, getAllEpisodes } from "./episodes.js"; // Import functions

function setup() {
  const allEpisodes = getAllEpisodes();
  console.log(getAllEpisodes()); // Should log an array of episodes

  render(allEpisodes);
  populateDropdown(allEpisodes);
  setupDropdown(allEpisodes);
  setupSearch(allEpisodes);
  
}
const template = document.querySelector("template");
const searchInput = document.getElementById("search-box");
const episodeSelect = document.getElementById("episode-select");

console.log(searchInput);
const countResult = document.getElementById("result-count")


const createEpisodeCard = (episode) => {
  const clone = template.content.cloneNode(true);

  // Setting the h3 text content to the episode name
  clone.querySelector("h3").textContent = `${episode.name} \n S${episode.season.toString().padStart(2, 0)}E${episode.number.toString().padStart(2, 0)}`;

  // Setting the description text content to the episode summary
  clone.querySelector("p").textContent = episode.summary.replace(/<\/?p>/g, "");

  // Setting the image src to the episode image
  const img = clone.querySelector("img");
  img.src = episode.image.medium;
  img.alt = episode.name;
  img.classList.add("episode-image");

  return clone;
};


const rootElem = document.getElementById("root");

function render(episodeList) {
  rootElem.textContent = ""; // Clear previous content before adding new episodes

  const filmCards = episodeList.map(createEpisodeCard); // Create all episode cards first

  rootElem.append(...filmCards); // Append all episode cards at once
  countResult.textContent = `Showing ${episodeList.length} episodes`;
}
function setupSearch(allEpisodes) {
  searchInput.addEventListener("input", () => {
    const querY = searchInput.value.toLowerCase();
    
    const filteredEpisodes = allEpisodes.filter(ep =>
      ep.name.toLowerCase().includes(query) || ep.summary.toLowerCase().includes(query)
    );

    render(filteredEpisodes);
  });
}
function populateDropdown(episodes) {
  episodes.forEach((ep) => {
    const option = document.createElement("option");
    option.value = ep.id;
    option.textContent = `S${ep.season.toString().padStart(2, '0')}E${ep.number.toString().padStart(2, '0')} - ${ep.name}`;
    episodeSelect.appendChild(option);
  });
}
function setupDropdown(allEpisodes) {
  episodeSelect.addEventListener("change", () => {
    const selectedId = episodeSelect.value;
    if (selectedId === "all") {
      render(allEpisodes);
    } else {
      const selectedEpisode = allEpisodes.find(ep => ep.id.toString() === selectedId);
      render([selectedEpisode]);
    }
    searchInput.value = ""; // Clear search input when dropdown is used
  });
}



window.onload = setup;
