import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [shoes, setShoes] = useState([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [editId, setEditId] = useState(null);
  const [currentScreen, setCurrentScreen] = useState("list"); 

  
  useEffect(() => {
    fetch("http://localhost:5000/shoes")
      .then(res => res.json())
      .then(data => setShoes(data));
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      fetch(`http://localhost:5000/shoes/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, brand }),
      })
        .then(res => res.json())
        .then(updated => {
          setShoes(shoes.map(s => (s.id === editId ? updated : s)));
          resetForm();
        });
    } else {
      fetch("http://localhost:5000/shoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, brand }),
      })
        .then(res => res.json())
        .then(newShoe => {
          setShoes([...shoes, newShoe]);
          resetForm();
        });
    }
  };

  const resetForm = () => {
    setEditId(null);
    setName("");
    setBrand("");
    setCurrentScreen("list");
  };

  const handleEdit = (shoe) => {
    setEditId(shoe.id);
    setName(shoe.name);
    setBrand(shoe.brand);
    setCurrentScreen("add");
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/shoes/${id}`, { method: "DELETE" })
      .then(() => setShoes(shoes.filter(s => s.id !== id)));
  };

  
  if (currentScreen === "add") {
    return (
      <div className="container">
        <h1>{editId ? "Edit Shoe" : "Add Shoe"}</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Shoe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Shoe Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
          <div className="form-buttons">
            <button type="submit" className="btn">
              {editId ? "Update Shoe" : "Add Shoe"}
            </button>
            <button type="button" className="btn cancel-btn" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  
  return (
    <div className="container">
      <div className="top-bar">
        <button className="btn add-btn" onClick={() => setCurrentScreen("add")}>
          + Add
        </button>
      </div>

      <h1>Shoes Collection</h1>

      <div className="grid">
        {shoes.map((shoe) => (
          <div className="card" key={shoe.id}>
            <h2>{shoe.name}</h2>
            <p>{shoe.brand}</p>
            <div className="actions">
              <button className="edit" onClick={() => handleEdit(shoe)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(shoe.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
