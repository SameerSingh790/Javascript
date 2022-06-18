const arr = [4,6,5,7,55,55,55,7,8,9,9]
let num;
      for(let i =0;i=arr.length;i++){
        
        for(let j =0;j=arr.length;j++){
            if(arr[i] == arr[j]){
                num++
            }
        }
      }

console.log(num)


// const arr1=[5,5,5,5,5,5,5,6,6,7,8,9,4,6,2];
// let mf = 1;
// let m = 0;
// let item;
// for (let i=0; i<arr1.length; i++)
// {
//         for (let j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m; 
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(`${item} ( ${mf} times ) `) ;




