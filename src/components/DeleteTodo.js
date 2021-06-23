import React from "react";
import { connect } from "react-redux";
//import { deleteTodo } from "../actions/actionslist";

const DeleteTodo = (props) => {
  console.log("hi");
  console.log("from deletetodo", props);
  return <div style={{ width: "70%", marginLeft: "30px" }}></div>;
};

export default connect()(DeleteTodo);
