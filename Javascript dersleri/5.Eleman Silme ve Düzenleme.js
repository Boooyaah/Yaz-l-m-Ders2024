let myList =["JS","C#","c++","Tailwind","MySQL","Java"]
let body=document.querySelector("body")
let myBtn=document.querySelector("button")
let list=document.querySelector(".list")

// myList.forEach((e)=>{

//     let myElement=`<li>${e}</li>`
//     list.insertAdjacentHTML(`beforeend`,myElement)

// })

// myBtn.addEventListener("click",()  => {
//     let myH1=`<h1>Programlama Dilleri</h1>`;

//     body.insertAdjacentHTML("afterbegin",myH1)



// })

// list.children[0].removeAttribute("class") //! classını falan siliyor.
// console.log(list)

 list.classList.add("yeni")    //! yeni class ekleme
 list.classList.remove("list") //!  class silme
 console.log(list)


 console.log(list.classList.contains("yeni"))



