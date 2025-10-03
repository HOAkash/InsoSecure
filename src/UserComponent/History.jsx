import React, { useEffect, useState } from "react";
import "./History.css";

function History({ userData }) {
  const [userRequests, setUserRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userData?.name) {
      fetch(`http://localhost:5000/api/requests`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch history");
          return res.json();
        })
        .then((data) => {
          setUserRequests(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching history:", err);
          setLoading(false);
        });
    }
  }, [userData]);

  if (loading) return <p>Loading history...</p>;

  return (
    <div className="history-container">
      <h2>Your Policy History</h2>

      {userRequests.length === 0 ? (
        <p>No policies found.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Policy Name</th>
              <th>Company</th>
              <th>Premium</th>
              <th>Discount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userRequests.map((req) => (
              <tr key={req._id}>
                <td>{req.plan.planName}</td>
                <td>{req.plan.companyName}</td>
                <td>{req.plan.monthlyPremium}</td>
                <td>{req.plan.discount}</td>
                <td className={`status ${req.status.toLowerCase()}`}>
                  {req.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default History;
