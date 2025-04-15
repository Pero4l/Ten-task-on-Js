
// ############# Q.1




let personalInfo = {
    name: "Peter",
    age: 15,
    gender: "m",
    heigth: 6.2

}

let contactInfo = {
    address: "Angwarukuba",
    contact: 5555-697,
    location: "Jos"

}

Object.assign(personalInfo,contactInfo)

console.log(personalInfo);



// ############# Q.2

let Products = {
    laptop: "Hp",
    phone: "Iphone",
    bag: "LV",
    cloths: "Gucci",
    clipper: "Wamark"
}


let keys = Object.keys(Products)

console.log("KEYS: ", keys);

let values = Object.values(Products)

console.log("VALUES: ", values);




// ############# Q.3

let settings = {
    theme: "dark",
    notifications: true
}

let ObjectIsFreeze = Object.freeze(settings)

console.log("AFTER FREEZING: ", settings);

settings.theme = "light"

console.log("AFTER TRYING TO MAKE CHANGE", settings);
