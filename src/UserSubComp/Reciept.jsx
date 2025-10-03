import React from "react";
import jsPDF from "jspdf";
import "./Receipt.css";

const generateReceipt = (userData, selectedPlan) => {
  const doc = new jsPDF();
  doc.setFont("helvetica");
  doc.setFontSize(22);
  doc.text("Payment Receipt", 105, 20, { align: "center" });

  doc.setFontSize(16);
  let y = 40;
  const lineSpacing = 10;

  doc.text(`Name: ${userData.name}`, 20, y); y += lineSpacing;
  doc.text(`Gender: ${userData.gender}`, 20, y); y += lineSpacing;
  doc.text(`DOB: ${userData.dob}`, 20, y); y += lineSpacing;
  doc.text(`Mobile: ${userData.mobile}`, 20, y); y += lineSpacing;
  doc.text(`Country: ${userData.country}`, 20, y); y += lineSpacing;
  doc.text(`Plan: ${selectedPlan.planName}`, 20, y); y += lineSpacing;
  doc.text(`Company: ${selectedPlan.companyName}`, 20, y); y += lineSpacing;
  doc.text(`Amount Paid: ${selectedPlan.monthlyPremium}`, 20, y); y += lineSpacing;
  doc.text(`Discount: ${selectedPlan.discount}`, 20, y); y += lineSpacing;
  doc.text(`Status: Paid`, 20, y);

  doc.save(`${userData.name}-${selectedPlan.planName}-receipt.pdf`);
};

function Receipt({ userData, selectedPlan }) {
  // ✅ Return early if props are missing
  if (!selectedPlan || !userData) {
    return <div>No data available.</div>;
  }

  const handleSaveRequest = async () => {
    try {
      const requestData = {
        user: userData,
        plan: selectedPlan,
        status: "Pending",
      };

      const res = await fetch("http://localhost:5000/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        throw new Error("Failed to save request");
      }

      console.log("✅ Request saved successfully");
    } catch (err) {
      console.error("❌ Error saving request:", err);
    }
  };

  return (
    <div className="receipt-container">
      <h2>✅ Payment Successful!</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Plan:</strong> {selectedPlan.planName}</p>
      <p><strong>Status:</strong> Paid</p>

      <button
        onClick={async () => {
          generateReceipt(userData, selectedPlan);
          await handleSaveRequest(); // ✅ ensure request is saved
        }}
      >
        📄 Download Receipt & Save
      </button>
    </div>
  );
}

export default Receipt;
