const myName = "Ariyan Rahman Anas"
let age = 25
let isStudent = true
const favoriteProgrammingLanguage = "JavaScript"

console.log("Name:", myName)
console.log("Age:", age)
console.log("Is Student:", isStudent)
console.log("Favorite Programming Language:", favoriteProgrammingLanguage)

let myInfo = {
    name: myName,
    age: age,
    isStudent: isStudent,
    favoriteProgrammingLanguage: favoriteProgrammingLanguage,
    isMarried: true,
    division: "Chattogram",
    country: "Bangladesh"
}
console.log("About me: ", myInfo)

myInfo = {
    ...myInfo,
    hobby: "Reading Books",
    institute: "Chattogram Polytechnic Institute",
    department: "Computer Technology",
    graduationYear: 2023,
    isJobHolder: true,
    jobTitle: "Junior Software Developer"
}
console.log("More about me: ", myInfo)


let mySkills = ["HTML", "CSS", "JavaScript", "React", "Node.js"]
console.log("My skills: ", mySkills)

mySkills = [...mySkills, "Es6", "TypeScript"]
console.log("My latest skills: ", mySkills)