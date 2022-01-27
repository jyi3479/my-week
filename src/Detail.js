import React from "react";
import styled from "styled-components";
import Star from "./Star";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  // useParams 훅을 사용하여 url 파라미터에 접근
  const { week_day } = useParams();
  // navigate 객체에 접근하여 뒤로가기 버튼이 특정 페이지로 이동할 수 있도록 함
  let navigate = useNavigate();

  return (
    <Container>
      <Title>
        <WeekBox>{week_day}요일</WeekBox>
        평점 남기기
        <p>Click circle or Press number</p>
      </Title>

      <Review>
        {/* 평점 입력 컴포넌트를 새로 만들어서, 평점을 클릭할 원 5개를 보여주고 클릭 및 키보드 이벤트를 관리하도록 하였음. */}
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
