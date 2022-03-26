//การสร้าง function แบบไม่มีการรับ parameter
function wakeup(){
    console.log("Hey wakeup now!!");
}

/****************************************************/
//การสร้าง function แบบมีการรับ parameter

function sayHello(name){
    console.log("Hello " + name);
}

/****************************************************/
//การสร้าง function แบบมี parameter หลายตัว
function calArea(w,h){
    var area = w * h;
    return area;
}

//การเรียกใช้งาน
wakeup();
sayHello("Kanom");
console.log( calArea(5,5) + " ตารางเมตร " );


/****************************************************/
//การเก็บ function ไว้ในตัวแปร (Expressions) (function ไร้นาม) (Anonymous function)
var action = function(a,b){
    return a * b;
}
var result = action(4,3);
console.log( action(3,3) );
console.log(result);