// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }
  const numMovies = moviesArray.filter(
    (element) =>
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
  );
  return numMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }
  const arrayScore = moviesArray.map((movie) => movie.score);
  const filterScore = arrayScore.filter((score) => typeof score === "number");

  const sumScores = filterScore.reduce((curr, next) => curr + next, 0);
  let resultAverage = (sumScores / arrayScore.length).toFixed(2);
  resultAverage = Number(resultAverage);
  return resultAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }
  const filterDrama = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  resultAverage = scoresAverage(filterDrama);
  return resultAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let arrCopy = [...moviesArray];
  let yearSort = [];
  if (moviesArray == "") {
    return yearSort;
  }
  arrCopy.sort((a, b) =>
    a.year > b.year ? 1 : a.year === b.year ? (a.title > b.title ? 1 : -1) : -1
  );

  return arrCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let arrCopy = [...moviesArray];
  let alphaSort = [];
  if (moviesArray == "") {
    return alphaSort;
  }
  arrCopy.sort((a, b) => (a.title > b.title ? 1 : -1));
  alphaSort = arrCopy.map((movie) => movie.title);
  alphaSort = alphaSort.slice(0, 20);
  return alphaSort;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let arrCopy = [];
  let minutesTotal = [];
  if (moviesArray == "") {
    return arrCopy;
  }

  arrCopy = moviesArray.map((a) => {
    return { ...a };
  });

  arrCopy.forEach((element) => {
    let hourstwomin = element.duration.split("h");
    let tempminutes = hourstwomin[1].split("min");
    let movieminutes = Number(hourstwomin[0]) * 60 + Number(tempminutes[0]);
    element.duration = movieminutes;
    // console.log(element)
  });
  console.log(arrCopy);
  return arrCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
//   const moviesOrder = orderByYear(moviesArray);
//   let currentYear=moviesArray[0].year;
//   moviesOrder.forEach(movie=>{
//     if(currentYear) 
//   })

}
