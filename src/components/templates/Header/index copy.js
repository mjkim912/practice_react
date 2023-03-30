import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
//import axios from "axios";

export default function Header() {
  //const [menuList, setMenuList] = useState(() => []);
  const [menuList] = useState(() => [
    {
      menuUrl: "/board",
      menuNm: "게시판",
    },
  ]);

  useEffect(() => {
    // axios({
    //   method: 'post',
    //   url: 'https://api.reacting.kr/api/admin/menu/selectMenuList',
    //   data: { menuNo: 1, pageIndex: 1, pageSize: 100, searchCondition: '', searchKeyword: '' },
    // }).then(function (response) {
    //   // 메뉴를 state에 등록한다. (set)
    //   // response에 값이 있으면 가져오고, data에 값이 있으면 resultList 를 가져온다. 값이 없으면 [] 반환
    //   setMenuList(response?.data?.resultList || []);
    //   console.log('response ====> ', response);
    // });
    // 통신 실행 완료 후
    // const items = [
    //   {
    //     label: '메인',
    //     key: 'main',
    //     url: '/main',
    //   },
    //   {
    //     label: '로그인',
    //     key: 'login',
    //     url: '/login',
    //   },
    //   {
    //     label: '훅스',
    //     key: 'hooks',
    //     url: '/hooks',
    //   },
    //   {
    //     label: '안트 디자인',
    //     key: 'antd',
    //     url: '/antd',
    //   },
    // ];
    // setMenuList(items);
  }, []);

  return (
    <Menu mode="horizontal">
      {menuList?.map((item) => {
        console.log("item ====> ", item);
        return (
          <Link to={item.menuUrl}>
            <Menu.Item>{item.menuNm}</Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
}

const params = [
  [
    {
      rnum: 1,
      atchFileId: "",
      bbsId: "BBSMSTR_000000000081", //게시판 아이디
      frstRegisterId: "admin",
      frstRegisterPnttm: "2021-04-13",
      lastUpdusrId: "",
      lastUpdusrPnttm: "",
      ntceBgnde: "",
      ntceEndde: "",
      ntcrId: "",
      ntcrNm: "",
      nttCn: "게시글 등록해 봅니다.",
      nttId: 183,
      nttNo: 0,
      nttSj: "게시글 등록해 봅니다.",
      parnts: "0",
      password: "",
      inqireCo: 0,
      replyAt: "Y",
      replyLc: "0",
      sortOrdr: 0,
      useAt: "Y",
      ntceEnddeView: "",
      ntceBgndeView: "",
      noticeAt: "N",
      secretAt: "N",
      sjBoldAt: null,
      blogAt: "",
      blogId: "",
      siteId: "",
      searchBgnDe: "",
      searchCnd: "",
      searchEndDe: "",
      searchWrd: "",
      searchUseYn: "",
      pageIndex: 1,
      pageUnit: 10,
      pageSize: 10,
      firstIndex: 1,
      lastIndex: 1,
      recordCountPerPage: 10,
      rowNo: 0,
      frstRegisterNm: "",
      lastUpdusrNm: "",
      isExpired: "N",
      parntsSortOrdr: "",
      parntsReplyLc: "",
      bbsTyCode: "",
      bbsAttrbCode: "",
      bbsNm: "",
      fileAtchPosblAt: "",
      posblAtchFileNumber: 0,
      replyPosblAt: "",
      plusCount: false,
      anonymousAt: "",
      subPageIndex: "",
      commentCo: "",
    },
  ],
];
