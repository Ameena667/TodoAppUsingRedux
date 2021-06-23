const ADD_TODO = "ADD_TODO";

export const addTodo = (todoName) => ({
  type: ADD_TODO,
  todo: todoName,
});

const DELETE_TODO = "DELETE_TODO";

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id: id,
});

const EDIT_TODO = "EDIT_TODO";

export const editTodo = (id, val) => ({
  type: EDIT_TODO,
  id: id,
  val: val,
});

const INVERT_DONE = "INVERT_DONE";

export const invertDone = (id) => ({
  type: INVERT_DONE,
  id: id,
});
