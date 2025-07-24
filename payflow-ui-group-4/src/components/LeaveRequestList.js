import React from "react";

const LeaveRequestList = ({ requests }) => (
  <div style={{ maxWidth: 600, margin: "auto", marginTop: 30 }}>
    <h2>My Leave Requests</h2>
    <table border="1" cellPadding="8" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Start</th>
          <th>End</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {requests.length === 0 ? (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>No requests yet.</td>
          </tr>
        ) : (
          requests.map((req, idx) => (
            <tr key={idx}>
              <td>{req.leaveType}</td>
              <td>{req.startDate}</td>
              <td>{req.endDate}</td>
              <td>{req.reason}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

export default LeaveRequestList;