import React from 'react';
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';

const AntdTest = () => {
  const handleClick = () => {
    message.success('이동!!');
  };

  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        Default Button
      </Button>

      <Link to="/main">
        <Button type="primary" onClick={handleClick}>
          Main 바로가기
        </Button>
      </Link>

      <Link to="/example">
        <Button type="primary" onClick={handleClick}>
          example 바로가기
        </Button>
      </Link>

      <Link to="/login">
        <Button type="primary" onClick={handleClick}>
          Login 바로가기
        </Button>
      </Link>

      <Link to="/hooks">
        <Button type="primary" onClick={handleClick}>
          Hooks 바로가기
        </Button>
      </Link>

      <Link to="/antd">
        <Button type="primary" onClick={handleClick}>
          Antd 바로가기
        </Button>
      </Link>
    </div>
  );
};

export default AntdTest;
