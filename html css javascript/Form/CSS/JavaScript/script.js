let bulb="off";
const newDiv = document.createElement("h1")

// document.getElementById("btClick").addEventListener("click",insertHTML)
$("#btClick").click(insertHTML)

function insertHTML(){
    document.getElementById("chengMe").style.fontSize="35px"
    document.getElementById("chengMe").style.color="red"
 
    // document.getElementById("chengMe").style.display="none"
    
    newDiv.innerText="added element"
    document.body.appendChild(newDiv);
}
function turnon(){
    document.getElementById("bulb").src="pic_bulbon.gif"
    buld="on";
}
    
    function turnoff(){
    document.getElementById("bulb").src="pic_bulboff.gif"
    buld="off";
    

}
function toggle(){
    if(bulb=="on"){
        document.getElementById("bulb").src="pic_bulboff.gif"
        bulb="off"
    }else{
       document.getElementById("bulb").src="pic_bulbon.gif"
        bulb="on"; 
    }
}


 $('#box').slideUp(2000).slideDown(2000) .css("background-color","brown").css("width","100px").css("height","100px")
//  $('#box').css("width","100px");
//  $('#box').css("height","100px");

// $('#box').css("background-color","brown")
//  .css("width","400px")
//  .css("height","100px")
//  .css("justify-content","center")
//  .css("font-size","10px")
//  .css("margin","30px")
 
 


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
let day=1
switch(day){
    case 1:
        console.log("Monday")
        break;
         case 2:
        console.log("Tuesday")
        break;
         case 3:
        console.log("Wednesday")
        break;
         case 4:
        console.log("Thursday")
        break;
         case 5:
        console.log("Friday")
        break;
         case 6:
        console.log("Saturday")
        break;
         case 7:
        console.log("Sunday")
        break;
}
let i=0
while(i<3){
    console.log(i);
    i++;
}
for(let i=0;i<5;i++) {
    console.log(i);
}

let books=["herry poter","love up to death","me and u","the power","think and grow rich"]
for(let book of books){

    console.log(book)
}

for(let key in person){
    console.log(key,person[key])
}

