import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actionslist";

import { Input } from "antd";
const { Search } = Input;
const Add = Search;

const AddTodo = (props) => {
  console.log("from addtodo", props);
  const onAdd = (value) => {
    if (value !== "") {
      props.dispatch(addTodo(value));
    }
  };
  return (
    <div style={{ width: "80%" }}>
      <Add
        placeholder="input todo task "
        allowClear
        enterButton="Add"
        size="large"
        onSearch={(value) => {
          onAdd(value);
        }}
      />
      <br />
      <br />
    </div>
  );
};

export default connect()(AddTodo);
