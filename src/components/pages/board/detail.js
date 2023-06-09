import React, { useEffect, useState } from "react";
import { useMatch, Link } from "react-router-dom";
import { Row, Col, Typography, Button } from "antd";

//import Button from "../../atoms/Button";
import { defaultQuery } from "../../../config/utils/network";

/**
 * 게시판 상세
 * @returns
 */
const BoardDetail = () => {
  /**
   * 1. url 에서 파라미터를 가져온다.
   */
  const {
    params: { id },
  } = useMatch(`/board/detail/:id`);
  // params.id : 상세페이지 고유아이디

  // 상세정보
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
  const BoardDetail = async () => {
    const { data } = await defaultQuery("/api/article/find", params);
    //console.log("response =====> ", data);
    if (data) {
      const { result } = data;
      setDetail(result);
    }

    //console.log("detail ---> ", detail);

    // nttCn : 게시글 내용
    // nttSj : 게시글 제목
    // frstRegisterId : 등록자
    // frstRegisterPnttm : 등록일
  };

  /**
   * 3. 화면이 마운트 되면서 1회만 실행한다.
   */
  useEffect(() => {
    BoardDetail();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row>
            <Col flex={1}>
              <Title level={5}>{detail?.nttSj || ""}</Title>
            </Col>
            <Col flex="100px">
              <Title level={5}>{detail?.frstRegisterId || ""}</Title>
            </Col>
            <Col flex="100px">
              <Title level={5}>{detail?.frstRegisterPnttm || ""}</Title>
            </Col>
          </Row>
        </Col>
        <Col span={24} dangerouslySetInnerHTML={{ __html: detail?.nttCn || "" }}></Col>
      </Row>
      <Row>
        <Col>
          <Link to={`/board/update/${id}`}>
            <Button type="primary">수정</Button>
          </Link>
          <Link to="/board">
            <Button>목록</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

const { Title } = Typography;

export default BoardDetail;
