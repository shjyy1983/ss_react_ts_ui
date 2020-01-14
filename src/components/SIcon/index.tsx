import React, { SFC } from 'react';
import { string } from 'prop-types';

interface Props {
  icon: string;
  color?: string;
  fontSize?: string;
}

class SIcon extends React.PureComponent<Props, {}> {
  public constructor(props: Props) {
    super(props);
  }
  render() {
    const { icon, color, fontSize } = this.props;
    const clsNames = `iconfont ${icon}`;
    if (color) {
      const dynamicStyle = {
        color: color || '#000',
        fontSize: fontSize || '12px'
      };
      return (
        <i className={clsNames} style={dynamicStyle}></i>
      );
    } else {
      return (
        <i className={clsNames}></i>
      );
    }
  }
}

export default SIcon;