import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = ({ userDetails }) => {
  const [values, setValues] = useState({});
  const [isUpdateUser, setIsUpdateUser] = useState(false);

  useEffect(() => {
    setValues({});
  }, []);

  useEffect(() => {
    if (userDetails && userDetails.update) {
      setIsUpdateUser(true);
    }
    setValues(userDetails);
  }, [userDetails]);

  const addUser = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "http://localhost:5000/api/users/add",
      values
    );

    setValues({});

    if (data.status) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();

    const { data } = await axios.put(
      `http://localhost:5000/api/users/update/${values._id}`,
      values
    );

    setValues({});

    if (data.status) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  };

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="contact-form shadow p-3">
      <form onSubmit={isUpdateUser ? updateUser : addUser}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Name"
            name="name"
            value={values.name}
            onChange={onInputChange}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Phone Number
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Phone Number"
            name="phone"
            value={values.phone}
            onChange={onInputChange}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onChange={onInputChange}
            disabled={isUpdateUser ? true : false}
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Hobbies
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter hobbies"
            name="hobbies"
            value={values.hobbies}
            onChange={onInputChange}
            required
          />
        </div>
        <div class="mb-3">
          {isUpdateUser ? (
            <button type="submit" className="btn btn-sm btn-dark">
              Update
            </button>
          ) : (
            <button type="submit" className="btn btn-sm btn-dark">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
