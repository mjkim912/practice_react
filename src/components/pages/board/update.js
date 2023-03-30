import React, { useEffect, useState } from "react";
import { useMatch, Link, useNavigate } from "react-router-dom";
import { Row, Col, Typography, Button, Form, Input, Modal } from "antd";

import { defaultQuery } from "../../../config/utils/network";

import FroalaEditor from "react-froala-wysiwyg";

/**
 * 게시판 상세
 * @returns
 */
const BoardUpdate = () => {
  let navigate = useNavigate();

  const [form] = Form.useForm();
  /**
   * 1. url 에서 파라미터를 가져온다.
   */
  const {
    params: { id },
  } = useMatch(`/board/update/:id`);
  // params.id : 상세페이지 고유아이디

  const [nttCn, setNttCn] = useState();

  /** 상세정보 original */
  const [detail, setDetail] = useState();

  /**
   * 2. 가져온 파라미터를 state에 기본 설정한다.
   */
  const [params] = useState({
    siteId: "SITE_000000000000001", // 사이트 고유아이디
    bbsId: "BBSMSTR_000000000091", // 게시판 고유아이디
    nttId: id,
  });

  /**
   * 4. api 상세 정보 조회
   */
  const BoardUpdate = async () => {
    const { data } = await defaultQuery("/api/article/find", params);
    //console.log("response =====> ", data);
    if (data) {
      const { result } = data;
      setDetail(result);

      /**
       * 초기값 넣는 방법 1
       */
      // form.setFieldsValue({
      //   nttSj: result.nttSj,
      //   nttCn: result.nttCn,
      // });
    }

    //console.log("detail ---> ", detail);

    // nttCn : 게시글 내용
    // nttSj : 게시글 제목
    // frstRegisterId : 등록자
    // frstRegisterPnttm : 등록일
  };

  /**
   * 게시판 수정 후 저장
   */
  const BoardSave = async (payload) => {
    const { data } = await defaultQuery("/api/article/save", payload);
    if (data) {
      const { result } = data;

      if (result === 1) {
        Modal.success({
          content: "수정하였습니다.",
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

  // const handleCancel = () => {
  //   confirm({
  //     title: "",
  //     content: "페이지를 벗어나시겠습니까?",
  //     onOk() {
  //       navigate(`/board`);
  //     },
  //     onCancel() {
  //       console.log("Cancel");
  //     },
  //   });
  // };

  /**
   * 에디터 변경 이벤트
   */
  const handleModelChange = (model) => {
    console.log("change ----> ", model);
    setNttCn(model);
  };

  /**
   * 3. 화면이 마운트 되면서 1회만 실행한다.
   */
  useEffect(() => {
    BoardUpdate();
  }, []);

  /**
   * 초기값 넣는 방법 2.
   */
  useEffect(() => {
    if (detail) {
      form.setFieldsValue({
        nttSj: detail.nttSj,
        //nttCn: detail.nttCn, //froalaEditor 로 변경
      });

      setNttCn(detail.nttCn);
    }
  }, [detail]);

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

//const { confirm } = Modal;
const { Title } = Typography;

export default BoardUpdate;
