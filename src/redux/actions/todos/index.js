export const todoActionTypes = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};

export const addTodo = (todo) => ({
  type: todoActionTypes.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: todoActionTypes.REMOVE_TODO,
  payload: id,
});

export const updatedTodo = (data) => ({
  type: todoActionTypes.UPDATE_TODO,
  payload: data,
});
