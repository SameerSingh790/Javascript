
const Arrange = (Name)=>{
let Name_Array = Name.split('');
let SORT = Name_Array.sort()
const After_SORT = SORT.join('')
return console.log(`Before Sort = ${Name} After Sort = ${After_SORT}`)
}

Arrange("Hello Moto")
