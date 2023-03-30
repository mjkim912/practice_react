import React, { useState, useMemo, useCallback } from 'react';

const Hooks = () => {
  const [users, setUsers] = useState(data);
  //const [testCount, setCount] = useState(1);
  const [testCount, setTestCount] = useState(1);

  const handleCount = (arr) => {
    console.log('카운트가 실행된다.');
    return arr.length;
  };

  //const count = handleCount(users);

  const count = useMemo(() => {
    return handleCount(users);
  }, [users]);

  /**
   * 클릭 할 때마다 유저 정보 증가
   * useCallback 을 쓰면 useMemo 와 같은 효과가 있다.
   * 메모리에 올라가면 다시 랜더링 되지 않음.
   */
  const handleClick = useCallback(() => {
    const userList = [
      ...users,
      {
        id: users.length + 1,
        username: 'add',
        email: 'add@naver.com',
        active: true,
      },
    ];

    //state를 쓰면 setUsers -> users가 변하고 -> 처음부터 랜더링 된다.
    // 이것을 효율적으로 이용하기 위해 useMemory를 사용한다.
    setUsers(userList);
  }, [users]);

  /**
   * 테스트
   */
  const handleTestClick = () => {
    setTestCount((preTestCount) => {
      return preTestCount + 1;
    });
  };

  /**
   * 삭제 이벤트
   * 유저 정보 삭제
   */
  const handleRemove = () => {
    //const userList = users;           // 얕은 복사
    let userList = Array.from(users); // 깊은 복사
    userList.splice(0, 1); // 0번에서 1개를 없앤다.

    setUsers(userList); // 새로운 값을 넣어준다.

    console.log('userList =====> ', userList);
  };

  return (
    <div>
      <p>테스트 카운트 : {testCount}</p>
      <p>카운트 : {count}</p>
      <div>
        <button onClick={handleClick}>증가</button>
        <button onClick={handleTestClick}>test</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com',
    active: true,
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com',
    active: false,
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com',
    active: false,
  },
];

export default Hooks;
