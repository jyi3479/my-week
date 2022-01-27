import React from "react";
import styled from "styled-components";

const Star = (props) => {
  const [count, setState] = React.useState(0);
  const star_count = Array.from({ length: 5 }, (v, i) => i);
  const starCount = (params) => {
    setState(params.idx + 1);
  };

  // 숫자 키보드 입력 이벤트 : onKeyPress 로 속성값으로 접근했을 때는 input 박스에서만 적용되어 eventlistener 방법으로 했다.
  const keyEvent = (e) => {
    setState(e.key);
    // console.log(e.key);
  };

  React.useEffect(() => {
    document.addEventListener("keypress", keyEvent);
    return () => {
      document.removeEventListener("keypress", keyEvent);
      //
    };
  }, []);
  // useEffect() 두번째 인자에 count를 쓰면 count가 바뀔 때마다 업데이트 된다. 한번만 return위가 실행되기
  //  위해 빈 인자를 넣어줬다.

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
