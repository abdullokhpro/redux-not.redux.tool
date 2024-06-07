import React, { useState } from "react";
import "./AllUsers.css";
import Users from "../../components/users/Users";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";

function AllUsers() {
  let users = useSelector((state) => state.addUser.value);
  return (
    <>
      <div className="container">
        <Users data={users} />
      </div>
    </>
  );
}

export default AllUsers;
