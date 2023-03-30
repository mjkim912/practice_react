import React, { useState } from 'react';

import Button from '../../atoms/Button';

export default function Example() {
  const [count, setCount] = useState(0);

  const handleUp = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>클릭 {count}</p>
      <Button buttonName="클릭" onClick={handleUp} />
    </div>
  );

  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     document.title = `클릭 ${count}`;
  //     console.log('이펙트 실행');
  //   }, []);
  //   // 뒤에 , []을 넣으면
  //   // 마운트가 되었을 때 한번만 실행한다.
  //   // 클릭할 때 더 이상 실행되지 않음
  //   return (
  //     <div>
  //       <p>클릭 {count}</p>
  //       <button onClick={() => setCount(count + 1)}>클릭</button>
  //     </div>
  //   );

  //   const [count, setCount] = useState(0);
  //   const [name, setName] = useState('짝수');
  //   useEffect(() => {
  //     const editName = count % 2 === 0 ? '짝수' : '홀수';
  //     setName(editName);
  //   }, [count]);
  //   // count가 변경이 되었을 때만 실행한다.
  //   // 배열 안에 여러개를 넣을 수 있다. --> 전부 바뀌어야 실행
  //   return (
  //     <div>
  //       <p>클릭 {count}</p>
  //       <p>이름 : {name}</p>
  //       <button onClick={() => setCount(count + 1)}>클릭</button>
  //     </div>
  //   );
}
