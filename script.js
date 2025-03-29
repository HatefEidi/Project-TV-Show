import { getOneEpisode, getAllEpisodes } from "./episodes.js"; // Import functions

function setup() {
  const allEpisodes = getAllEpisodes();
  render(allEpisodes);
  
}
const template = document.querySelector("template");


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
}

window.onload = setup;
