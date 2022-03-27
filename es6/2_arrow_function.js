/********************* function ไร้นาม เวอร์ชั่น ES5 ****************/
var greet = function(names,msg){
    return names + msg
}
console.log( greet(" Kanom "," Warn ") );

/********************* function เวอร์ชั่น ES6 ****************/
//การลดรูป
var arrowGreet = (names,msg) => {
    return names + msg
}
console.log( arrowGreet(" Kanom "," Warn ") );

//การลดรูปลงอีก
var arrowGreet = (names,msg) => names + msg

//การลดรูปต่อไปได้อีก ถ้า function มีการรับเพียง 1 parameter
var arrowGreet = msg => msg

//ตัวอย่าง
var square = x => x * x
console.log( square(3) )