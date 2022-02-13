import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FormControl, Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import dayjs from "dayjs";
import { addTodo } from "../../redux/actions/todos";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setValue(value);
  };

  const resetInput = () => {
    setValue("");
  };

  const onAddTodo = () => {
    if (value) {
      const newTodo = {
        title: value,
        date: dayjs().format(),
        completed: false,
      };
      dispatch(addTodo(newTodo));
      resetInput();
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder="Add new todo (max characters: 100)"
        value={value}
        onChange={onInputChange}
        maxLength="100"
      />
      <StyledAddButton disabled={!value} onClick={onAddTodo}>
        <AddIcon />
      </StyledAddButton>
    </InputContainer>
  );
};

export default TodoForm;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;
`;

const InputField = styled(FormControl)`
  margin-right: 10px;
  :focus {
    box-shadow: none;
  }
`;

const StyledAddButton = styled(Button)`
  :focus {
    box-shadow: none;
  }
`;

const AddIcon = styled(BsPlus)`
  font-size: 20px;
`;
