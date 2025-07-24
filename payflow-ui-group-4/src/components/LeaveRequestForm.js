import React, { useState } from "react";

const LeaveRequestForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ leaveType: "", startDate: "", endDate: "", reason: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Request Leave</h2>
      <label>
        Leave Type:
        <select name="leaveType" value={form.leaveType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Sick">Sick</option>
          <option value="Casual">Casual</option>
          <option value="Earned">Earned</option>
        </select>
      </label>
      <br />
      <label>
        Start Date:
        <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" name="endDate" value={form.endDate} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Reason:
        <input type="text" name="reason" value={form.reason} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default LeaveRequestForm;