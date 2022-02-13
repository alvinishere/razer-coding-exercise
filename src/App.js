import React from "react";
import styled from "styled-components";
import TodoForm from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Container>
      <Title>List of Todos</Title>
      <Body>
        <TodoForm />
        <TodoList />
      </Body>
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 40px auto;
  @media only screen and (min-width: 768px) {
    margin: 60px auto;
  }
`;

const Body = styled.div`
  padding: 0px 20px;
  max-width: 600px;
  margin: auto;
`;

const Title = styled.h1`
  font-style: italic;
  font-size: 28px;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
  }
`;
