//Task 1

let selectedMovies = [
  ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"],
  ["Interstellar", "Inception", "Memento"],
  ["The Odyssey", "Justice League", "Man of Steel"]
]

//Task 2
console.log(selectedMovies[0][0]);
console.log(selectedMovies[0][1]);
console.log(selectedMovies[0][2]);
console.log(selectedMovies[1][0]);
console.log(selectedMovies[1][1]);
console.log(selectedMovies[1][2]);
console.log(selectedMovies[2][0]);
console.log(selectedMovies[2][1]);
console.log(selectedMovies[2][2]);

//Task 3
for (let row = 0; row < selectedMovies.length; row++) {
  for (let item = 0; item < selectedMovies[row].length; item++) {
    console.log(selectedMovies[row][item]);
  }
}

//Task 4
for (let item = 0; item < selectedMovies[1].length; item++) {
  console.log(selectedMovies[1][item]);
}


