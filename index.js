


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

const circle1 = createCircle(1);
console.log(circle1)


