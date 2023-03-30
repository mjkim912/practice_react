import React, { useState } from 'react';

import Button from '../../atoms/Button';
import BtnStyle from '../../atoms/Style';

/**
 * 메인 페이지 컴포넌트
 * @returns
 */
export default function Main() {
    /** count state */
    /* [ (변경가능한) 변수명, 변수를 변경할 함수 ] */
    const [count, setCount] = useState(0);
    /** title state */
    const [title, setTitle] = useState('없음');

    const [color, setColor] = useState({ backgroundColor: 'red' });

    const handleUp = () => {
        setCount(count + 1);
    };
    const handleDown = () => {
        setCount(count - 1);
    };
    const handleColor = () => {
        setColor({ backgroundColor: 'orange' });
    };

    return (
        <div style={{ height: 300, padding: 20 }}>
            <div>
                현재 숫자는 {count} 입니다. 제목은 {title} 입니다.
            </div>
            <div>
                {/*
            첫번째 방식 
            <Button buttonName="증가" onClick={()=> {
                alert('test');
            }}/> */}

                {/* 두 번째 방식 */}
                <Button buttonName="증가" onClick={handleUp} />
                <Button buttonName="감소" onClick={handleDown} />
                <BtnStyle style={color} onClick={handleColor} />

                {/* <button onClick={() =>{
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
            </button> */}
            </div>
        </div>
    );
}
