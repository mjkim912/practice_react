# 1. state와 props

## 1.1. state란?
가변 데이터
구성 요소에 의해 유지
변경 가능

```
import React, { useState } from 'react';

/**
 * 메인 페이지 컴포넌트
 * @returns 
 */
export default function Main() {
    /** count state */
    /* [ (변경가능한) 변수명, 변수를 변경할 함수 ] */
    const [count , setCount] = useState(0);
    /** title state */
    const [title , setTitle] = useState('없음');

    return <div style={{height : 300, padding : 20}}>
        <div>
        현재 숫자는 {count} 입니다. 제목은 {title} 입니다.
        </div>
        <div>
            <button onClick={() =>{
                setCount(count+1)
            }}>
                숫자+ 버튼
            </button>
            <button onClick={() =>{
                setCount(count-1)
            }}>
                숫자- 버튼
            </button>
            <button onClick={() =>{
                setTitle('리엑트')
            }}>
                제목 리엑트로 변경
            </button>
            <button onClick={() =>{
                setTitle('없음')
            }}>
                제목 없음으로 변경
            </button>
        </div>
    </div>
}
```

## 1.2. props란?
불변의 데이터
부모로부터 전달되는
변경 불가

src/components/atoms에 Button 컴포넌트 생성
src/components/atoms/Button/index.js

```
import React from 'react';

/**
 * 버튼 컴포넌트
 * @param {*} props 
 * @returns 
 */
export default function Button(props) {
    /** props의서 전달 받은 값을 선언하여 사용 */
    const { buttonName , onClick } = props;

    return <button onClick={onClick}>
        {buttonName && buttonName}
    </button>
}
```
