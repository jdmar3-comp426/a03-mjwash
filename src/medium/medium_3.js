import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    return car_data.filter(x => x.torque >= minTorque && x.horsepower >=minHorsepower).sort((a,b)=>{
        if (a.horsepower-b.horsepower > 1) {return -1;}
        else if (a.horsepower-b.horsepower < 1) {return 1;}
        else {return 0;}
    });
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    return car_data.filter(x => x.city_mpg >= minCity && x.highway_mpg >=minHighway).sort((a,b)=>{
        if (a.highway_mpg-b.highway_mpg > 1) {return -1;}
        else if (a.highway_mpg-b.highway_mpg < 1) {return 1;}
        else {return 0;}
    });
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    return car_data.filter(x => x.id.includes(searchTerm));
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    return car_data.filter(x => years.includes(x.year)).sort((a,b)=>{
        if (a.year-b.year > 1) {return -1;}
        else if (a.year-b.year < 1) {return 1;}
        else {return 0;}
    });
}
