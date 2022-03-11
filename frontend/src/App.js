import React, { useState } from "react";
import logo from "./logo.svg";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const [isForm, setIsForm] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const onUpdateUser = (user) => {
    user.update = true;
    setUserDetails(user);
    setIsForm(!isForm);
  };

  const onAddUser = () => {
    setUserDetails({});
    setIsForm(!isForm);
  };
  return (
    <div className="App">
      <div className="container mt-4">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="pb-2">Contact List</h4>
          <div
            className="btn btn-dark btn-sm shadow"
            onClick={() => (isForm ? setIsForm(!isForm) : onAddUser())}
          >
            {isForm ? "Go Back" : "Add Contact"}
          </div>
        </div>
        {isForm ? (
          <Form userDetails={userDetails} />
        ) : (
          <Table onUpdateUser={onUpdateUser} />
        )}{" "}
      </div>
    </div>
  );
}

export default App;
