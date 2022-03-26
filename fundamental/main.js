// document.write("Hello Javascript");
// alert("Hello Every one");
// document.write("<br>");

//method prompt
// var msg = prompt("กรุณาป้อนชื่อ","");
// console.log(msg);
// document.write(msg);

//condition operator
// var age = prompt("กรุณาป้อนอายุของคุณ","0");

// document.write("<br>");
// var vote = (age <= 18)?"too young":"too old";
// console.log(vote);

var age = 12;
if(age <= 10){
  var x = "Children";
}else if(age <= 20){
    var x = "Young";
}
else{
    var x = "Old";
}

console.log(x);

//ฟังก์ชั่นดึงวันที่
var day = new Date().getDay();
console.log(day);
var date = new Date().getDate();
console.log(date);

switch(day){
    case 0:
        console.log("Sunday");  
            break;
    case 1:
        console.log("Monday");  
            break;
    case 2:
        console.log("Tuesday");  
            break;
    case 6:
        console.log("Saturday");  
        document.body.style.backgroundColor="violet";
            break;
    default:
        console.log("Invalid day");  
            break;
}
//Day1 Complete
/////////////////////////////////////////////////////////////////////////////////