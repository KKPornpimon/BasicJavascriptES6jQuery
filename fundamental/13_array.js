//Basic Array
var firstname = ["John","Joe","Jack","Jan"];
var fruits = new Array("Apple","Banana","Orange","Mango");

console.log(firstname[0]);
console.log(firstname[1],firstname[2]);

//เปลี่ยนตัวสมาชิก
firstname[1] = "Jeny";
console.log(firstname[1]);
firstname[4] = "Johny";
console.log(firstname[4]);

//เช็คชนิดข้อมูล
console.log(typeof(firstname));
console.log(firstname);
console.log(fruits);
console.log(firstname.length);
console.log(fruits.length);

//loop สมาชิก
for(var i = 0; firstname[i]; i++){
    console.log(firstname[i]);
}

//loop แบบ function forEach (callback function) จะ loop เฉพาะสิ่งที่เป็น function 
fruits.forEach(myFruit);
function myFruit(value){
    console.log(value)
}
