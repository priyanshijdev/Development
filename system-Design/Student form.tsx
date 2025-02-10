import { useState } from "react";
import "./styles.css";

interface StudentData {
  firstName: string;
  email: string;
  dateOfBirth: string;
  grade: string;
}

export default function App() {
  const [formData, setFormData] = useState<StudentData>({
    firstName: "",
    email: "",
    dateOfBirth: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          placeholder="Enter Your Name"
          type="text"
          name="firstName"
          // label="Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label>Email: </label>
        <input
          placeholder="Enter Your Email"
          type="email"
          name="Email"
          // label="Name"
          value={formData.email}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label>DOB:</label>
        <input
          placeholder="Enter Your DOB"
          type="date"
          name="dateOfBirth"
          // label="Name"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label>Grade:</label>
        <select
          id="grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          required
        >
          <option value="">Select Grade</option>
          <option value="9">9th Grade</option>
          <option value="10">10th Grade</option>
          <option value="11">11th Grade</option>
          <option value="12">12th Grade</option>
        </select>
        <br />
        <button> Submit</button>
      </form>
    </div>
  );
}
