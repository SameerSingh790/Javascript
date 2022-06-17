var Name = "noon"
var length = Name.length;

console.log(Name)

let arr = Name.split('');
const rev = arr.reverse();

const New = rev.join('');
console.log(New)

if(Name == New)
{
    console.log("This word Is Palidrome")
}
else{
    console.log("Not a palidrome")
}

///What i learn ffrom this
//1.Convert String alphabets into an array using split() method.
//2.Convert Array into strings using Join() method.
