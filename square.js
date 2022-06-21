let arr = [5,6,7,500,9,4,2,5]

const Result = arr.map((elem)=>{
     return elem**2
}).reduce((accumulator,element)=>{
    return accumulator += element;
})
console.log(Result)



