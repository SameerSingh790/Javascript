const Add = (array1,array2)=>{
let result = [];
let ctr = 0;
let x = 0;

while (ctr < array1.length && ctr < array2.length){
    result.push(array1[ctr]+array2[ctr])
    ctr++;
}

if (ctr === array1.length) 
{
   for (x = ctr; x < array2.length; x++)   {
     result.push(array2[x]);
   }
 } 
 else
 {
 for (x = ctr; x < array1.length; x++) 
   {
     result.push(array1[x]);
   }
 }
 return result;
}

console.log(Add([1,2,3,4,5,6,2,3,4,5,2],[1,2,3,4,231,14,2]))