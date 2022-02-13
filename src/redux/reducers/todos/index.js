import dayjs from "dayjs";
import { todoActionTypes } from "../../actions/todos";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case todoActionTypes.ADD_TODO: {
      const newTodo = {
        ...payload,
        id: dayjs(payload.date).format("HHmmss"),
      };
      return {
        ...state,
        data: [...state.data, newTodo],
      };
    }

    case todoActionTypes.REMOVE_TODO: {
      const updatedTodos = state.data.filter((item) => item.id !== payload);
      return {
        ...state,
        data: updatedTodos,
      };
    }

    case todoActionTypes.UPDATE_TODO: {
      const updatedTodos = state.data.map((item) => {
        if (item.id === payload.id) {
          item.completed = payload.completed;
        }
        return item;
      });
      return {
        ...state,
        data: updatedTodos,
      };
    }
    default:
      return state;
  }
};

export default reducer;
