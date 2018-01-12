"use strict";

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals);

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log("The new value of the array is: blowfish, meerkat, capricorn, giraffe, turtle");
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
/* w3schools:
 The first parameter (3) defines the position where new elements should be added (spliced in).
The second parameter (1) defines how many elements should be removed. */

let unlovable = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + unlovable);