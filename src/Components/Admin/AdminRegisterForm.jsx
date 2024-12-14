import React, { useState } from "react";
import axios from "axios";

const AdminRegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    phone: "", // Replacing password with phone
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // Transform phone into password field before sending to backend
    const dataToSend = {
      ...formData,
      password: formData.phone, // Use phone as password
    };
    delete dataToSend.phone; // Remove phone from the payload

    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/register", dataToSend);
      setMessage(response.data.message);
      setFormData({
        username: "",
        fullName: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #f1f1f1",
        borderRadius: "15px",
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        color: "#333",
        fontFamily: "'Poppins', sans-serif",
        position:'absolute',
        bottom:"50px",
        right: "10px"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        🌟 ContactUs  🌟
      </h2>

      {message && (
        <div
          style={{
            marginBottom: "15px",
            padding: "10px",
            color: "#fff",
            backgroundColor: "#28a745",
            border: "1px solid #1e7e34",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}
      {error && (
        <div
          style={{
            marginBottom: "15px",
            padding: "10px",
            color: "#fff",
            backgroundColor: "#dc3545",
            border: "1px solid #bd2130",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="username"
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #f1f1f1",
              borderRadius: "5px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="fullName"
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #f1f1f1",
              borderRadius: "5px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #f1f1f1",
              borderRadius: "5px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="phone"
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #f1f1f1",
              borderRadius: "5px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#ff6f61",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(255, 111, 97, 0.5)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e05243")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6f61")}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default AdminRegisterForm;
