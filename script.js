// console.log(a);
// console.log(b)
// var a=b=5;

console.log('7'+4*5)    //"720" as a string 
console.log('7'*4+5)    //33  //here type conversion will happen becouse when multiplication is there then it convert string to number for compatible data type
console.log("7"-"8"+5)  //4 //when there is - then it will perform type conversion it will convert 7 and 6 to number
console.log("7"-8+5)    //4   //same as above line

const arr=['a','g','d','f','b','u']
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            t=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=t;
        }
    }
}
// arr.sort()
console.log(arr)


const str="jn ii jimkl nknk"
const a=str.split(" ")
console.log(a)

function fact(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(5));

var array = [1, 2, 3, 4, 5]
for(let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000);
}