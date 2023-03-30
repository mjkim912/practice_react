import React from "react";
import { Row, Col, Input, Select, Form } from "antd";

/**
 * 검색 컴포넌트
 * 규칙 : label, value
 * [{label : '전체', value : '', label : '제목', value : 'title'}]
 * 이런 형태의 json 데이터를 받아서 만든다.
 *
 * @param {} param0
 * @returns
 */
export default function Search({ options = [], onSearch }) {
  const [form] = Form.useForm();
  /**
   * 검색
   */
  const handleSearch = () => {
    form.submit();
  };

  /**
   * form submit
   */
  const handleFinish = (values) => {
    //onSearch 에 값이 있으면 트리거를 넘겨준다는 의미.
    onSearch && onSearch(values);
    console.log("----> ", values);
  };

  return (
    <Row>
      <Col span={24}>
        <Form layout="inline" form={form} onFinish={handleFinish}>
          {" "}
          {/* submit 을 하면 폼이 onFinish를 통해 값을 보내준다. */}
          <Form.Item name="searchCondition">
            <Select style={{ width: 150 }}>
              {options.map((option) => {
                return <Option value={option?.value}>{option?.label || ""}</Option>;
              })}

              {/* <Option value="">전체</Option>
                <Option value="title">제목</Option> */}
            </Select>
          </Form.Item>
          <Form.Item name="searchKeyword">
            <Input.Search style={{ width: 300 }} placeholder="검색어를 입력하세요." onSearch={handleSearch} enterButton />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

// 위에 있어도 되는데 많이 쌓이면 코드를 보기 힘드니까 밑으로 내린다.
//const { Search } = Input; 이름이 같아서 에러남. { Search : testSearch } 이렇게 바꿔써도 댐
const { Option } = Select;
