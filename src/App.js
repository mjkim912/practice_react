import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Spin } from "antd";
import { useSelector } from "react-redux";

import Main from "./components/pages/main";
import Login from "./components/pages/login";
import Hooks from "./components/pages/hooks";
import Antd from "./components/pages/antd";
import Board from "./components/pages/board";
import BoardDetail from "./components/pages/board/detail";
import BoardUpdate from "./components/pages/board/update";
import BoardInsert from "./components/pages/board/insert";

import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";

export default function App() {
  const { isLoading } = useSelector((state) => state.common);
  return (
    <BrowserRouter>
      <Spin spinning={isLoading}>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24}>
                {/* { header } */}
                <Header />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                {/* { contents } */}
                <Routes>
                  <Route path="/main" element={<Main />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/hooks" element={<Hooks />} />
                  <Route path="/antd" element={<Antd />} />
                  <Route path="/board" element={<Board />} />
                  {/** 게시판 상세페이지 */}
                  <Route path="/board/detail/:id" element={<BoardDetail />} />
                  <Route path="/board/update/:id" element={<BoardUpdate />} />
                  <Route path="/board/insert" element={<BoardInsert />} />
                </Routes>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                {/* { footer } */}
                <Footer />
              </Col>
            </Row>
          </Col>
        </Row>
      </Spin>
    </BrowserRouter>
  );
}
