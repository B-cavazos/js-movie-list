"use strict";

//define array of objects
var movies = [{
  id: 1,
  title: 'Gladiator',
  year: '2000',
  genre: 'Historical Drama',
  imdb: 8.5,
  description: 'Russel Crowe portrays Roman general Maximus Decimus Meridius, who is betrayed when Commodus, the ambitious son of Emperor Marcus Aurelius, murders his father and seizes the throne. Reduced to slavery, Maximus becomes a gladiator and rises through the ranks of the arena to avenge the murders of his family and his emperor.',
  image: 'https://i.ibb.co/bsg4cDx/gladiator.jpg'
}, {
  id: 2,
  title: 'John Wick',
  year: '2014',
  genre: 'Action, Crime, Thriller',
  imdb: 7.4,
  description: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
  image: 'https://i.ibb.co/qYxBy2J/John-Wick.jpg'
}, {
  id: 3,
  title: 'Akira',
  year: '1988',
  genre: 'Animation, Action, Sci-Fi',
  imdb: 8.00,
  description: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by two teenagers and a group of psychics.',
  image: 'https://i.ibb.co/dpJ2Yfc/Akira.jpg'
}, {
  id: 4,
  title: 'Midsommar',
  year: '2019',
  genre: 'Drama, Horror, Mystery',
  imdb: 7.1,
  description: "A couple travels to Scandinavia to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
  image: 'https://i.ibb.co/86VFvVr/Midsommar.jpg'
}, {
  id: 5,
  title: 'Grave of the Fireflies',
  year: '1988',
  genre: 'Animation, Drama, War',
  imdb: 8.5,
  description: 'A young boy and his little sister struggle to survive in Japan during World War II.',
  image: 'https://i.ibb.co/2KP4Px5/Grave-of-the-Fireflies.jpg'
}];
/** Function to display Movie Title and Description */

var myFunction = function myFunction(movieTitle) {
  //   debugger;
  var foundMovie = movies.find(function (movie) {
    return movie.title === movieTitle;
  });

  if (foundMovie) {
    alert("".concat(foundMovie.title, ": ").concat(foundMovie.description));
  } else {
    alert('The Movie was not found :(');
  }
}; //button function - display title and description on click
//find a movie based on a paramerter (going with title)
// const alertMovieDetails = movieTitle =>{
//   //set a variable inside of the function
//   let foundMovie = movies.find(movie =>{
//     return movie.title === movieTitle;
//   });
//   console.log(foundMovie);
//   alert(`${foundMovie.title}: ${foundMovie.description}`);
// };
// 
//Function to add object to array
// movies.push({
//     id: 6,
//     title: 'Constantine',
//     year: '2005',
//     genre: 'Action, Fantasy, Horror',
//     imdb: 7.0,
//     description: "Supernatural exorcist and demonologist John Constantine helps a policewoman prove her sister's death was not a suicide, but something more.",
// },
// {
//     id: 7,
//     title: 'Sommersby',
//     year: '1993',
//     genre: 'Drama, Mystery, Romance',
//     imdb: 6.2,
//     description: 'A farmer returns home from the Civil War, but his wife begins to suspect that the man is an impostor.',
// },);
// console.log(movies);
//V.2.0 - follow along


var addNewMovie = function addNewMovie(movieId, movieTitle, movieDes, movieYear, movieGenre, movieImdbRating) {
  //create new movie object //
  var newMovie = {
    id: movieId,
    title: movieTitle,
    description: movieDes,
    Year: movieYear,
    genre: movieGenre,
    imdbRating: movieImdbRating // if param name is same as KEY name, you don't have to do key:value structure here

  };
  console.log(newMovie); // Push our object ot the array

  movies.push(movies);
  console.log(movies);
};

addNewMovie(6, 'elf', 'funny', 2002, 'comedy', 8.0); //values can just go here - in ref to last comment
//function to remove object from array by title

var removeMovie = function removeMovie(removedTitle) {
  //filter array by movie title
  removedTitle = movies.filter(function (film) {
    // this variable shouldnt match paramater. doing this reasigns param to movie.filter 
    //return object if the parameter is not true
    return film.title !== removedTitle; //  !== true was in correct, returned all items in array
  });
  console.log(removedTitle);
};

removeMovie('Akira');