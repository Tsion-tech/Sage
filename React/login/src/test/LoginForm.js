import { useState } from "react";


export default function App() {
  const [countryname, setCountryName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedInCountry, setLoggedInCountry] = useState(null); 

  function login(countryname, password) {
    if (!countryname || !password) {
      setMessage("Please enter both countryname and password");
      return;
    }

    setLoading(true);
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (country) => country.name.common.toLowerCase() === countryname.toLowerCase()
        );

        if (!found) {
          setMessage(" Login Failed: Country  not found");
          setLoggedInCountry(null);
        } else if (password !== "1234") {
          setMessage(" Login Failed: Incorrect password");
          setLoggedInCountry(null);
        } else {
          setMessage(` Login Successful! Welcome ${found.name.common}`);
          setLoggedInCountry(found);
        }
      })
      .catch(() => {
        setMessage(" Error fetching data");
        setLoggedInCountry(null);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="login-container">
      <h1>Login</h1>

      <div className="form-group">
        <label>Country Name</label>
        <input
          type="text"
          value={countryname}
          onChange={(e) => setCountryName(e.target.value)}
          placeholder="Enter country name "
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password (1234)"
        />
      </div>

      <button
        className="submit-btn"
        onClick={() => login(countryname, password)}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <p
        style={{
          marginTop: "25px",
    fontWeight:"bolder",
    color: "orange", 
    textAlign: "center"
        }}
      >
        {message}
      </p>

      
      {loggedInCountry && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "10px",
            border: "2px solid #d117a6",
            backgroundColor: "#f9f0ff",
            textAlign: "center",
          }}
        >
          <img
            src={loggedInCountry.flags.png}
            alt={loggedInCountry.name.common}
            style={{ width: "150px", borderRadius: "8px", marginBottom: "10px" }}
          />
          <h2>{loggedInCountry.name.common}</h2>
          <p>Official Name: {loggedInCountry.name.official}</p>
        </div>
      )}
    </div>
  );
}
