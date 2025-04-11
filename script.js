












// ########### Q.10



let adashe = [{
    name: "benson",
    gender: "m",
    amount: 200,
    id:1
    
},

{
    name: "ada",
    gender: "f",
    amount: 700,
    id:2
      
},

{
    name: "micheal",
    gender: "m",
    amount: 400,
    id:3
    
}
]

console.log("MEMBER BEFORE ADDING:", adashe);


console.log("----------------------------------------------------------------------------");



// ADD MEMBER FUNCTION

function addMember(name, gender, amount){
    let id = adashe.length +1

    name = name.toLowerCase();

    let member = {
        name: name,
        gender: gender ,
        amount: amount,
        id: id
    }

    let userExists = adashe.some(adashe => adashe.name.toLowerCase() === member.name.toLowerCase());

    // let update = adashe.findIndex(adashe => adashe.name.toLowerCase() === member.name.toLowerCase());

    if(!userExists){
        adashe.push(member)
     console.log("User added: ", member);
     
     } 
    // else if(update === -1){
    //     console.log(" ");
        
    // } else if(adashe[update] = member) {
    //     console.log("User updated", member);
        
        
    // }
    
    else{
        console.log("User already exists. Not added");
        
    }
}


console.log("MEMBERS AFTER ADDING: ");

addMember("Joel", "m", 600)
addMember("Blessing", "f", 100)
addMember("Pascal", "m", 1200)
addMember("Joy", "f", 500)
addMember("Ella", "f", 700)
addMember("monica", "f", 600)
addMember("Peter", "m", 300)
addMember("Esther", "f", 900)
addMember("Elijah", "m", 800)
addMember("peter", "m", 1000)

console.log("----------------------------------------------------------------------------");




// ALL MEMBERS


console.log("ALL MEMBERS: ");

adashe.forEach(allMembers)

function allMembers(members){
    console.log("MEMBER:  ", members);
}




console.log("----------------------------------------------------------------------------");



// SEARCH MEMBER

function searchMember(name){


    let searchMember = adashe.find((member) => member.name.toLowerCase() === name.toLowerCase());
                    
                if (searchMember) {
                     console.log( searchMember);
                } else {
                  console.log("User not found");
                }

}

    searchMember("joy")
    searchMember("PETERs")




console.log("----------------------------------------------------------------------------");





// WITHDRAW

function withdraw(nameIn, cashout){

    nameIn = nameIn.toLowerCase();

    for(let index in adashe){
        if(adashe[index].name === nameIn){
            if(cashout > adashe[index].amount){
                console.log("Insufficient funds");
                
            } else{
                adashe[index].amount -= cashout
                console.log("AFTER WITHDRAWING", adashe);
            }
            return
        } 
    
    }

 console.log("User not found");
 

}

withdraw("peter", 200)




console.log("----------------------------------------------------------------------------");



// REMOVE MEMBER


function removeMember(id){
        adashe.splice(id -1, 1)
}

removeMember(8)

console.log("AFTER REMOVING A MEMBER:", adashe);


    