//foreeach

// let arr =[1,2,3,4,6,7,8,9,10,12,13,14,16,18];

// arr.forEach((el,index)=>{
//     console.log(el,index);

// let ans =arr.forEach((el,i)=>{
//     return el;

// let ans = arr.map((el,i)=>{
//     return (el,i)
// });

// console.log(ans);

//Filter

// let output = arr.filter((el,i)=>{
//     // return el%2==0 && el !==5
//     return el%5==0;
// }).map((el,index)=>{
//     return el*2;
// //  }).reduce((acc,el)=>{
// //     return acc+el;
// }).map((el,index)=>{
//     return el*2;
// })
// console.log(output)

//reduce

// let output = arr.reduce((acc,el)=>{
//     return acc+el
// },);// accumulator 

// console.log(output)


// let arr = [3,5,1,8,5,34,90,67,45,34,89,100,23]

// let ans =arr.sort((a,b)=>{return b-a});
// console.log(ans);

let data=[
    {name:"watch", price:2000,dese:"good watch", rating:4.5},
    {name:"shoe", price:1200,dese:"good", rating:4.5},
    {name:"car", price:1000000,dese:"very good", rating:5},
    {name:"phone", price:30000,dese:"good", rating:4},
    {name:"laptop", price:60000,dese:"good watch", rating:4},
    {name:"headphone", price:1000,dese:" very good ", rating:4},
    {name:"laptop bag", price:1500,dese:"very good", rating:4},
]
// data.sort((a,b)=>{
//     return a.price-b.price;
// })

// console.log(data);
data. Storage((a,b)=>{
    let nameA=a.name.toUppercase();
    let nameB=b.name.toUppercase();

    if(nameA=a.name){
        return -1;
    }

    if(nameA>nameB){
        return 1;
    }
})
console.log(data);