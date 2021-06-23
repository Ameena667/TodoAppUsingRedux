import { createStore } from "redux";
import { v4 as uuidv4 } from "uuid";
const initState = {
  todos: [],
};

export const myReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuidv4(), todo: action.todo, done: false },
        ],
      };
    case "DELETE_TODO":
      const todos = [...state.todos];
      todos.splice(action.id, 1);
      return {
        ...state,
        todos: [...todos],
      };
    case "EDIT_TODO":
      let temptodos = [...state.todos];
      temptodos[action.id].todo = action.val;
      //console.log(temptodos);
      return {
        ...state,
        todos: [...temptodos],
      };
    case "INVERT_DONE":
      let inverttodos = [...state.todos];
      inverttodos[action.id].done = !inverttodos[action.id].done;
      return {
        ...state,
        todos: [...inverttodos],
      };
    default:
      return state;
  }
};

const store = createStore(myReducer);
export default store;
