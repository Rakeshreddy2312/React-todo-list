import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const getInputData = (e) => {
    //e.preventDefault();
    //console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const sumbitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    navigate("/");
    //console.log(user);
  };
  return (
    <div className="container">
      <div className="text-center">
        <h2>Add User</h2>
      </div>
      <form
        onSubmit={(e) => {
          sumbitForm(e);
        }}
      >
        <div>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Your Name"
            className="form-control form-control-lg my-3"
            onChange={(e) => getInputData(e)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter Your Username"
            className="form-control form-control-lg my-3"
            onChange={(e) => getInputData(e)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter Your Email id"
            className="form-control form-control-lg my-3"
            onChange={(e) => getInputData(e)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="Enter Your Name Phone Number"
            className="form-control form-control-lg my-3"
            onChange={(e) => getInputData(e)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="website"
            value={website}
            placeholder="Enter Your Website Name"
            className="form-control form-control-lg my-3"
            onChange={(e) => getInputData(e)}
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add user"
            className="form-control form-control-lg btn btn-primary my-3"
          />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
