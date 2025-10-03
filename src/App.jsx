// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Start from "./HomeComponent/Start";
import Login from "./Login";
import Signup from "./Signup";
import User from "./UserComponent/User";
import Admin from "./AdminComponent/Admin";
import Health from "./HomeComponent/Health";
import Investment from "./HomeComponent/Investment";
import Term from "./HomeComponent/Term";
import FamilyHealth from "./HomeComponent/FamilyHealth";
import Car from "./HomeComponent/Car";
import TwoWheeler from "./HomeComponent/TwoWheeler";
import HomeInsurance from "./HomeComponent/HomeInsurance";
import Termplan from "./UserSubComp/Termplan";
import Receipt from "./UserSubComp/Reciept";
import Payment from "./UserSubComp/Payment";
import History from "./UserComponent/History";
import Healthplan from "./UserSubComp/Healthplan";

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [userData, setUserData] = useState(null);

  // ✅ NEW: store insurance requests
  const [requests, setRequests] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/term" element={<Login />} />
        <Route path="/health" element={<Login />} />
        <Route path="/investment" element={<Login />} />
        <Route path="/car" element={<Login />} />
        <Route path="/two-wheeler" element={<Login />} />
        <Route path="/family-health" element={<Login />} />
        <Route path="/home" element={<Login />} />
        <Route path="/start" element={<Start/>} />

        {/* ✅ Pass requests to Admin/User */}
        <Route path="/user/*" element={<User requests={requests} />} />
        <Route path="/admin/*" element={<Admin requests={requests} setRequests={setRequests} />} />

        <Route path="/term1" element={<Term setUserData={setUserData} />} />
        <Route path="/health1" element={<Term setUserData={setUserData} />} />
        <Route path="/investment1" element={<Investment />} />
        <Route path="/car1" element={<Car/>} />
        <Route path="/two-wheeler1" element={<TwoWheeler/>} />
        <Route path="/family-health1" element={<Term setUserData={setUserData} />} />
        <Route path="/home1" element={<Term setUserData={setUserData} />} />

        <Route path="/term-plan" element={<Termplan userData={userData} setSelectedPlan={setSelectedPlan} requests={requests} setRequests={setRequests} />} />
        <Route path="/payment" element={<Payment userData={userData} selectedPlan={selectedPlan} />} />
        <Route path="/receipt" element={<Receipt userData={userData} selectedPlan={selectedPlan} />} />
       <Route path="/history" element={<History userData={userData} />} />
        <Route path="/health-plan" element={<Healthplan userData={userData} setSelectedPlan={setSelectedPlan} requests={requests} setRequests={setRequests} />} />
      </Routes>
    </Router>
  );
}

export default App;
