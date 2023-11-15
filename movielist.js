//a) Write a constructor for the class Movie, 
//which takes a String representing the title of 
//the movie, a String representing the studio, 
//and a String representing the rating as its arguments, 
//and sets the respective class properties to these values.

class Movie {
    //b) The constructor for the class Movie will set the 
    //class property rating to "PG" as default when no rating is provided.
    constructor(title,studio,rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
    getPG(movies) {
        // return movies.filter(movie => movie.rating === 'PG')
        let res = []
        for(let movie of movies) {
            if(movie.rating === 'PG')
                 res.push(movie);
        }
        return res;
    }
}


//c) Write a method getPG, which takes an array of base type Movie as its argument, 
//and returns a new array of only those movies in the input array with a rating of "PG". 
//You may assume the input array is full of Movie instances. The returned array need not be full.
const moviesList = [
    new Movie("Iron-Man", "Marvel Production", "PG"),
    new Movie("Aqua-Man", "DC Production", "R"),
    new Movie("Trans-Former", "StarWars Production", "PG"),
    new Movie("Captain-America", "Marvel Production"),
    new Movie("Bad-Boy's", "Carnivel Production", "PG-13"),
]

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”
const flim = new Movie("Casino Royale", "Eon Productions","PG­13");
// console.log(flim.List());
console.log(flim.getPG(moviesList));