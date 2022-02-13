import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { AiOutlineFileSearch } from "react-icons/ai";

const EmptyTodo = () => {
  return (
    <CardContainer>
      <CardBody>
        <StyledIcon />
        <StyledText>Nothing added into list so far...</StyledText>
      </CardBody>
    </CardContainer>
  );
};

export default EmptyTodo;

const CardContainer = styled(Card)`
  height: 400px;
  text-align: center;
`;

const CardBody = styled(Card.Body)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const StyledIcon = styled(AiOutlineFileSearch)`
  font-size: 160px;
  color: #808080;
  margin-bottom: 20px;
`;

const StyledText = styled.p`
  font-size: 20;
  color: #808080;
`;
