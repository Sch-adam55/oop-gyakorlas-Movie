import './style.css'

class Movie {
  title: string;
  duration: number; 
  genres: string[];

  constructor(title: string, duration: number, genres: string[]) {
    this.title = title;
    this.duration = duration;
    this.genres = genres;
  }
}


let movies: Movie[] = [
  new Movie("Inception", 148, ["Action", "Sci-Fi", "Thriller"]),
  new Movie("The Godfather", 175, ["Crime", "Drama"]),
  new Movie("The Dark Knight", 152, ["Action", "Crime", "Drama"]),
];


function displayMovies(movies: Movie[]) {
  const tableBody = document.getElementById("movies-table-body") as HTMLTableSectionElement;
  tableBody.innerHTML = ""; 

  movies.forEach((movie) => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = movie.title;
    row.appendChild(titleCell);

    const durationCell = document.createElement("td");
    durationCell.textContent = `${movie.duration} perc`;
    row.appendChild(durationCell);

    const genresCell = document.createElement("td");
    genresCell.textContent = movie.genres.join(", ");
    row.appendChild(genresCell);

    tableBody.appendChild(row);
  });
}

function addMovie(event: Event) {
  event.preventDefault(); 

  const titleInput = document.getElementById("title") as HTMLInputElement;
  const durationInput = document.getElementById("duration") as HTMLInputElement;
  const genresInput = document.getElementById("genres") as HTMLInputElement;

  const title = titleInput.value;
  const duration = parseInt(durationInput.value);
  const genres = genresInput.value.split(",").map((genre) => genre.trim());

  if (title && !isNaN(duration) && genres.length > 0) {
    const newMovie = new Movie(title, duration, genres);
    movies.push(newMovie);
    displayMovies(movies);

   
    titleInput.value = "";
    durationInput.value = "";
    genresInput.value = "";
  } else {
    alert("Kérjük, töltse ki az összes mezőt helyesen!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayMovies(movies);

  const form = document.getElementById("movie-form") as HTMLFormElement;
  form.addEventListener("submit", addMovie);
});

