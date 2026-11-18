import React, { useState } from "react";
function App() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
  };
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password: </label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h3>Form Data Preview:</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
    </div>
  );
}
export default App;
