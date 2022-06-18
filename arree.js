const enddigit = (array,n)=>{
   if(array == null){
     return void 0;
   }
   if(n == null){
    
     return array[array.length-1];
   }
   
   return array.slice(Math.max(array.length-n,0))
   

   
}

console.log(enddigit([4,6,2,2],2))