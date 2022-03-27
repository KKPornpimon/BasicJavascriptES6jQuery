/******************* ES5 *********************/
function sayHi(names){
    var names = names || "Chai"
    console.log("Hi " + names)
}
sayHi()
sayHi("Kanom")

/******************* ES6 *********************/
function sayHi(names = "Chai"){
    console.log("Hi " + names)
}
sayHi()
sayHi("Kanomwarn")