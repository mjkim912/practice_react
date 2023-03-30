import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // 1. useDispatch : 훅
import { setIsLoading } from "../../../store/common/reducer"; // 2. reducer
import { setMenuList } from "../../../store/menu/reducer";
import { defaultQuery } from "../../../config/utils/network";

export default function Header() {
  const dispatch = useDispatch(); // 3. dispatch 준비

  // store에서 값을 가져오는 함수이다. 여러 값들 중에서도 common 을 가져온다
  const common = useSelector((state) => state.common);
  const menu = useSelector((state) => state.menu);

  console.log(menu);
  // 리덕스 사용시
  const [menuList, setMenus] = useState([]);
  // const [menuList] = useState(() => [
  //   {
  //     menuUrl: "/board",
  //     menuNm: "게시판",
  //   },
  // ]);

  const findMenuList = async () => {
    try {
      const { data } = await defaultQuery("/api/admin/menu/selectMenuList", {
        menuNo: 1,
        pageIndex: 1,
        pageSize: 100,
        searchCondition: "",
        searchKeyword: "",
      });

      if (data) {
        const { resultList } = data;
        dispatch(setMenuList(resultList)); // store에 메뉴 목록 저장
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 3000);
    }
  };

  useEffect(() => {
    if (menu.menuList.length <= 0) {
      dispatch(setIsLoading(true)); // 4. store 에 값 전달
      findMenuList();
    }
  }, []);

  useEffect(() => {
    if (menu.menuList.length > 0) {
      setMenus(menu.menuList);
    }
  }, [menu.menuList]);

  return (
    <Menu mode="horizontal">
      {menuList?.map((item) => {
        return (
          <Link to={item.menuUrl}>
            <Menu.Item>{item.menuNm}</Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
}
