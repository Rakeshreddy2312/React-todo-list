import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3001/users")
      .then((resolve) => {
        //console.log(resolve.data);
        //setUser(resolve.data.reverse());
        loadUser();
      })
      .catch((error) => {
        console.log("something went wrong");
      });
  };
  useEffect(getData, []);
  const loadUser = async () => {
    let result = await axios.get("http://localhost:3001/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };
  return (
    <div className="container">
      <h1 className="display-4">HOME tab</h1>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Eser Name</td>
            <td>Email</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.map((item, indx) => {
              return (
                <tr key={indx}>
                  <td>{indx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary me-2"
                      to={`/viewUser/${item.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary me-2"
                      to={`/EditUser/${item.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger me-2"
                      onClick={() => {
                        deleteUser(item.id);
                      }}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
