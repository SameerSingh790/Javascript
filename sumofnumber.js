const Resursion = (N)=>{
    if(N>0){
        return N + Resursion(N-1);
    }
    else {
        return N
    }

  }

const result = Resursion(5);
console.log(result)