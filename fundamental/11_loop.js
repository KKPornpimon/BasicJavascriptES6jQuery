// For Loop
var num;
for(num = 1; num <= 10; num++){
    if(num > 5){
        console.log("Middle");
        break;
    }
    console.log(num);
}

// While Loop
var i = 0;
while(i <= 5){
    console.log(i);
    i++;
}

//Star pattern
var a = 0;
while(a <= 6){
    console.log('*'.repeat(a));
    a++;
}

var j = 6;
while(j){
    console.log('*'.repeat(j));
    j--;
}