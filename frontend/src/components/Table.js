import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = ({ onUpdateUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:5000/api/users");

    if (data.status) {
      setUsers(data.data);
    }
  };

  const deleteUser = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:5000/api/users/${id}`
    );

    if (data.status) {
      alert(data.message);
      getUsers();
    }
  };

  return (
    <>
      <div className="contact-list shadow p-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Hobbies</th>
              <th scope="col">Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <th scope="row">
                  <input type="checkbox" name="" id="" />
                </th>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.hobbies}</td>
                <td>
                  <div
                    className="btn btn-dark btn-sm mx-1"
                    onClick={() => onUpdateUser(user)}
                  >
                    Update
                  </div>
                  <div
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn btn-dark btn-sm mt-3 shadow">Send Email</div>
    </>
  );
};

export default Table;
