// //call
// function sayHello(p1, p3) {
//     console.log("p1", p1, p3);
//     return "Hello " + this.name + p1;
// }

// var obj = { name: "Sandy" };

// // sayHello.call(obj);

// // Returns "Hello Sandy"	
// console.log(sayHello.call(obj, "p1", "p2"));

// //appy
// function sayHello(p1, p3) {
//     console.log("p1", p1, p3);
//     return "Hello " + this.name + p1;
// }

// var obj = { name: "Sandy" };

// // sayHello.call(obj);

// // Returns "Hello Sandy"	
// console.log(sayHello.apply(obj, ["p1", "p2"]));


//bind

function sayHello(p1, p2) {
    console.log("p1", p1, p2);
    return "Hello " + this.name + p1;
}

var obj = { name: "Sandy" };

// sayHello.call(obj);

// Returns "Hello Sandy"	
let bindedfun = sayHello.bind(obj, "p1", "p2");

console.log("bindedfun", bindedfun("per1", "par2"));