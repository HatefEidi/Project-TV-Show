//You can edit ALL of the code here

import { getOneEpisode, getAllEpisodes } from "./episodes.js"; // Import functions

function setup() {
  const oneEpisode = getOneEpisode();

  console.log(oneEpisode);
  makePageForEpisodes(oneEpisode);
}
// {/* <template id="film-card">
//         <section>
//           <h3>File Title</h3>
//           <p description>About the film</p>
//         </section>
//       </template> */}

const rootElem = document.getElementById("root");


const filmCard = document.getElementById("film-card").content.cloneNode(true);

function makePageForEpisodes(episodeList) {
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

//Film Title, h3
const filmTitle = filmCard.querySelector("h3");
filmTitle.textContent = `${getOneEpisode().name} -S${getOneEpisode().season.toString().padStart(2, 0)}E${getOneEpisode().number.toString().padStart(2, 0)}`;


//Film description, p
const filmDescription = filmCard.querySelector("p");
//this is to prevent the <p> element showing up in the HTML, the other way is to set innerHTML to the summary
filmDescription.innerText = getOneEpisode().summary.replace(/<\/?p>/g, "");


const filmImage = document.createElement("img");
filmImage.src = getOneEpisode().image.medium;
filmImage.alt = getOneEpisode().name;
filmImage.classList.add("film-image");
//Appending film card tot he body

filmCard.append(filmTitle, filmImage,filmDescription)
rootElem.appendChild(filmCard);
  
}


window.onload = setup;
