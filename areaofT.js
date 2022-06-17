const square = (S1,S2,S3)=>{
    if(S2 == null && S3 == null){
        const Ans = (Math.sqrt(3)/4)*S1*S1;
        const result = Math.round(Ans)
        return console.log(`Area Of Equilateral Triangle is ${result}`)
    }

    if(S3 == null)
    {
        const Ans = (S1 * S2)/2;
        const result = Math.round(Ans);
        return console.log(`Area Of Right Angle Triangle is ${result}`)
    }

    else{
        const S = (S1+S2+S3)/2
        const Ans = Math.sqrt(S*(S-S1)*(S-S2)*(S-S3));
        const result = Math.round(Ans);
        return console.log(`Area Of Isoceles Triangle is ${result}`)
    }

}

square(45)
square(45,56)
square(45,78,62)