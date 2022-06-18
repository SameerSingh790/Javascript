const factorial = (NUM)=>{
   if(NUM > 1 )
   {
    return NUM * factorial(NUM - 1);
   }

   else{
    return NUM;
   }
}

const result = factorial(10);
console.log(result)