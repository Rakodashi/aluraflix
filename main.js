const newMovie = document.querySelector('#new-movie-input');
const addMovieBtn = document.querySelector('.add-movie-btn');
const removeCompleteBtn = document.querySelector('.remove-complete-btn');
const movieList = document.querySelector('.movie-list');
const movieTemplate = document.querySelector('#movie-template')
let id = 1;

newMovie.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && inputValid()) {
        addMovie();
    }
});

addMovieBtn.addEventListener('click', () => {
    if (inputValid()){
        addMovie();
    }
});

removeCompleteBtn.addEventListener('click', () => {
    const movies = document.querySelectorAll('.movie');
    movies.forEach((movie) => {
        const checked = movie.querySelector('input').checked;
        if(checked){
          movie.remove();
        }
    });
});

function addMovie() {
    const movieElement = document.importNode(movieTemplate.content, true);
    const checkbox = movieElement.querySelector('input');
    checkbox.id = id;
    const label = movieElement.querySelector('label');
    label.htmlFor = id;
    label.append(newMovie.value);
    movieList.appendChild(movieElement);
    newMovie.value = '';
    id++;
}

function inputValid(){
    return newMovie.value !== ''
}





// var listaFilmes = [
// 	"https://m.media-amazon.com/images/M/MV5BYzMzZmE3MTItODYzYy00YWI5LWFkNWMtZTY5NmU2MDkxYWI1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
// 	"https://blyme-yaoi.com/2018/wp-content/uploads/2019/10/EHsI5aCUUAAuTif.jpg",
// 	"https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2017/05/koe-no-katachi-a-voz-do-silencio1-1.webp?ssl=1",
// 	"https://www.comingsoon.net/assets/uploads/2021/11/heaven-officials-blessing-season-2.jpg",
// 	"https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
// 	"https://m.media-amazon.com/images/M/MV5BMjQ0NTI0NjkyN15BMl5BanBnXkFtZTgwNzY0MTE0NzM@._V1_.jpg"
// ];

// for (var i = 0; i < listaFilmes.length; i++) {
// 	document.write("<img src=" + listaFilmes[i] + ">");
// }

// // let listaFilmes_serialized = JSON.stringify(listaFilmes);
// // console.log(listaFilmes_serialized);

// // localStorage.setItem('listaFilmes', listaFilmes_serialized);
// // console.log(localStorage);


// function adicionarFilme() {
//   var filmeFavorito = document.getElementById("filme").value;
//   if (filmeFavorito.endsWith(".jpg" || ".png")) {
//     listarFilmesNaTela(filmeFavorito);
//   } else {
//     console.error("Endereço de filme inválido");
//   }
//   document.getElementById("filme").value = "";
// }

// function listarFilmesNaTela(filmeFavorito) {
//   var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
//   var elementoListaFilmes = document.getElementById("listaFilmes");
//   elementoListaFilmes.innerHTML =
//     elementoListaFilmes.innerHTML + elementoFilmeFavorito;
// }