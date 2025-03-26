//You can edit ALL of the code here

import { getOneEpisode, getAllEpisodes } from "./episodes.js"; // Import functions

function setup() {
  const allEpisodes = getAllEpisodes();

  console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
