import React, { useState, useEffect } from "react";
import { Row, Col, Table, Pagination, Button } from "antd";
import { useNavigate } from "react-router-dom";

import Search from "../../molecules/Search";

import { defaultQuery } from "../../../config/utils/network";

/**
 * 순서
 * 페이지 로드 -> useEffect 마운트 -> boardList 에 param을 넘겨준다.
 * values 안에는 값이 있다. 저값을 가지고 api를 호출한다.
 * response 로 값을 받고, setDataSource, setPaging 에 값을 넣어준다.
 * 저 둘 값을 바라보고 있는 return 안에서 화면에 표시한다. (자동)
 * 페이지번호를 누르면 onChange 호출되고, 다시 onChange 안에 있는 BoardList를 호출하고, 페이지가 갱신되는 것이다..
 */

/**
 * 게시판
 * @returns
 */
const Board = (props) => {
  let navigate = useNavigate();

  /**
   * 파라미터 생성
   */
  const [params, setParams] = useState({
    pageIndex: 1, //페이지번호
    pageSize: 10, //게시물 개수
    bbsId: "BBSMSTR_000000000091", // 게시판 고유번호(공지사항)
    siteId: "SITE_000000000000001", // 사이트 고유번호
  });

  /** 결과값 */
  const [dataSource, setDataSource] = useState(() => []);
  /** 페이징 정보 */
  const [paging, setPaging] = useState();

  /**
   * api 통신(게시판 목록)
   * 통신이니까 async, await 를 붙인다.
   */
  const boardList = async (values) => {
    const response = await defaultQuery("/api/article/findAll", values);
    const { data } = response;

    if (data) {
      const { paginationInfo, resultList } = data;
      //console.log("paginationInfo ----> ", paginationInfo);
      //console.log("resultList ----> ", resultList);

      setDataSource(resultList); // 결과 정보
      setPaging(paginationInfo); // 페이징 정보

      // frstRegisterPnttm : 등록일
      // rNum : 행번호
      // nttSj : 제목
      // atchFileId : 파일 아이디
    }

    setParams(values);
    console.log("response ===> ", response);
  };

  const handleSearch = async (values) => {
    console.log("search ====> ", values);
    const { searchCondition, searchKeyword } = values;

    // params를 복사 한 후, condition, keyword를 추가 혹은 수정한다.
    const payload = {
      ...params,
      searchCnd: searchCondition,
      searchWrd: searchKeyword,
    };

    //setParams(payload); // 페이지 이동했을때 검색 조건 유지.
    boardList(payload);
  };

  useEffect(() => {
    boardList(params);
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Search
            options={[
              { label: "전체", value: "" },
              { label: "제목", value: "0" },
              { label: "본문", value: "1" },
            ]}
            onSearch={handleSearch}
          />
        </Col>
        <Col span={24}>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  //nttId : 게시물번호
                  navigate(`/board/detail/${record.nttId}`);
                }, // click row
                onDoubleClick: (event) => {}, // double click row
                onContextMenu: (event) => {}, // right button click row
                onMouseEnter: (event) => {}, // mouse enter row
                onMouseLeave: (event) => {}, // mouse leave row
              };
            }}
          />
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <Pagination
            defaultCurrent={1}
            current={paging?.currentPageNo}
            total={paging?.totalRecordCount}
            onChange={(pageIndex) => {
              // 어떤 값을 넣어줄 것인가?
              // params 값을 가져 올 건데
              const payload = {
                ...params,
                pageIndex,
              };
              //console.log("----> ", payload);
              //setParams(payload);
              boardList(payload);
            }}
          />
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button
            onClick={() => {
              navigate(`/board/insert`);
            }}
          >
            글쓰기
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "No.",
    dataIndex: "rnum",
    key: "rnum",
  },
  {
    title: "제목",
    dataIndex: "nttSj",
    key: "nttSj",
  },
  {
    title: "작성일",
    dataIndex: "frstRegisterPnttm",
    key: "frstRegisterPnttm",
  },
  {
    title: "첨부파일",
    dataIndex: "atchFileId",
    key: "atchFileId",
  },
];

export default Board;
