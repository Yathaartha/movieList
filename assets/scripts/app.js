const startAddMovieBtn = document.querySelector("header button");
// const startAddMovieBtn = document.querySelectorAll("button");
// const startAddMovieBtn = document.querySelector("header").lastElementChild;
const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];
const backDrop = document.getElementById("backdrop");
// const backDrop = document.body.firstElementChild;
const modalCancel = addMovieModal.querySelector(".btn--passive");
const modalAdd = addMovieModal.querySelector(".btn--success");
// const modalAdd = modalCancel.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName("input");
const entryTextSection = document.getElementById("entry-text");
const listRoot = document.getElementById("movie-list");

const movies = [];

function updateUI(){
  if (movies.length === 0){
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
}

function deleteMovie(movieId){
  let movieIndex = 0;
  for (const movie of movies){
    if (movie.id --- movieId){
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
}

function renderNewMovieElement(id, title, imageUrl, rating){
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src = "${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <h2>${rating}/5 stars</h2>
  </div>
  `;
  newMovieElement.addEventListener("click", deleteMovie.bind(null, id));

  listRoot.append(newMovieElement);
}

function toggleModal(){
  addMovieModal.classList.toggle('visible');
  // addMovieModal.className = "modal card visible";
  toggleBackdrop();
}

function toggleBackdrop(){
  backDrop.classList.toggle("visible");
}

function closeModal(){
  toggleModal();
}

function backDropClickHandler(){
  toggleModal();
}

function clearModal(){
  for (const usrInput of userInputs){
    usrInput.value = "";
  }
  // clearModal();
}

function addMovie(){
  const titleValue = userInputs[0].value;
  const imgUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  
  if (titleValue.trim() === "" || imgUrlValue.trim() === "" || ratingValue.trim() === "" || parseInt(ratingValue) < 1 || parseInt(ratingValue) > 5){
    alert("Please Enter Valid Value");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imgUrlValue,
    rating: ratingValue
  };
  movies.push(newMovie);
  console.log(movies);
  toggleModal();
  clearModal();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
}

startAddMovieBtn.addEventListener('click', toggleModal);
modalCancel.addEventListener('click', closeModal);
modalAdd.addEventListener('click', addMovie);
backDrop.addEventListener("click", backDropClickHandler);
