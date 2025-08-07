import { useState } from "react";
function LogInPage(){
    const [userName,setUserName]= useState(" ")
    const [firstName,setFirstName]= useState(" ")
    const [lastName,setlasttName]= useState(" ")
  function handelSubmit(e){
e.preventDefault()
console.log("user name:",userName)
alert("user name: "+ userName)
  }
//   const handelSubmit2()=>{

//   }
return(

    <div>
        <h1>Loin Page</h1>
        <form onSubmit={handelSubmit}>
            <div>
                <lable  htmlFor="firstName">First Name</lable>
                <input type="text" id="firstName" placeholder="Enter your first name" name="firstName" required
                onChange={(e)=>{
                    setFirstName(e.target.value)
                }}/>
                <h2>firstName: {firstName}</h2>
                <br/>
                <lable  htmlFor="lastName">Last Name</lable>
                <input type="text" id="lastName" placeholder="Enter your last name" name="lasttName" required
                onChange={(e)=>{
                    setlasttName(e.target.value)
                }}/>
                <h2>lastName: {lastName}</h2>
                <br/>
            <label htmlFor="userName">User Name</label>
            <br/>
            <input type="text" id="username" placeholder="Enter user name" name="username" required
             onChange={(e)=>{
                setUserName(e.target.value)
            }
            }
            />
            <h1>userName: {userName}</h1>
            <button typeof="submit">Submit</button>
            </div>
        </form>
    </div>
);
}
export default LogInPage;