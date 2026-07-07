let num = 20;
if (num % 10 === 0) {
    console.log("good");
} else {
    console.log("bad");
}
/*
let name = prompt("please enter your name");
let age = prompt("please enter your age");
alert(`${name} is ${age} years old.`);
*/
let quarter = 1;
switch (quarter) {
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Not a quarter");
}

let str = "apples";
if ((str[0] == 'a' || str[0] == 'A') && (str.length > 5)) {
    console.log("golden string");
} else {
    console.log("not a golden string");
}

let a = 5;
let b = 18;
let c = 13;
if(a>b){
    if(a>c)
        {
        console.log(a,"is largest");
        }
     else{
        console.log(c,"is largest");
    }
}
 else{
    if(b>c)
        {
        console.log(b,"is largest");
        }
        else{
        console.log(c,"is largest");
        }
    }
