let form =document.getElementById("userForm");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let name =document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phonenumber=document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let confirmpassword =document.getElementById("confirmpassword").value;
    let obj={
        name,email,phonenumber,password,confirmpassword
    }
    if(obj.password==confirmpassword){
        return alert("Password not match");
    }

    let tr =document.createElement("tr")

    td1=document.createElement("td")
    td1.innerText=obj.name;

    td2=document.createElement("td")
    td2.innerText=obj.email;

    td3=document.createElement("td")
    td3.innerText=obj.phonenumber;

    td4=document.createElement("td")
    td4.innerText=obj.password;

    td5=document.createElement("td")
    td5.innerText=obj.confirmpassword;

   tr.append(td1,td2,td3,td4,td5);

   document.getElementById("tbody").append(tr);
});