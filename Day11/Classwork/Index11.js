


// let obj = {
//     name:"sumon pal",
//     class:"B Tech",
//     myFunction:function(){
//         console.log(this);
//         console.log(this.name,this.class)
//         console.log("I am a meyhod inside object")

//     },
//     subjects:["DBMS","CN","AI","ML","DL"],
//     newobj:{
//         1:80,
//         nestedFunction:function(){
//             console.log("I am nested method of object")
//         }
//         nestedNewObj:{
//             myMethod:function(){
//                 console.log("Another nested method")
//             }
//         }
//     }
// }
// obj.myFunction();
// console.log(obj.myFunction());


// condition

// let num1=10, num2=20;
// if(num1<num2){
//     console.log(`${num1}) is less than ${num2}`)
// }else{
//     console.log(`${num1}) is not less than ${num2}`)
// }



// let n=15;
// if(n%3==0 && n%5==0){
//     console.log("Fizz Buzz");
// }
// if(n%3 ==0){
//     console.log("Fizz");
// }else if(n%5==0){
//     console.log("Buzz");
// }

// let num=30;

// for(let i=3; i<=num; i=i+3){
//     console.log(i);
// }



// let arr=[1,2,3,4,5,6,7,8,9,10]

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i],i);
// }

// let str ="sumon pal";
// for(let i=0; i<str.length;i++){
//     console.log(str[i]);
// }



//while loop

let arr=[1,2,3,4,5,6,7];
for(let i=1;i<arr.length;i++){
    if(i%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}