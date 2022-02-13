import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { BsCheckCircleFill, BsX, BsCircle } from "react-icons/bs";
import dayjs from "dayjs";
import EmptyTodo from "../EmptyTodo";
import { removeTodo, updatedTodo } from "../../redux/actions/todos";

const dataMap = (data) => data.sort((a, b) => dayjs(b.date) - dayjs(a.date));

const TodoCard = () => {
  const { data } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCheckClick = (id, completed) => {
    dispatch(
      updatedTodo({
        id,
        completed,
      })
    );
  };

  const onRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      {!data.length ? (
        <EmptyTodo />
      ) : (
        <ListContainer>
          {dataMap(data).map((todo) => (
            <CardContainer body key={todo.id}>
              <DateText>
                {todo.completed
                  ? "Completed"
                  : `Added on ${dayjs(todo.date).format("DD MMM YYYY, h:m A")}`}
              </DateText>
              <CardBody>
                <CheckContainer>
                  {todo.completed ? (
                    <CheckedFillIcon
                      onClick={() => onCheckClick(todo.id, false)}
                    />
                  ) : (
                    <BsCircle onClick={() => onCheckClick(todo.id, true)} />
                  )}
                </CheckContainer>
                <TitleText completed={todo.completed}>{todo.title}</TitleText>
              </CardBody>
              <DeleteContainer>
                <BsX onClick={() => onRemoveTodo(todo.id)} />
              </DeleteContainer>
            </CardContainer>
          ))}
        </ListContainer>
      )}
      <CountText>Total: {data.length} items</CountText>
    </>
  );
};

export default TodoCard;

const ListContainer = styled.div`
  max-height: 600px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
    @media only screen and (min-width: 768px) {
      width: 6px;
    }
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #a9a9a9;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #c0c0c0;
  }
`;

const CardContainer = styled(Card)`
  position: relative;
  margin-bottom: 10px;
`;

const DateText = styled.p`
  color: grey;
  font-size: 10px;
  font-weight: 300;
  margin-bottom: 4px;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
`;

const CheckContainer = styled.div`
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

const CheckedFillIcon = styled(BsCheckCircleFill)`
  color: #0d6efd;
`;

const TitleText = styled.p.attrs()`
  flex: 1;
  word-wrap: break-word;
  color: ${(props) => (props.completed ? "grey" : "black")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
  margin: auto 20px;
`;

const DeleteContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 20px;
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

const CountText = styled.p`
  color: grey;
  font-size: 12px;
  font-style: italic;
  text-align: right;
  margin: 10px auto 0px auto;
`;
