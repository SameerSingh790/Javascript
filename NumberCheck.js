const CheckNumber = (NUM)=>{
    if(NUM < 0){
        return console.log(`Number Is Negative`);
    }

    else if(NUM > 0){
        return console.log(`Number Is Positive`)
    }

    else{
        return console.log("zero")
    }
}

CheckNumber(0)