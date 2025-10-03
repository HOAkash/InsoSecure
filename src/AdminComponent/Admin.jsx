import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Admin.css";

function Admin() {
  const [requests, setRequests] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [newPolicy, setNewPolicy] = useState({ title: "", path: "", bg: "" });

  // Load data
  useEffect(() => {
    fetch("http://localhost:5000/api/requests")
      .then((res) => res.json())
      .then((data) => setRequests(data));

    fetch("http://localhost:5000/api/policies")
      .then((res) => res.json())
      .then((data) => setPolicies(data));
  }, []);

  // Accept/Reject
  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/requests/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setRequests(
      requests.map((req) =>
        req._id === id ? { ...req, status } : req
      )
    );
  };

  // Add Policy
  const handleAddPolicy = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/policies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPolicy),
    });
    const data = await res.json();
    setPolicies([...policies, data]);
    setNewPolicy({ title: "", path: "", bg: "" });
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <nav>
        <Link to="/admin">Requests</Link> |{" "}
        <Link to="/admin/add-policy">Add Policy</Link> |{" "}
        <Link to="/start">Back to Home</Link>
      </nav>

      <Routes>
        {/* Requests */}
        <Route
          path="/"
          element={
            <div>
              <h2>Insurance Requests</h2>
              {requests.length === 0 ? (
                <p>No requests yet.</p>
              ) : (
                <table border="1" cellPadding="10" style={{ marginTop: "10px" }}>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Plan</th>
                      <th>Mobile</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((req) => (
                      <tr key={req._id}>
                        <td>{req.user?.name || "N/A"}</td>
                        <td>{req.plan?.planName || "N/A"}</td>
                        <td>{req.user?.mobile || "N/A"}</td>
                        <td>{req.status}</td>
                        <td>
                          {req.status === "Pending" && (
                            <>
                              <button onClick={() => updateStatus(req._id, "Accepted")}>Accept</button>
                              <button onClick={() => updateStatus(req._id, "Rejected")}>Reject</button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          }
        />

        {/* Add Policy */}
        <Route
          path="/add-policy"
          element={
            <div>
              <h2>Add New Policy</h2>
              <form onSubmit={handleAddPolicy} className="policy-form">
                <div>
                  <label>Policy Name:</label>
                  <input
                    type="text"
                    value={newPolicy.title}
                    onChange={(e) =>
                      setNewPolicy({ ...newPolicy, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label>Path:</label>
                  <input
                    type="text"
                    value={newPolicy.path}
                    onChange={(e) =>
                      setNewPolicy({ ...newPolicy, path: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label>Background Image URL:</label>
                  <input
                    type="text"
                    value={newPolicy.bg}
                    onChange={(e) =>
                      setNewPolicy({ ...newPolicy, bg: e.target.value })
                    }
                    required
                  />
                </div>
                <button type="submit">Add Policy</button>
              </form>

              <h3>Existing Policies</h3>
              {policies.length === 0 ? (
                <p>No policies yet.</p>
              ) : (
                <ul>
                  {policies.map((p) => (
                    <li key={p._id}>
                      <strong>{p.title}</strong> ({p.path})
                    </li>
                  ))}
                </ul>
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Admin;
