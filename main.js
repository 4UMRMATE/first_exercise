const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

// 2)
const table = document.querySelector("#table");

for(let i = 1; i <= 10; i++) {
    table.innerHTML += "<span class='num'></span>"
    let numRef = document.querySelectorAll(".num")[i-1];
    numRef.style.backgroundColor = colorArray[i]
    
    for(let j = 1; j <= 10; j++) {
        numRef.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`
    }
    if(i % 5 == 0) table.innerHTML += "<br>"
}


// 3)
class shape {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
}


class Triangle extends shape {
    constructor(a, b, c) {
        super();
        this.type = "Triangle"
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
}

Object.assign(Triangle.prototype, shape)

let newTriangle = new Triangle(3, 4, 5)

console.log(newTriangle.getType(), newTriangle.getPerimeter(),newTriangle.constructor === Triangle, shape.isPrototypeOf(newTriangle))

// C)
for(let i in Object.keys(newTriangle)) {
    console.log(Object.keys(newTriangle)[i])
}


// D)
Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle())