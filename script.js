// ########### Q.1

// function Palindrome(str) {
//         let left = 0;
//         let right = str.length - 1;
//         while (left < right) {
//             if (str[left] !== str[right]) {
//                 return false;
//             }
//             left++;
//             right--;
//         }
//         return true;
//     }
//     console.log(Palindrome('dad'))





// ########### Q.2


//             function maxx(input){
//             let max = input[0]
//                 for(let i = 1; i < input.length; i++){
//                     if(input[i] > max){
//                         max = input[i]
//                     }
//                 }
//                 return max
//             }


//             console.log(maxx([1,2,1000,3,-1]));




// // ########### Q.3


//             function factorial (n) {
//                 let outcome = 1;
//                 for(let i = 1; i <= n; i++){
//                     outcome *=(i);
//                 }

//                 return outcome;
//             }

//             console.log(factorial(4));




// // ########### Q.4



//             function sum(n){
//                 let result = 0
//                 for(let i = 0; i <= n; i++){
//                     result +=(i)
//                 }

//                 return result
//             }



//             console.log(sum(4));
            



// // ########### Q.5

//             function stringInput(input){
//                 vowel = "aeiouAEIOU"
//                 let count = 0
//             for(let i = 0; i < input.length; i++){
//                 for(let j = 0; j < vowel.length; j++){
//                 if(vowel[j] === (input[i])){
//                     count++
//                 }
//             }
//         }
               
//                 return count;

//             }

//             console.log(stringInput("Detectors"));
            
            




// ########### Q.6

            //    function primeNum(n){
            //     for(let i = 1; i <= n; i++){
            //         if(n % 2 == 0){
            //             console.log(false);
            //             break

            //         } else {
            //             console.log(true);
            //             break
                        
            //         }
            //     }
            //    }

            //    primeNum(15)




// ########### Q.7

            //     let mult = []
            //    function multiples(n){
            //     for( let i = 1; i <= n; i++){
            //        mult.push(n * i)
            //     }
            //     return mult

            //    }

            //    console.log(multiples(3));

           

// ########### Q.8

            //    let array = [1,2,3,4,5,10,30,50]

            //    function index(n){
            //     for(let i = 0; i < array.length; i++){
            //         for( let j = 0; j < n; j++){
            //         if(n == array[i]){
            //             return i
            //         }}
            //     }
            //    }
               
            //    console.log(index(1));
               


// // ########### Q.9

    let together = []
    let arr1 = [0,4,6]
    let arr2 = [1,2,3]
            function merge (arr1, arr2) {
                   
                    for(let i = 0; i < arr1.length; i++){
                        together[together.length] = arr1[i]
                    }
                    for(let i = 0; i <arr2.length; i++){
                        together[together.length] = arr2[i]
                    }

                    return together
                    }

                    
                        console.log(merge(arr1, arr2));

                function sort(array){
                    let sorted = []
                    for(let i = 0; i < array.length; i++ ){
                        let current = array[i];
                        let j = sorted.length -1
                        while(j >= 0 && sorted[j] > current){
                            j--
                        } 
                        sorted[sorted.length] = current
                        for(let k = sorted.length -1; k > j +1; k--){
                            sorted[k] = sorted[k - 1] 
                        }
                        sorted[j + 1] = current
                    }

                    console.log(sorted);
                    
                }
                    
                    sort(together)
                    








// ########### Q.10



// let adashe = [{
//     name: "benson",
//     gender: "m",
//     amount: 200,
//     id:1
    
// },

// {
//     name: "ada",
//     gender: "f",
//     amount: 700,
//     id:2
      
// },

// {
//     name: "micheal",
//     gender: "m",
//     amount: 400,
//     id:3
    
// }
// ]

// console.log("MEMBER BEFORE ADDING:", adashe);


// console.log("----------------------------------------------------------------------------");



// // ADD MEMBER FUNCTION

// function addMember(name, gender, amount){
//     let id = adashe.length +1

//     name = name.toLowerCase();

//     let member = {
//         name: name,
//         gender: gender ,
//         amount: amount,
//         id: id
//     }

//     let userExists = adashe.some(adashe => adashe.name.toLowerCase() === member.name.toLowerCase());

//     if(!userExists){
//         adashe.push(member)
//      console.log("User added: ", member);
     
//      } 
    
//     else if(userExists){
//         amount += amount
//         console.log("User already exists. Not added");
        
//     }
// }


// console.log("MEMBERS AFTER ADDING: ");

// addMember("Joel", "m", 600)
// addMember("Blessing", "f", 100)
// addMember("Pascal", "m", 1200)
// addMember("Joy", "f", 500)
// addMember("Ella", "f", 700)
// addMember("monica", "f", 600)
// addMember("Peter", "m", 300)
// addMember("Esther", "f", 900)
// addMember("Elijah", "m", 800)
// addMember("peter", "m", 1000)
// addMember("peter", "m", 100)

// console.log("----------------------------------------------------------------------------");




// // ALL MEMBERS


// console.log("ALL MEMBERS: ");

// adashe.forEach(allMembers)

// function allMembers(members){
//     console.log("MEMBER:  ", members);
// }




// console.log("----------------------------------------------------------------------------");



// // SEARCH MEMBER

//             function searchMember(search){

//                     search = search.toLowerCase();
//                     let found = false
//             for(let i = 0; i < adashe.length; i++){
//                 if (adashe[i].name.toLowerCase() === search) {
//                      console.log("User found: ", adashe[i]);
//                      found = true
//                     break
//                 } 
//             }

//         if(!found){
//             console.log("User not found");
            
//         }

// }

//     searchMember("joy")
    




// console.log("----------------------------------------------------------------------------");





// // WITHDRAW

// function withdraw(nameIn, cashout){

//     nameIn = nameIn.toLowerCase();

//     for(let index in adashe){
//         if(adashe[index].name === nameIn){
//             if(cashout > adashe[index].amount){
//                 console.log("Insufficient funds");
                
//             } else{
//                 adashe[index].amount -= cashout
//                 console.log("AFTER WITHDRAWING", adashe);
//             }
//             return
//         } 
    
//     }

//  console.log("User not found");
 

// }

// withdraw("monica", 2000)




// console.log("----------------------------------------------------------------------------");



// // REMOVE MEMBER


// function removeMember(){
//         adashe.pop()
// }

// removeMember()

// console.log("AFTER REMOVING A MEMBER:", adashe);


    