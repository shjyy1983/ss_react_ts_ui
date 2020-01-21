import React, { memo } from 'react';

interface Props {
  name: string;
}

function Box2(props: Props) {
  console.log('box2 render...');
  return (
    <div className="box">
      {props.name}
    </div>
  );
}

function isEqual(preProps: Props, nextProps: Props) {
  return preProps.name === nextProps.name;
}

// 通过高阶函数 memo，使得该函数组件变成 PureComponent
export default memo(Box2, isEqual);