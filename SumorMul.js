const Sumormul = (array)=>{
     console.log(array.reduce((accum,elem)=>{
       return accum += elem;
    }))

     console.log(array.reduce((accum,elem)=>{
        return accum *= elem
    }))
}


Sumormul([1,5,2,3,5,7])