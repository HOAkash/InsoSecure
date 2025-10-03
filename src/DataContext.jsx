import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);

  // store policies globally
  const [policies, setPolicies] = useState([
    // initial default policies
    { id: 1, title: "Term Insurance", path: "/term1", bg: "term2.jpeg" },
    { id: 2, title: "Health Insurance", path: "/health1", bg: "health.jpeg" },
    { id: 3, title: "Investment Plan", path: "/investment1", bg: "invest.jpeg" },
    { id: 4, title: "Car Insurance", path: "/car1", bg: "car.jpeg" },
    { id: 5, title: "Two-Wheeler", path: "/two-wheeler1", bg: "bike2.jpg" },
    { id: 6, title: "Family Health", path: "/family-health1", bg: "family2.jpeg" },
    { id: 7, title: "Home Insurance", path: "/home1", bg: "home1.jpeg" },
  ]);

  return (
    <DataContext.Provider value={{ requests, setRequests, policies, setPolicies }}>
      {children}
    </DataContext.Provider>
  );
};
