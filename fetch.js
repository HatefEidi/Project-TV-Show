const endpoint ="https://api.tvmaze.com/shows/82/episodes"
const response = fetch(endpoint)
const fetchFilms = async () => {
    const response = await fetch(endpoint);
    return response.json();
  };
fetchFilms().then((data) => {
    console.log(data);
    const films = data.results;
    const filmList = document.getElementById("film-list");
    
    
});