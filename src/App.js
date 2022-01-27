import React from "react";
import Home from "./Home";
import Detail from "./Detail";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:week_day" element={<Detail />} />
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
