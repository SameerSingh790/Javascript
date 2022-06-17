
const Quadratic = (a,b,c)=>{
let discriminant = (b*b) - 4*a*c;

if(discriminant > 0)
{
    let root1 = (-b + Math.sqrt(discriminant))/2*a;
    let root2 = (-b - Math.sqrt(discriminant))/2*a;
   return console.log(`${root1},,${root2}`)
}

else if(discriminant == 0)
{
    let root = -b/2*a;
    return console.log(root);
}

else
{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    return console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}
}

Quadratic(11,5,20)

