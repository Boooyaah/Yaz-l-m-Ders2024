// let myList=document.querySelector(".list")



// let myElement=` <li> JS </li>`;

// myList.insertAdjacentHTML("beforeend" ,  myElement);
// console.log(myList)

// ! 1. ekleme tarzı 

let myList =["Js","Boostrap","Java","Tailwind","Angular"]

let ul=document.querySelector(".list")
let myBtn=document.querySelector("button")
let body=document.querySelector("body")

myList.forEach((e)=>{
let myElement  =`<li>${e}</li>`

ul.insertAdjacentHTML("beforeend",myElement)

})

 myBtn.addEventListener("click",()=>{
    let myH1 =`<h1>Programlama Dilleri</h1>`
    body.insertAdjacentHTML("afterbegin",myH1)



 })


