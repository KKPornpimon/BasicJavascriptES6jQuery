//การสร้างข้อมูลแบบ object
var person = {
    firstname: "Kanom",
    lastname: "Warn",
    age: 20,
    gender: "Female",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}

//การเข้าถึง หรือ การเรียกใช้งาน
//Method 1
//objectName.propertyName
console.log(person.firstname);

//Method 2
//objectName["propertyName"]
console.log( person["lastname"] );

//Method 3
//objectName.methodName()
console.log( person.fullname() );

//object Nested เป็นการซ้อนกันของ object มากกว่า 1 ชั้น
var user = {
    id: "1",
    email: "john@gmail.com",
    personInfo:{
        names: "John",
        address:{
            line1: "255 Nonburi",
            line2: "183 Dindaeng",
            city: "BKK",
            zipcode: "10400"
        }
    }
}

//การเข้าถึง object มากกว่า 1 ชั้น
console.log( user.personInfo );
console.log( user.personInfo.names );
console.log( user.personInfo.address );
console.log( user.personInfo.address.city );