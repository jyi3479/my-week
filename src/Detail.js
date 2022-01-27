import React from "react";
import styled from "styled-components";
import Star from "./Star";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { week_day } = useParams();
  console.log(week_day);
  let navigate = useNavigate();

  return (
    <Container>
      <Title>
        <WeekBox>{week_day}요일</WeekBox>
        평점 남기기
        <p>Click circle or Press number</p>
      </Title>

      <Review>
        <Star />
      </Review>
      <BackButton
        onClick={() => {
          navigate("/");
        }}
      >
        평점 남기기
      </BackButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  color: white;
  text-align: center;
`;

const Review = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
`;

const WeekBox = styled.span`
  background-color: #aab9ff;
  border-radius: 5px;
  padding: 2px;
  margin: 5px;
  color: white;
  /* width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: orange;
  margin: 5px;
  display: flex; */
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

export default Detail;
