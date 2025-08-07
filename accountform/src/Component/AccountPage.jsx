import React, { useState } from 'react';

function Card() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState([]);

  function handleFname(e) {
    setFname(e.target.value);
  }<br/> 

  function handleLname(e) {
    setLname(e.target.value);
  }<br/>
   
  function handleAge(e) {
    setAge(e.target.value);
  }<br/>
  
function handleGender(e) {
    setGender(e.target.value);
  }

  function handleHobby(e) {
    if (e.target.checked) {
      setHobbies(hobbies.concat(e.target.value));
    } else {
      setHobbies(hobbies.filter(function (hob) {
        return hob !== e.target.value;
      }));
    }
  }

  function showAlert() {
    alert(
      "First Name: " + fname + "\n" +
      "Last Name: " + lname + "\n" +
      "Age: " + age + "\n" +
      "Gender: " + gender + "\n" +
      "Hobbies: " + hobbies.join(", ")
    );
  }

  return (
    <div>
      <h2>Create Account</h2>

      <input placeholder="First Name" onChange={handleFname} /><br /><br/>

      <input placeholder="Last Name" onChange={handleLname} /><br /><br/>
       
      <input placeholder="Age" onChange={handleAge} /><br /><br/>

      <input type="radio" name="gender" value="Male" onChange={handleGender} /> Male
      <input type="radio" name="gender" value="Female" onChange={handleGender} /> Female<br />

     
      <label><input type="checkbox" value="Music" onChange={handleHobby} /> Music</label><br/>
      <label><input type="checkbox" value="Football" onChange={handleHobby} /> Football</label><br/>
      <label><input type="checkbox" value="Boxing" onChange={handleHobby} /> Boxing</label><br/>
      <label><input type="checkbox" value="Swimming" onChange={handleHobby} /> Swimming</label><br /><br/>

      <button onClick={showAlert}>Create Account</button>
    </div>
  );
}

export default Card;
