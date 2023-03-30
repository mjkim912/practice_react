# 1. JSX 란?

```
1.JSX(JavaScript XML)는 Javascript에 XML을 추가하여 확장한 문법
2.JSX는 리액트로 프로젝트를 개발할 때 사용되므로 공식적인 자바스크립트 문법 아님
3.브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환
```

# 2. JSX 문법

```
정상(O)
function Sample() {
    return (
        <div>
            <div>Hello</div>
            <div>Sample</div>
        </div>
);

비정상(X) - 에러발생
function Sample() {
    return (
        <div>Hello</div>
        <div>Sample</div>
);

대응(O)
function Sample() {
    return (
        <>
            <div>Hello</div>
            <div>Sample</div>
        </>
);
```
```
Javascript 표현식

function Sample() {
    const say = 'hello';
    const title = '잘 나가는 내 인생';

    return (
        <>
            <div>{say}</div>
            <div>{title}</div>
        </>
);

result :

hello
잘나가는 내인생

----------------------------------------------

function Sample(number) {

    return (
        <>
            <div>{number === 1 ? '숫자' : '문자'}</div>
        </>
);

result :

number 가 1 이면
숫자

number 가 1이 아니면
문자

----------------------------------------------

function Sample(number) {

    return (
        <>
            <div>{number === 1 && '숫자'}</div>
        </>
);

result :

number 가 1 이면
숫자

number 가 1이 아니면
아무것도 나오지 않음

```
```
style 적용 방법(기본 방법)

1번

function App() {
    const style = {
        backgroundColor: '#eee',
        fontSize: '5px'
    }

    return (
        <p style={style}>글자입니다.</p>
    );
}


2번

import './App.css';

function App() {
    return (
        <p className="text-design">글자입니다.</p>
    );
}



App.css 내용
.text-design {
    backgroundColor: '#eee',
    fontSize: '5px'
}
```
```
주석사용

function Sample() {
    return (
        <>
            {/* 주석 */}
            <div>Hello</div>
            <div>Sample</div>
        </>
);
```