// let insan=["Mert","Kırkar",30]

// console.log(insan[0])



// let insan ={
//     // key: value

//     firstName:"Mert",
//     lastName:"Kırkar",
//     age:30,
//     greet: function(){
//         console.log("Merhaba JavaScript")


//     },
// }
// console.log(insan.age)
// console.log(insan.lastName)
// insan.greet()

// function topla(x,y){
//     console.log(x+y);
//     return x+y;
   

// }

// topla(100,5);

// let toplamSonuc = (x,y) => x+y;
// console.log(toplamSonuc(50,60))


// let cars= ["Mercedes","BMW","Volvo","Audi"]
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i])
// }

// cars.forEach((car) => console.log(car));

let numbers=[10,20,50,15,35]
let numbers2=numbers.map(myFunction);

function myFunction(num){
    return num+2;
}
numbers2.forEach((num)=> console.log(num))




