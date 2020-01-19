import React, { useState } from 'react';

interface Props {
  text: string; // 内容
  trimLength: number; // 最少显示数量
}
function LessText({ text, trimLength }: Props) {
  // 创建一个状态，并将其初始化为“true”
  const [hidden, setHidden] = useState(true);

  // 创建一个状态: count，并将其初始化为 0
  const [count, setCount] = useState(0);

  // 具有多个键的 state
  const [info, setInfo] = useState({
    name: 'abc',
    age: 0
  });

  // 增加 count 的方法
  const increaseCount = (): void => {
    setCount(c => c + 1);
  };

  const changeInfo = () => {
    setInfo(e => {
      return {
        name: e.name,
        age: e.age + 1
      };
    });
  };

  if (text.length <= trimLength) {
    return <span>{text}</span>;
  }

  return (
    <div>
      <div>点击数量：{count}</div>
      <div>信息：{info.name} {info.age}</div>
      {hidden ? `${text.substr(0, trimLength).trim()} ...` : text}
      {hidden ? (
        <a onClick={() => { setHidden(false); increaseCount(); changeInfo(); }}> read more </a>
      ) : (
        <a onClick={() => setHidden(true)}> read less </a>
      )}
    </div>
  );
}

export default LessText;