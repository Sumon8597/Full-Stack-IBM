document.getElementById("parent").style.backgroundColor="#fae8e0"

document.getElementById("parent").style.border="1 px solid black"

document.getElementById("parent").style.height="300px"

document.getElementById("parent").style.width="80%"



let element=document.createElement("button")
element.innerText="submit"
element.style.backgroundColor="#b6e2d3"
element.style.padding="10px"
document.getElementById("parent").append(element)


var num =10;
console.log(num)

num = 15

console.log(num)

function myFunction(){
    console.log(num)
}

myFunction()