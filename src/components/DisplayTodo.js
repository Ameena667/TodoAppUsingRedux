import React, { useState } from "react";
import { deleteTodo, editTodo, invertDone } from "../actions/actionslist";
import "./todostyles.css";
import { connect } from "react-redux";
import { Input, Button, Checkbox, Radio } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const DisplayTodo = (props) => {
  const [editFlag, setEditFlag] = useState(-1);
  const [editPlaceholderData, setEditPlaceholderData] = useState("");
  const [display, setDisplay] = useState("T");

  const onSave = (text, index) => {
    if (text !== "") {
      props.dispatch(editTodo(index, text));
      setEditFlag(-1);
    }
  };
  const onInvert = (index) => {
    props.dispatch(invertDone(index));
  };
  return (
    <div div="tmaticui">
      <Radio.Group active size="large" className="btngroup">
        <Button onClick={() => setDisplay("T")}>All</Button>
        <Button onClick={() => setDisplay(false)}>Active</Button>
        <Button onClick={() => setDisplay(true)}>Completed</Button>
      </Radio.Group>
      <br />
      <br />
      {props.todos.map((todo, index) => {
        return (
          <div key={index}>
            {display === todo.done || display === "T" ? (
              <>
                <Checkbox
                  checked={todo.done}
                  onClick={() => {
                    onInvert(index);
                  }}
                />{" "}
                {editFlag === index ? (
                  <>
                    <Input
                      value={editPlaceholderData}
                      style={{ width: "50%" }}
                      onChange={(e) => setEditPlaceholderData(e.target.value)}
                    />
                    <Button
                      icon={<CheckOutlined />}
                      onClick={() => onSave(editPlaceholderData, index)}
                    />
                    <Button
                      icon={<CloseOutlined />}
                      onClick={() => setEditFlag(-1)}
                    />
                  </>
                ) : (
                  <Input
                    //placeholder={todo.todo}
                    value={todo.todo}
                    style={{ width: "60%" }}
                  />
                )}
                <Button
                  icon={<EditOutlined />}
                  onClick={() => {
                    setEditFlag(index);
                    setEditPlaceholderData(todo.todo);
                  }}
                />
                <Button
                  icon={<DeleteOutlined />}
                  onClick={(e) => {
                    props.dispatch(deleteTodo(index));
                  }}
                />
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
export default connect(mapStateToProps)(DisplayTodo);
