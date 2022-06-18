// let arr = [1,2,3,4,5,6];
// let arr1 = 45;

// console.log(Array.isArray(arr))
// console.log(Array.isArray(arr1))

//or using function

const ARRAY_or_NOT = (A)=>{
    if(Array.isArray(A)){
        return console.log(`Is array`)
    }
    else{
        return console.log(`Not an array`)
    }
}

ARRAY_or_NOT([4,6,2,4,7,9,5]);
ARRAY_or_NOT(4)

