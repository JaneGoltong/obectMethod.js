// Given two user profile objects (e.g., personalInfo and contactInfo), merge them into a single userProfile object.

let personalInfo ={
    name: "Jennifer",
    gender:"Female",
    age : 24  
} 
let contactInfo = {
    email : "nyamjenniferigbarak@gmail.com",
    number : "08146581514",
}
Object.assign(personalInfo,contactInfo)
console.log(personalInfo)