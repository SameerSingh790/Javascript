
function Cylinder(cyl_height,cyl_diameter){
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function(){
    const radius = this.cyl_diameter/2;
    return Math.PI * radius * radius * this.cyl_height;
}

const cyl = new Cylinder(7,9)

console.log(cyl)
console.log(cyl.Volume().toFixed(4))
