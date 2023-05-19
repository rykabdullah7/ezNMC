import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./page/login/Login";
import SignUp from "./page/signup/SignUp";
import Meds from "./page/meds/Meds";
import MedDetail from "./page/medDetail/MedDetail";
import Doctor from "./page/doctor/Doctor";
import Cart from "./page/cart/Cart";
import Appointment from "./page/appointment/Appointment";
import History from "./page/history/History";
import DoctorProfile from "./page/doctorProfile/DoctorProfile";
import StudentProfile from "./page/studentProfile/StudentProfile";
import AppointmentForm from "./page/appointmentForm/AppointmentForm";
import Order from "./page/order/Order";
import Emergency from "./page/emergency/Emergency";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <Routes>
        <Route exact path="/meds" element={<Meds />} />
      </Routes>
      <Routes>
        <Route
          exact
          path="/meds/:id"
          element={<MedDetail />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/emergency"
          element={<Emergency />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/cart"
          element={<Cart />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/order"
          element={<Order />}
        />
      </Routes>
      <Routes>
        <Route exact path="/doctor" element={<Doctor />} />
      </Routes>
      <Routes>
        <Route
          exact
          path="/doctor/:id"
          element={<AppointmentForm />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/appointment"
          element={<Appointment />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/appointment/:id"
          element={<Appointment />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/history"
          element={<History />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/doctorProfile"
          element={<DoctorProfile />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/studentProfile"
          element={<StudentProfile />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
