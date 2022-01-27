import React from "react";
import Home from "./Home";
import Detail from "./Detail";
import NotFound from "./NotFound";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 각 페이지의 요일을 URL 파라미터로 사용하기 위해 /:week_day 사용 */}
          <Route path="/detail/:week_day" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 400px;
  min-height: 60vh;
  background-color: #d2d2ff;
  padding: 15px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
export default App;
