//1. Протипизировать данные
interface Faculty {
    id: number,
    faculty: string,
    subjects: string[],
    countStudents: number,
}

const faculties: Faculty [] = [
{
id: 1,
faculty: "History department",
subjects: ["The World History", "History of Rome"],
countStudents: 44
},
{
id: 2,
faculty: "Department of Biology",
subjects: ["biology", "chemistry"],
countStudents: 50
},
{
id: 3,
faculty: "Faculty of Mathematics",
subjects: ["mathematics", "geometry", "trigonometry"],
countStudents: 72
},
{
id: 4,
faculty: "Faculty of Design",
subjects: ["ui", "ux", "graphic design"],
countStudents: 37
}
];

//2. Протипизировать данные
interface Movie {
    id: number,
    title: string,
    year: number,
    released: string,
    runtime: string,
    genre: string[],
    director: string,
    writer: string,
    actors: string[],
    plot: string,
    country: string,
    poster: string,
    imdbRating: number,
    imdbVotes: number,
    type: string,
    boxOffice: string,
    production: string,
}

const movies: Movie [] = [
{
id: 1,
title: "Black Widow",
year: 2021,
released: "09 Jul 2021",
runtime: "134 min",
genre: ["Action", "Sci-Fi", "Adventure"],
director: "Cate Shortland",
writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
actors: ["Scarlett Johansson", "Florence Pugh", "DavidHarbour"],
plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
country: "United States",
poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
imdbRating: 6.9,
imdbVotes: 121932,
type: "movie",
boxOffice: "$138,027,361",
production: "Marvel Studios",
},
{
id: 2,
title: "Harry Potter and the Deathly Hallows: Part 2",
year: 2011,
released: "15 Jul 2011",
runtime: "130 min",
genre: ["Adventure", "Drama", "Fantasy"],
director: "David Yates",
writer: "Steve Kloves, J.K. Rowling",
actors: ["Daniel Radcliffe", "Emma Watson", "RupertGrint"],
plot: "Harry, Ron, and Hermione search for Voldemort'sremaining Horcruxes in their effort to destroy the Dark Lord as thefinal battle rages on at Hogwarts.",
country: "United Kingdom, United States",
poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
imdbRating: 8.1,
imdbVotes: 790377,
type: "movie",
boxOffice: "$381,409,310",
production: "Heyday Films, Moving Picture Company, Warner Bros.",
},
];

//3. С ниже приведенным массивом решить следующие задачи. Все функции и данные
// должны быть протипизированы:
// 1. Создать строку из имен пользователей через запятую
// 2. Подсчитать общее количество машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
// строку с названиями марок автомобилей через запятую

interface User {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean,
}

const users: User [] = [
{
name: "Harry Felton",
phone: "(09) 897 33 33",
email: "felton@gmail.com",
animals: ["cat"],
cars: ["bmw"],
hasChildren: false,
hasEducation: true
},
{
name: "May Sender",
phone: "(09) 117 33 33",
email: "sender22@gmail.com",
hasChildren: true,
hasEducation: true
},
{
name: "Henry Ford",
phone: "(09) 999 93 23",
email: "ford0@gmail.com",
cars: ["bmw", "audi"],
hasChildren: true,
hasEducation: false
}
]

// 1. Создать строку из имен пользователей через запятую
function usernameString (users: User[]): string {
    return users.map(user => user.name).join(',');
}
console.log(usernameString(users));

// 2. Подсчитать общее количество машин у пользователей
function sumCars (users: User[]): number {
    return users.reduce((sum, user) => sum + (user.cars?.length || 0), 0)
}
console.log(sumCars(users));

// 3. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие образования
function isEducation (users: User[]): User[] {
    return users.filter(user => user.hasEducation)
}
console.log(isEducation(users));

// 4. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие животных
function hasAnimal (users: User[]): User[] {
    return users.filter(user => user.animals && user.animals?.length > 0)
}
console.log(hasAnimal(users));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
// строку с названиями марок автомобилей через запятую
function carsString (users: User[]): string {
    const allCars:string[] = [];

    for (const user of users) {
        if (user.cars) {
            for (const car of user.cars) {
                allCars.push(car)
            }
        }
    }
    return allCars.join(',')
}

console.log(carsString(users));


