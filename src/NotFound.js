import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFound = (props) => {
  let navigate = useNavigate();
  return (
    <Container>
      <Title>⛔ 잘못된 경로입니다 ⛔</Title>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </BackButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 50px;
`;

const Title = styled.h2`
  color: red;
  text-align: center;
`;

const BackButton = styled.button`
  width: 100%;
  background-color: #a0afff;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default NotFound;
