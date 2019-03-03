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
//-------
//sample 02 function simpleArraySum(ar) {} with forOf
// function simpleArraySum(ar) {
//   let soma = 0
//   for(let a of ar){
//     soma +=a
//   }return soma
// } 
// console.log(simpleArraySum(ar))
//-------
//sample 03 function simpleArraySum(ar) {} with 
function simpleArraySum(ar) {
  return ar.reduce(function(a,b) {return a+b})
} 
console.log(simpleArraySum('The result of simpleArraySum  is ' + ar))


//------------------------------------------------------------------------------