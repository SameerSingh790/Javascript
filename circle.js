//area of a circle = pi R**2
//perimeter of circle is 2 pi r

function Circle(Radius){
    this.Radius = Radius;
}

Circle.prototype.Area = function(){
    return Math.round(Math.PI * this.Radius * this.Radius);
}

Circle.prototype.Perimeter = function(){
    return Math.round(2 * Math.PI * this.Radius);
}

const cle = new Circle(4)

console.log(`Perimeter of circle is ${cle.Perimeter()}`)
console.log(`Area of circle is ${cle.Area()}`)