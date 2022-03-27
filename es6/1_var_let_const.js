//ปัญหาของการใช้ var
// var names = "John";
// {
//     var names = "Jeny";
//     console.log(names);
// }

// function a(){
//     var names = "Jeny";
//     console.log(names);
// }
// console.warn(names);

/************************************************************/
//ปัญหาอื่นๆที่เกิดจาก var
// var msg = ['Hello','JS','ES2015'];
// for(var i = 0; i <= msg.length;i++){
//     console.warn(i);
//     // console.warn(msg);

//     setTimeout(function(){
//         console.warn(msg[i]);
//     }, 1000)
// }


/**************************** ตัวอย่างการใช้ let ********************************/
// var fullname;
// var fullname;
// console.log(fullname);

// let fullname;
// let fullname;
// console.log(fullname);

// let names = "John";
// {
//     let names = "Jeny";
//     console.log(names);
// }
// console.log(names);

/**************************** ตัวอย่างการใช้ const ********************************/
// const firstname = "Kanomwarn"
// console.log(firstname)

const person = {}
person.name = "Kanom"
person.email = "kk@gmail.com"

console.log(person)
