const OBJ1 = {
    Name : "Sameer",
    Age : 45,
    
    get : function(){
        console.log(this.Name,this.Age);
    }
}

OBJ1.get()

const OBJ2 = new Object({
    FName : "Sameer",
    MAge : 45,
    
    get : function(){
        console.log(this.FName,this.MAge);
    }
})

OBJ2.get()

const OBJ3 = {
    FName : "Sameer",
    MAge : 45,
    
    get(){
        console.log(this.FName,this.MAge);
    }
    }

    OBJ3.get()