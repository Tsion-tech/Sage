import React, { useState } from 'react';

function AccountPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hobbies, setHobbies] = useState([]);




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

      <input placeholder="First Name" onChange={(e) => {
        setFname(e.target.value);
      }} /><br /><br />

      <input placeholder="Last Name" onChange={(e)=> setLname(e.target.value)} /><br /><br />

      <input placeholder="Age" onChange={(e)=> setAge(e.target.value)} /><br /><br />

      <input type="radio" name="gender" value="Male" onChange={(e)=> setGender(e.target.value)} /> Male
      <input type="radio" name="gender" value="Female" onChange={(e)=> setGender(e.target.value)} /> Female<br />


      <label><input type="checkbox" value="Music" onChange={handleHobby} /> Music</label><br />
      <label><input type="checkbox" value="Football" onChange={handleHobby} /> Football</label><br />
      <label><input type="checkbox" value="Boxing" onChange={handleHobby} /> Boxing</label><br />
      <label><input type="checkbox" value="Swimming" onChange={handleHobby} /> Swimming</label><br /><br />

      <button onClick={showAlert}>Create Account</button>
    </div>
  );
}

export default AccountPage;
