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

// tip1:  conditional (ternary) operator >> statement ? trueThing : falseThing
let a = [17, 28, 30]
let b = [99, 16, 8]

// function compareTriplets(a, b) {
//     const hits = [0,0]
//     for (let i = 0; i < 3; i++ ){   
//       if(a[i] > b[i]){
//         hits[0]++
//       }else if (a[i] < b[i]){
//         hits[1]++
//       } else {
//         hits[1]=hits[1]
//       } 
//     }
//     return hits
//   }
  

function compareTriplets(a, b) {
  const hits = [0,0]
  for (let i =0; i < 3; i++ ){
    a[i] > b[i]
    ? hits[0]++ : a[i] < b[i]
      ? hits[1]++ : hits[1] = hits[1]
  }
  return hits
}
console.log(compareTriplets(a,b))