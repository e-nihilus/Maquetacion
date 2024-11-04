class Profesional {
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.height = height;
      this.isRetired = isRetired;
      this.nationality = nationality;
      this.oscarsNumber = oscarsNumber;
      this.profession = profession;
      this.photo = photo; 
    }
  
    getHtml() {
      return `
        <div class="professional-card">
          <img src="${this.photo}" alt="Foto de ${this.name}" class="professional-photo">
          <p><strong>Nombre:</strong> ${this.name}</p>
          <p><strong>Edad:</strong> ${this.age}</p>
          <p><strong>Peso:</strong> ${this.weight} kg</p>
          <p><strong>Altura:</strong> ${this.height} cm</p>
          <p><strong>Retirado:</strong> ${this.isRetired ? "Sí" : "No"}</p>
          <p><strong>Nacionalidad:</strong> ${this.nationality}</p>
          <p><strong>Número de Oscars:</strong> ${this.oscarsNumber}</p>
          <p><strong>Profesión:</strong> ${this.profession}</p>
        </div>
      `;
    }
  }
  
  
  class Movie {
    constructor(title, releaseYear, nacionality, genre, language, plataforma, isMCU, producer, distributor, photo) {
      this.title = title;
      this.releaseYear = releaseYear;
      this.nacionality = nacionality;
      this.language = language;
      this.plataforma = plataforma;
      this.isMCU = isMCU;
      this.producer = producer;
      this.distributor = distributor;
      this.genre = genre;
      this.photo = photo; 
    }
  
    getHtml() {
      return `
        <div class="movie-card">
          <img src="${this.photo}" alt="Poster de ${this.title}" class="movie-photo">
          <p><strong>Título:</strong> ${this.title}</p>
          <p><strong>Año de lanzamiento:</strong> ${this.releaseYear}</p>
          <p><strong>Nacionalidad:</strong> ${this.nacionality}</p>
          <p><strong>Idioma:</strong> ${this.language}</p>
          <p><strong>Plataforma:</strong> ${this.plataforma}</p>
          <p><strong>Pertenece al MCU:</strong> ${this.isMCU ? "Sí" : "No"}</p>
          <p><strong>Productor:</strong> ${this.producer}</p>
          <p><strong>Distribuidor:</strong> ${this.distributor}</p>
          <p><strong>Género:</strong> ${this.genre}</p>
        </div>
      `;
    }
  }
  
  let professionals = [];

document.addEventListener("DOMContentLoaded", function() {
  
  const professional1 = new Profesional("Robert Downey Jr.", 58, 78, 174, false, "Americana", 2, "Actor", "https://th.bing.com/th/id/OIP.qXRSaw2OcT1tEMbbw1pckQHaJ3?w=203&h=271&c=7&r=0&o=5&pid=1.7");
  professionals.push(professional1);

  const professional2 = new Profesional("Christopher Nolan", 53, 70, 183, false, "Británica", 0, "Director", "https://th.bing.com/th/id/OIP.61lt8eMBtqUiFDop0HH4BQHaE8?w=251&h=180&c=7&r=0&o=5&pid=1.7");
  professionals.push(professional2);

  const professional3 = new Profesional("Meryl Streep", 74, 63, 172, false, "Americana", 3, "Actriz", "https://th.bing.com/th/id/OIP.rAnzF2CueZStutyjEJxleQAAAA?w=155&h=214&c=7&r=0&o=5&pid=1.7");
  professionals.push(professional3);

  const professional4 = new Profesional("Martin Scorsese", 81, 70, 163, false, "Americana", 1, "Director", "https://th.bing.com/th/id/OIP.rBsIrjV259p0Cv7jW1j4SwDHEs?w=115&h=180&c=7&r=0&o=5&pid=1.7");
  professionals.push(professional4);

  const professional5 = new Profesional("Leonardo DiCaprio", 49, 80, 183, false, "Americana", 1, "Actor", "https://th.bing.com/th/id/OIP.q3bXoHApD6gRnw4P9kl9iAHaJS?w=203&h=255&c=7&r=0&o=5&pid=1.7");
  professionals.push(professional5);

  displayProfessionals();
});

function displayProfessionals() {
    const professionalList = document.getElementById("profess");
    professionalList.innerHTML = professionals.map(professional => professional.getHtml()).join('');
  }
  
  
let movies = [];

function displayMovies() {
  const movieList = document.getElementById("movie");
  movieList.innerHTML = movies.map(movie => movie.getHtml()).join('');
}
  
document.addEventListener("DOMContentLoaded", function() {

  const movie1 = new Movie("Avengers", 2012, "USA", "Acción", "Inglés", "Disney+", true, "Kevin Feige", "Marvel Studios", "https://th.bing.com/th/id/OIP.dceXq06amULrIdlEnQ7HQAHaKf?pid=ImgDet&w=201&h=285&c=7");
  movies.push(movie1);
  
  const movie2 = new Movie("Inception", 2010, "USA", "Ciencia Ficción", "Inglés", "HBO Max", false, "Emma Thomas", "Warner Bros.", "https://th.bing.com/th/id/OIP.fYLXgLBnnbp3N8JCRuUIGAHaLH?w=117&h=180&c=7&r=0&o=5&pid=1.7");
  movies.push(movie2);
  
  const movie3 = new Movie("Titanic", 1997, "USA", "Romance", "Inglés", "Paramount+", false, "James Cameron", "Paramount Pictures", "https://th.bing.com/th/id/OIP.dZANmmxDqHqihcQwE8dXCgHaLG?w=203&h=304&c=7&r=0&o=5&pid=1.7");
  movies.push(movie3);
  
  const movie4 = new Movie("The Dark Knight", 2008, "USA", "Acción", "Inglés", "HBO Max", false, "Charles Roven", "Warner Bros.", "https://th.bing.com/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?w=203&h=304&c=7&r=0&o=5&pid=1.7");
  movies.push(movie4);
  
  const movie5 = new Movie("Parasite", 2019, "Corea del Sur", "Drama", "Coreano", "Netflix", false, "Kwak Sin-ae", "CJ Entertainment", "https://th.bing.com/th/id/OIP.ziEnuIbp2lO0edZqr5XDcwAAAA?w=136&h=180&c=7&r=0&o=5&pid=1.7");
  movies.push(movie5);
  
displayMovies();
  
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

    const title = document.getElementById("title").value;
    const releaseYear = parseInt(document.getElementById("releaseYear").value, 10);
    const nacionality = document.getElementById("nacionality").value;
    const language = document.getElementById("language").value;
    const plataforma = document.getElementById("plataforma").value;
    const isMCU = document.getElementById("isMCU").value === "true";
    const producer = document.getElementById("producer").value;
    const distributor = document.getElementById("distributor").value;
    const genre = document.getElementById("genre").value;
    const photo = document.getElementById("photo").value; 
  
    const newMovie = new Movie(title, releaseYear, nacionality, genre, language, plataforma, isMCU, producer, distributor, photo);
    movies.push(newMovie);
  
    displayMovies();
  
    document.getElementById("form").reset();
  });
});
  
  