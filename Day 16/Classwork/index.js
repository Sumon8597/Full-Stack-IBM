// let name = "Synchronous";

// console .log(name)

// let surName ="code";

// console.log(surName);

// setTimeout(()=>{
//     console.log("Synchoronous syncing");
// }, 3000);

// console.log(name,surName)


// let myPromise = new Promise((resolve, reject)=>{
//     let flag = true;
    
//     if(flag){
//         resolve("promise is resolved with green flag")
//     }else{
//         reject("promise is reject with red flag")
//     }
// })
// console.log(myPromise)

function fetchdata(){
    let data = fetch("https://fakestoreapi.com/products");
    console.log(data);
}
fetchdata();