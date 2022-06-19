let arr = [5,6,7,8,9,4,2,5]
let Num = [];
let Result;

const Mulpiplier = (array)=>{
    arr.forEach(ele=>{
        Num.push(ele**2)
    })
    console.log(Num)
    Num.reduce((accmulutor,Curele)=>{
        return accmulutor += Curele;
    })
}

console.log(Mulpiplier())

