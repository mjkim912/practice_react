import React, { useEffect, useState } from "react";
import { useMatch, Link, useNavigate } from "react-router-dom";
import { Row, Col, Typography, Button, Form, Input, Modal } from "antd";

import { defaultQuery } from "../../../config/utils/network";

import FroalaEditor from "react-froala-wysiwyg";

/**
 * 게시판 상세
 * @returns
 */
const BoardInsert = () => {
  let navigate = useNavigate();

  const [form] = Form.useForm();

  const [nttCn, setNttCn] = useState();

  /**
   * 2. 가져온 파라미터를 state에 기본 설정한다.
   */
  const [params] = useState({
    siteId: "SITE_000000000000001", // 사이트 고유아이디
    bbsId: "BBSMSTR_000000000091", // 게시판 고유아이디
  });

  /**
   * 게시판 수정 후 저장
   */
  const BoardSave = async (payload) => {
    const { data } = await defaultQuery("/api/article/save", payload);
    if (data) {
      const { result } = data;

      if (result === 1) {
        Modal.success({
          content: "등록하였습니다.",
          onOk: () => {
            navigate(`/board`);
          },
        });
      }
    }
  };

  /** 저장 버튼 클릭 */
  const handleSubmit = () => {
    form.submit();
  };

  /** form submit */
  const handleFinish = (values) => {
    const { nttSj } = values;
    BoardSave({
      ...params,
      nttSj,
      nttCn,
      lastUpdusrId: "admin",
    });
  };

  /**
   * 에디터 변경 이벤트
   */
  const handleModelChange = (model) => {
    setNttCn(model);
  };

  return (
    <div style={{ padding: 24 }}>
      <Form form={form} onFinish={handleFinish}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Row>
              <Col flex={1}>
                <Form.Item name="nttSj">
                  <Input />
                </Form.Item>
                {/* <Title level={5}>{detail?.nttSj || ""}</Title> */}
              </Col>
            </Row>
          </Col>
          {/* <Col span={24} dangerouslySetInnerHTML={{ __html: detail?.nttCn || "" }}></Col> */}
          <Col span={24}>
            <Form.Item name="nttCn">
              {/* <Input.TextArea /> */}
              <FroalaEditor tag="textarea" model={nttCn} onModelChange={handleModelChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="primary" onClick={handleSubmit}>
              저장
            </Button>
            <Link to="/board">
              <Button>취소</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

//const { Title } = Typography;

export default BoardInsert;
