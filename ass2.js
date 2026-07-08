/* answer1 */
let arr = [7,9,0,-2];
let n=3;
let ans=arr.slice(0,n);
console.log(ans);
/* answer2 */
let ans2=arr.slice(arr.length-n);
console.log(ans2);
/* answer4 */
let str="ApNaCoLlEgE";
let idx=3;
if(str[idx]==str[idx].toLowerCase()){
    console.log("character is lowercase");
}else{
    console.log("character is not lowercase");
}
/* answer6 */
let arr6=["hello",'a',23,64,99,-6];
let item=64;
if(arr6.indexOf(item)!=-1){
    console.log("element exists in array");
}else{
    console.log("element doesn't exist in array");
}
