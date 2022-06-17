// const Base = 12;
// const height = 45;

// result = (Base * height)/2;
// console.log(result);

const square = (S1,S2,S3)=>{
    if(S2 == null && S3 == null){
        const result = (Math.sqrt(3)/4)*S1*S1;
        return Math.round(result)
    }

    if(S3 == null)
    {
        const result = (S1 * S2)/2;
        return Math.round(result);
    }

    else{
        const S = (S1+S2+S3)/2
        const result = Math.sqrt(S*(S-S1)*(S-S2)*(S-S3));
        return Math.round(result);
    }

}

console.log(square(45))
console.log(square(45,56))
console.log(square(45,78,62))