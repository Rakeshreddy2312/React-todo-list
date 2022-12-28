import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios, { formToJSON } from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    //console.log(res.data);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <h2 className="display-5"> User Id :{user.id}</h2>
      <hr />
      <ul type="none" className="list-group">
        <li className="list-group-item my-2">Name : {user.name}</li>
        <li className="list-group-item my-2">Username : {user.username}</li>
        <li className="list-group-item my-2">Email Address: {user.email}</li>
        <li className="list-group-item my-2">Phone Number : {user.phone}</li>
        <li className="list-group-item my-2">Website Name : {user.website}</li>
      </ul>
      <Link className="btn btn-warning form-control mt-5" to="/">
        Back To HOME
      </Link>
    </div>
  );
};

export default ViewUser;
