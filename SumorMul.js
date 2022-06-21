const arr = [1,2,3,4]

const sum = arr.reduce((accum,elem)=>{
    return accum += elem;
})

const pro = arr.reduce((accum,elem)=>{
    return accum *= elem;
})

console.log(sum)
console.log(pro)