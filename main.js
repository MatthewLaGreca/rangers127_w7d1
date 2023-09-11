//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

const doggos = (string, dogs) => {
    for (const dog of dogs){
        string.includes(dog) && dog == 'Sassy' ? console.log("That's a damn cat"):
        string.includes(dog) ? console.log(`Matched ${dog}`) :
        console.log(`No matches`)
    }
}

doggos(dogString,dogNames)
//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

dbz = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]
signatures = ['Kamehameha', 'Final Flash', 'Burning Attack', 'Destructo Disc', 'Masenko', 'Special Beam Cannon']

const killings = (names, moves) =>{
    for(i=0; i<names.length; i+=2){
        names.splice(i,1,moves[i])
    }
} 
killings(dbz, signatures)
console.log(dbz)