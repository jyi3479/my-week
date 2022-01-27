import React from "react";
import styled from "styled-components";

const Star = (props) => {
  // 평점을 클릭/입력할 때마다 바뀌는 count 변수 값을 useState를 통해 관리함
  const [count, setState] = React.useState(0);
  const star_count = Array.from({ length: 5 }, (v, i) => i);

  /* 평점 클릭 이벤트에서 실행할 함수 
  : 몇 번째 원을 클릭했는지를 매개변수로 받은 후, state 업데이트 */
  const starCount = (params) => {
    setState(params.idx + 1);
  };

  /* 숫자 키보드 입력 이벤트에서 실행할 함수
   : 이벤트가 발생한 곳(몇 번재 원을 클릭했는지)의 key 값으로 state 업데이트*/
  const keyEvent = (e) => {
    setState(e.key);
  };

  /* useEffect() 두번째 인자에 [count]를 쓰면 count 값이 바뀔 때마다 업데이트 된다. 
      두 번째 매개변수로 []를 입력하여 첫 렌더링에만 useEffect가 호출되고 재호출 되지 않도록 하였다.*/
  React.useEffect(() => {
    document.addEventListener("keypress", keyEvent);
    return () => {
      document.removeEventListener("keypress", keyEvent);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {star_count.map((num, idx) => {
        return (
          <Circle
            onClick={() => {
              starCount({ idx });
            }}
            key={idx}
            style={
              // 클릭한 원의 순서(= 평점)보다 이전에 있으면 색칠하여 평점 입력 기능 구현
              idx < count
                ? { backgroundColor: "#AD9AEE" }
                : { backgroundColor: "#f9ffff" }
            }
          ></Circle>
        );
      })}
    </div>
  );
};

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #ddd;
  margin: 5px;
  display: flex;
  cursor: pointer;
`;

export default Star;
