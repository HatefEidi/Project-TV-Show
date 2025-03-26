//You can edit ALL of the code here

import { getOneEpisode, getAllEpisodes } from "./episodes.js"; // Import functions

function setup() {
  const allEpisodes = getAllEpisodes();

  // console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
}
// {/* <template id="film-card">
//         <section>
//           <h3>File Title</h3>
//           <p description>About the film</p>
//         </section>
//       </template> */}
const filmCard = document.getElementById("film-card").content.cloneNode(true);

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
document.body.appendChild(filmCard);

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

// export function getOneEpisode() {
//   return {
//     id: 4952,
//     url:
//       "http://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
//     name: "Winter is Coming",
//     season: 1,
//     number: 1,
//     airdate: "2011-04-17",
//     airtime: "21:00",
//     airstamp: "2011-04-18T01:00:00+00:00",
//     runtime: 60,
//     image: {
//       medium:
//         "http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
//       original:
//         "http://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg",
//     },
//     summary:
//       "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>",
//     _links: {
//       self: {
//         href: "http://api.tvmaze.com/episodes/4952",
//       },
//     },
//   };
// }
window.onload = setup;
