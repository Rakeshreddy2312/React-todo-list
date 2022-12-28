import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const getInputData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const sumbitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    navigate("/");
    console.log(user);
  };
  const loadUser = async () => {
    const results = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(results.data);
    console.log(results.data);
  };
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h2>Edit User</h2>
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
            value="Update User"
            className="form-control form-control-lg btn btn-warning my-3"
          />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
