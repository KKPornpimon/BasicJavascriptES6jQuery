// //Ex1
// //Spread
// const arr = [4,5,6]
// const append = [1,2,3,arr]
// console.log(append)

//Ex2
const arr = [4,5,6]
const append = [1,2,3,...arr] //Spread operator
console.log(append)

//Ex3
const arr1 = ['a','b','c']
const arr2 = ['d','e','f']
// arr1.push(arr2)
arr1.push(...arr2)
console.log(arr1)

//Ex4
function add(x,y,z){
    return x + y + z
}
const number = [1,2,3]
// const sum = add(1,2,3)
// const sum = add(number) //undefined (not working)
const sum = add(...number) //Spread operator
console.log(sum)

/**********************************************************/
//Rest parameter
function howManyArgs(...args){
    console.log(args.length);
    console.log(args)
}
howManyArgs()
howManyArgs(4)
howManyArgs(4,8,7,6)

//Ex1
function multiply(multiplier,...array) { 
    console.log(array);
    return array.map(e => multiplier * e)
}
const result = multiply(2,10,20,30)
console.log(result)