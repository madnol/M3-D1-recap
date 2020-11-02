/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
// const sum = (x,y) => {
//     if(x===y){
//     return (x + y)*3;
//     } else {
//         return x + y;
//     }
// }

// console.log(sum(5,5))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

// const fiftyCheck = (x,y) => {
    
//     if((x === 50 || y === 50) || (x + y === 50)) {
//         return 'true'
//     } else {
        
//         return 'false'
//     }
    
// }

// console.log(fiftyCheck(27,25))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

let removeCharacter = () =>{ 
let string = 'Good morning everyone'



return  string.substring(0,2) + string.substring(2,2) + string.substring(3)


}

console.log(removeCharacter())
/*
4)
 Create a function to find the largest of three given integers.
*/

let largest = (x,y,o) => {
   return  Math.max(x,y,o)
}
console.log(largest(2,5,4))


/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

let checkNum = (x,y) => {
    if ((x >= 40 && x <= 60) && (y >= 40 && y <= 60)) {
        return x + " and "+ y + " are in a range 40...60"

    } else if ((x >= 70 && x <= 100) && (y >= 70 && y <= 100)) {
        return x + " and "+ y + " are in a range 70...100"
    } else {
        return false
    }
}

console.log(checkNum(70,80))


/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("Hello everyone. ", 5));

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function city_name(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New')))
     
        {
            return str;
      }
  
    return '';
  }
  
  console.log(city_name("New Mexico"));
  console.log(city_name("Los Angeles"));
  console.log(city_name("bangkok"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/


const calc = (x) => {
return  x[0] + x[1] + x[2]
}
console.log(calc([2,3,5]))

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const test = (y) => {
    if ((y[0] === 1 || y[0] === 3) && (y[0] === 1 || y[1] === 3)) {
        return true
    } else {
        return false
    }
}

console.log(test([2,2]))
 

//10)Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

const test2 = (y) => {
    if ((y[0] !== 1 || y[0] !== 3) && (y[1] !== 1 || y[1] !== 3)) {
        return true
    } else {
        return false
    }
}

console.log(test2([3,1]))


// 11) Create a function to find the longest string from a given array of strings.

let S = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper",
"Gregorio Samsa, svegliandosi una mattina da sogni agitati, si trovò trasformato, nel suo letto, in un enorme insetto immondo. Riposava sulla schiena, dura come una corazza, e sollevando un poco il capo vedeva il suo ventre arcuato, bruno e diviso in tanti segmenti ricurvi",
"Ma la volpe col suo balzo ha raggiunto il quieto Fido. Quel vituperabile xenofobo zelante assaggia il whisky ed esclama: alleluja! Aquel vituperable xenófobo apasionado prueba su güisqui y exclama: ¡Aleluya! Ma la volpe col suo balzo ha raggiunto il quieto Fido."]

let longString = () => {
 let longestString = S[0]

 for( let i = 0; i < S.lenght; i++) {
     let currentString = S[i];
     if(currentString.length > longestString.length) {
         longestString = currentString
     }
 }

 return longestString

}

console.log(longString())

// 12)
// Create a function to find the types of a given angle.
// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
// 13)
// Create a function to find the index of the greatest element of a given array of integers
// 14)
// Create a function to get the largest even number from an array of integers.
// 15)
// Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
// 16)
// Create a function to check from two given integers, whether one is positive and another one is negative.
// 17)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
// 18)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
// 19)
// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 20) Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
