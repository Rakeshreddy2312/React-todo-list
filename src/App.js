import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import NotFound from "./components/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        {/* <NotFound /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/AddUSer" element={<AddUser />} />
          <Route exact path="/EditUser/:id" element={<EditUser />} />
          <Route exact path="/viewUser/:id" element={<ViewUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
