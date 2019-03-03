//Sample simpleArraySum -> Output :31

let ar = [1, 2, 3, 4, 10, 11 ]

//-------
//sample 01 function simpleArraySum(ar) {}
// function simpleArraySum(ar) {
//   let soma = 0 
//   for(let i = 0; i < ar.length; i++){
//   soma += ar[i]
//   }
//   return soma
// }

//-------//sample 02 function simpleArraySum(ar) {} with forOf

// function simpleArraySum(ar) {
//   let soma = 0
//   for(let a of ar){
//     soma +=a
//   }return soma
// } 
// console.log(simpleArraySum(ar))

//-------//sample 03 function simpleArraySum(ar) {} with reduce

function simpleArraySum(ar) {
  return ar.reduce((soma,a) => {return soma+a})
} 
console.log(simpleArraySum(ar))
//we use the reduce to get all the values of an array and make them unique


//-------------------------------------------------------------------------

// Sample the compareTriplets 
// a = [17, 28, 30] | b = [99, 16, 8]
// Comparing the 0th  elements, 17<99  so [b] receives a point. 
// Comparing the  1st and 2st  elements, 28>16 and 30>8 so [a] receives two points. 
// The return array is [2,1]

function compareTriplets(a, b) {


}