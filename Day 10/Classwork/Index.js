let str = "sv University";

console.log(str.length);

console.log(str.length-1)

console.log(str[2]);


console.log(str[str.length-1]);

console.log(str[2]);


console.log(str.length-1);


//str[0]="R"

console.log(str)



let arr=[1,2,3,"sumon",true,false,null,undefined,""];

console.log(arr[arr.length-2]);

console.log(arr[3]);

arr.push("hellow");
console.log(arr);

arr.pop();
console.log(arr)



let obj ={
    sumon:{classname:"B.tech",roll:99,subject:["nm","dbms","dsa","bm"]},
    sumona:{classname:"B.tech",roll:100,subject:["nm","dbms","dsa","bm"]},
    1:undefined
}

console.log(obj.sumon)
console.log(obj.sumona.subject[3]);


let name = "Sumon pal";
let Class = "B Tech";
let hobbies = ["Games","singing"]

let newobj ={
    name,Class,hobbies
}
console.log(newobj);

let ans=[1,2,3,[9,4,6,[5,1,9]]];

console.log(ans[3][3][0])





let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}
console.log(superHeroes[1].villains[0].health);