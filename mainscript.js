//Sample simpleArraySum -> Output :31
let sar = [1, 2, 3, 4, 10, 11 ]

//-------//sample 01 function simpleArraySum(ar) {}
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
function simpleArraySum(sar) {
  return sar.reduce((soma,a) => {return soma+a})
} 
console.log(simpleArraySum(sar))
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


//-------------------------------------------------------------------------
//Sample A Very Big Sum
//Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
// ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
// Output: 5000000015

const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
function aVeryBigSum(arr) {
  return arr.reduce((soma, a) => {return soma+a})
 }

 console.log(aVeryBigSum(arr))

 //or 
//  function aVeryBigSum(arr) {
//   let soma = 0
//    for(let a of arr){
//      soma +=a
//    }return soma
//  } 
//  console.log(aVeryBigSum(arr))