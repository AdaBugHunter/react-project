import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.course) {
      setError("Please complete all fields.");
      return;
    }

    setError("");
    setSubmitted(formData);
    setFormData({ name: "", email: "", course: "" });
  }

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select a course</option>
          <option value="React Basics">React Basics</option>
          <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Node.js API">Node.js API</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {error && <p>{error}</p>}

      {submitted && (
        <div>
          <h3>Submitted</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Course: {submitted.course}</p>
        </div>
      )}
    </div>
  );
}

export default StudentForm;