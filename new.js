// SPREAD FUNCTION
// EXAMPLE 1
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets1 = [...cats, ...dogs];
const allPets2 = cats.concat(dogs);

// EXAMPLE 2
const hi = [..."HELLO!!"];


// SPREAD OBJECT
// EXAMPLE 1
const feline = {
    legs: 4,
    family: "Felidae"
};

const canine = {
    family: "Caninae",
    furry: true
};

const dog = { ...canine, isPet: true };

const lion = { ...feline, genus: "Panthera" };

const catDog1 = { ...feline, ...canine };
const catDog2 = { ...feline, ...canine, family: "Settle" };


// ADD EXTRA DATA INTO OBJECT
const dataFromForm = {
    email: "bryan@gmail.com",
    password: "tobias123",
    username: "tfunke"
}

const newDataFromForm = { ...dataFromForm, id: 2345, isAdmin: true };



// REST PARAM
// Argument is not an array
// #1 (Wont work)
// function sum(){
//     return arguments.reduce((total, num) => total + num)
// }

// #2
// Collection the rest of the parameter
function sum1(...nums) {
    console.log(nums);
}

function sum2(...nums) {
    return nums.reduce((total, num) => total + num);
}

function raceResult(gold, silver, ...everyoneElse) {
    console.log(`Gold Medal: ${gold}`)
    console.log(`Silver Medal: ${silver}`)
    console.log(`Others: ${everyoneElse}`)
}



// DESTUCTURING
// ARRAY
const schoolMarks = ["Wennie", "Bryan", "Cyrus", "Howard"];

const [no1, no2, no3, no4] = schoolMarks;

const [theChampion, ...others] = schoolMarks;


// OBJECT
const user = {
    email: 'bryan@gmail.com',
    password: 'abc123',
    firstName: 'Bryan',
    lastName: 'Kee',
    born: 2000
}

const { firstName, lastName, email, password } = user;

// To Change Variable Name
const { born: birthYear } = user;

const user2 = {
    email1: 'nie@gmail.com',
    password1: 'abwr',
    firstName1: 'Lebron',
    born1: 1899
}

const { password1, email1, born1, bodySize = "XXL" } = user2;

