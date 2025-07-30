let bulb="off";
function insertHTML(){
    document.getElementById("chengMe").style.fontSize=""
    document.getElementById("chengMe").style.color=""
}
function turnon(){
    document.getElementById("bulb").style.fontSize=""
}

const person={
    firstName:"Tsion",
    lastNmae:"yeshetila",
    age:20,
    height:"1.6",
    address:{
        country:"Ethiopia",
        city:"Addis Ababa",
        subCity:"Lafto",
        woreda:"1",
    },
array:[2,4,6,8,10],
fullName:function(){
    return this.firstName +""+ this.lastName
}
}

console.log("first name:"+person.firstName)
console.log("country:"+person.firstName.country)
console.log("array:"+person.array)
console.log("function:"+person.fullName())

const array=[
    {name:"estif",age:25},
    {name:"naol",age:17},
    {name:"rahel",age:22},
    {name:"abel",age:22},
]
console.log("array of objects"+ " "+ array[1].name)

const pate=new Date(2025-29-7)
const late=new Date(2025-28-7)
console.log("pate:",pate)

const Today=new Date(2025-29-7)
const Someday=new Date(2025-28-7)
console.log("Today:",Today)

let text;
if(Someday>Today){
    text="Today is before january 14,2010";
}else{
     text="Today is after january 14,2010";
}
console.log(text);

// (10>5)? console.log("true"):
// console.log("false")

let value
(4>5)?value=true:value=false
console.log("Ternary:",value??"the value of value is undefined!")


