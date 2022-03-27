// Ex การสร้าง Class ใน Javascript
class Person{
    //สร้าง constructor
    constructor (name){
        this.name = name
    }

    sayHi(){
        console.log('Hi, My name is ' + this.name)
    }

    get gender(){
        return this._gender
    }

    set gender(g){
        this._gender = g
    }
}

//การสร้าง object หรือ instance
const p = new Person('Kanomwarn')
console.log(p.name)
p.sayHi()

p.gender = "Female"
console.log(p.gender)

