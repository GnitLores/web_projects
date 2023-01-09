const addMovieModal = document.getElementById("add-modal");
const startAddMovieBUtton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const listRoot = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUi = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();
  closeDeleteMovieConfirmation();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${imageUrl}" alt="${title}" />
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <h2>${rating}/5 stars</h2>
  </div>
  `;
  newMovieElement.addEventListener(
    "click",
    showDeleteMovieConfirmation.bind(null, id)
  );
  listRoot.append(newMovieElement);
};

const closeMovieDeletionModal = () => {
  deleteMovieModal.classList.remove("visible");
  closeBackdrop();
};

const showDeleteMovieConfirmation = (movieId) => {
  deleteMovieModal.classList.add("visible");
  showBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  const confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

const closeDeleteMovieConfirmation = () => {
  deleteMovieModal.classList.remove("visible");
  closeBackdrop();
};

const closeBackdrop = () => {
  backdrop.classList.remove("visible");
};

const showBackdrop = () => {
  backdrop.classList.add("visible");
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
  closeBackdrop();
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  showBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5)");
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUi();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
};

startAddMovieBUtton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
