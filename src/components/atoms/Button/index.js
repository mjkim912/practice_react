import React, { useEffect } from 'react';

/**
 * 버튼 컴포넌트 (공통으로 사용)
 * @param {*} props
 * @returns
 */
export default function Button(props) {
  /** props의 부모에서 전달 받은 값을 선언하여 사용 */
  const { buttonName, onClick } = props;

  useEffect(() => {
    console.log('마운트');
    return () => {
      console.log('언마운트');
    };
  }, []);

  return <button onClick={onClick}>{buttonName && buttonName}</button>;
}
