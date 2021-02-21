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
const movies = [];

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
  clearModal();
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
    title: titleValue,
    image: imgUrlValue,
    rating: ratingValue
  };
  movies.push(newMovie);
  console.log(movies);
  toggleModal();
  clearModal();
}

startAddMovieBtn.addEventListener('click', toggleModal);
modalCancel.addEventListener('click', closeModal);
modalAdd.addEventListener('click', addMovie);
backDrop.addEventListener("click", backDropClickHandler);
