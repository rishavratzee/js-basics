


//Factory functions

function createCircle(radius){
    //Object Oriented Programming
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };

}

//Consttructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);




