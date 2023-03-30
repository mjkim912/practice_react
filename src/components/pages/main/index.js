import React, { useState } from "react";
import { Button, Card } from "antd";

import styled from "styled-components";

export default function Main() {
  return (
    <div style={{ padding: 20 }}>
      <CustomButton>클릭</CustomButton>
      {` `}
      <Button>antd 버튼</Button>
      {` `}
      <TestButton>test 버튼</TestButton>
      <CustomCard title="Default size card" extra={<a href="#">More</a>}>
        <p className="first-content">Card content</p>
        <p className="second-content">Card content</p>
        <p className="third-content">Card content</p>
      </CustomCard>

      <Box color="blue">
        <div className="box-child">
          <div className="inner-box"></div>
        </div>
      </Box>
      <Box color="white">
        <div className="box-child">
          <div className="inner-box"></div>
        </div>
      </Box>
    </div>
  );
}

const CustomCard = styled(Card)`
  background: gray;
  border-radius: 3px;
  width: 300px;
  .first-content {
    font-size: 2.5em;
    color: white;
  }
  .second-content {
    font-size: 1.5em;
    font-family: "Operator Mono";
  }
  .third-content {
    font-size: 1em;
    border: 2px solid black;
    background: green;
  }
`;
const TestButton = styled(Button)`
  width: 200px;
  color: green;
`;
const Box = styled.div`
  border: 1px solid #ccc;
  background: yellow;
  height: 500px;
  .box-child {
    border: 1px solid #000;
    background: red;
    width: 300px;
    height: 300px;
    .inner-box {
      width: 100px;
      height: 100px;
      background: ${(props) => props.color}; // 부모로부터 props를 받는다.
    }
  }
`;
const CustomButton = styled.a`
  border: 1px dashed #000;
`;
