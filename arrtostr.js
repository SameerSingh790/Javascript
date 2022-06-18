const arr_to_str =(array,x)=>{
    return array.join(x)
}

console.log(arr_to_str(["Sameer","Rahul","Rajan","Shivam"],"+"))
console.log(arr_to_str(["Sameer","Rahul","Rajan","Shivam"],"-"))
console.log(arr_to_str(["Sameer","Rahul","Rajan","Shivam"],"/"))
console.log(arr_to_str(["Sameer","Rahul","Rajan","Shivam"],"'"))
console.log(arr_to_str(["Sameer","Rahul","Rajan","Shivam"],","))