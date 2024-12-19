import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await axios.post(
        "http://localhost:3000/send-email",
        formData
      );
      if (response.status === 200) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Send Message
          </button>
          {status && <p className="text-center text-sm mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Form;
