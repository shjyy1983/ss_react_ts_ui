import React, { SFC } from 'react';
import { string } from 'prop-types';

interface IProps {
  icon: string;
  color?: string;
}

// 无状态组件
const SIcon: SFC<IProps> = ({ icon, color }) => {
  const clsNames = `iconfont ${icon}`;
  if (color) {
    const dynamicStyle = {
      color: color || '#000'
    };
    return (
      <i className={clsNames} style={dynamicStyle}></i>
    );
  } else {
    return (
      <i className={clsNames}></i>
    );
  }
};

SIcon.propTypes = {
  icon: string,
  color: string
};

export default SIcon;