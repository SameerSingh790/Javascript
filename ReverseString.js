const Reverse = (Sentence)=>{
let Array_1 = Sentence.split('');
let Reverse_String = Array_1.reverse();
let result = Reverse_String.join('');
return console.log(result);
}

Reverse("hello")
