// src/components/EmployeeLeavePage.js
import React from "react";
import LeaveRequestForm from "./LeaveRequestForm";
import LeaveRequestList from "./LeaveRequestList";

const EmployeeLeavePage = ({ onSubmit, requests }) => (
  <div>
    <LeaveRequestForm onSubmit={onSubmit} />
    <LeaveRequestList requests={requests} />
  </div>
);

export default EmployeeLeavePage;