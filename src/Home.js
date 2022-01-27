import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  /* 오늘 날짜의 요일이 첫 요소가 되는 배열 만들기 : 
   days 배열 속에서 오늘 날짜의 요일을 첫 번째로 추출하고 다음 요일들이 순서대로 오도록 함*/
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  let week_count = new Date().getDay();
  let week_days = days.map((v, i) =>
    days.join("").substr(week_count - 7 + i, 1)
  );

  let navigate = useNavigate();
  const star_count = Array.from({ length: 5 }, (v, i) => i);

  return (
    <Container>
      <Title>내 일주일은?</Title>
      <ListStyle>
        {week_days.map((day, index) => {
          // 각 요일의 평점 박스를 반환할 때마다 랜덤한 정수가 평점이 되도록 함
          let random = Math.floor(Math.random() * 5 + 1);
          return (
            <ItemStyle key={index}>
              <span>{day}</span>
              <div>
                {star_count.map((num, idx) => {
                  return (
                    <Star
                      key={idx}
                      style={
                        // 평점(random한 정수)보다 적은 index를 가진 원은 모두 칠하기
                        idx < random
                          ? { backgroundColor: "#AD9AEE" }
                          : { backgroundColor: "#f9ffff" }
                      }
                    ></Star>
                  );
                })}
              </div>
              <Button
                onClick={() => {
                  navigate(`./Detail/${day}`);
                }}
              ></Button>
            </ItemStyle>
          );
        })}
      </ListStyle>
    </Container>
  );
};

const Container = styled.div`
  padding: 5px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
`;
const ItemStyle = styled.div`
  padding: 5px;
  margin: 5px;
  /* background-color: aliceblue; */
  display: flex;
  span {
    width: 20px;
    height: 20px;
    padding: 10px;
    margin: 2px 10px 0 0;
    border-style: solid;
    border-radius: 5px;
    font-weight: bold;
    font-size: large;
    color: white;
    text-align: center;
  }
  div {
    display: flex;
  }
`;

const Star = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #f9ffff;
  margin: 5px;
  display: flex;
`;

const Button = styled.div`
  width: 0px;
  height: 0px;
  border-left: 40px solid #6a5acd;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  margin: 5px;
  display: flex;
  cursor: pointer;
`;

export default Home;
