
function SubmitFrom(){

    var fullname = document.myform.fullname.value;
    var address = document.myform.address.value;

    console.log(fullname);
    console.log(address);

    document.getElementById("result").innerHTML=" ชื่อ " + fullname + "<br> ที่อยู่ " + address;
}