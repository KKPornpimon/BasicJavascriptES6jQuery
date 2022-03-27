/********************* ES5 ***********************/
// var scores = [55,56,82]
// var s1 = scores[0]
// var s2 =scores[1]
// console.log(s1,s2)

/********************* ES6 Destructuring ***********************/
const scores = [55,56,82]
const [s1,s2,s3] = scores
console.log(s1,s2,s3)

//Return object
function createUser(){
    return {names:"Kanom", age: 35}
}
const {names,age} = createUser()
console.log(names,age)