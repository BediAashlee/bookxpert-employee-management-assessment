import { useState, useEffect } from "react";

const EmployeeForm = ({ onSave, editingEmployee, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    state: "",
    isActive: true,
    image: "",
  });

  useEffect(() => {
    if (editingEmployee) setForm(editingEmployee);
  }, [editingEmployee]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 150 * 1024) {
      alert("Please upload an image smaller than 150 KB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!form.name || !form.gender || !form.dob || !form.state) {
      alert("All fields are required");
      return;
    }

    onSave(form);
    onClose();
  };

  return (
    <div className="employee-form">
      <h3>{editingEmployee ? "Edit" : "Add"} Employee</h3>

      <input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <select
        value={form.gender}
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input
        type="date"
        value={form.dob}
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
      />

      <select
        value={form.state}
        onChange={(e) => setForm({ ...form, state: e.target.value })}
      >
        <option value="">Select State</option>
        <option value="MP">Madhya Pradesh</option>
        <option value="MH">Maharashtra</option>
        <option value="KA">Karnataka</option>
        <option value="DL">Delhi</option>
        <option value="TN">Tamil Nadu</option>
      </select>

      <input type="file" accept="image/*" onChange={handleImage} />

      {form.image && (
        <img src={form.image} alt="Profile Preview" className="image-preview" />
      )}

      <select
        value={form.isActive ? "active" : "inactive"}
        onChange={(e) =>
          setForm({ ...form, isActive: e.target.value === "active" })
        }
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <div className="form-actions">
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EmployeeForm;
