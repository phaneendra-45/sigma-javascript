/* Answer1*/
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);
/* Answer2*/
let number=287152;
let count=0;
let copy=number;
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}

console.log(count);

/* Answer3*/
let number3=287152;
let sum=0;
let copy3=number3;
while(copy3>0){
    let digit=copy3%10;
    sum+=digit;
    copy3=Math.floor(copy3  /10);
}
console.log(sum);
/* Answer4*/
let n=5;
let factorial=1;
for(let i=1;i<=n;i++){
    factorial*=i;
}
console.log(`factorial of ${n} is ${factorial}`);
/* Answer5*/
let arr5=[2,5,10,4,2,7,1,9];
let largest=0;
for(let i=0;i<arr5.length;i++){
    if(largest<arr5[i]){
        largest=arr5[i];
    }
}
console.log(largest);
