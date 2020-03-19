import React, { MouseEvent, TouchEvent } from 'react';
import { strRemoveUnit, throttle } from '@utils/func';

interface Props {
  // iconfont 图标
  icon: string;
  // 颜色
  color?: string;
  // 字体大小
  fontSize?: number | string;
  // 函数节流的延迟时间，单位 ms，如：1000
  throttleDelay?: number;
  // 点击事件
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

class SIcon extends React.PureComponent<Props, {}> {
  static defaultProps = {
    icon: 'icon-email',
    color: '#333',
    fontSize: 14,
    throttleDelay: 300,
    className: ''
  }

  public constructor(props: Props) {
    super(props);
    const { throttleDelay } = props;
    this.handleClick = throttle(this.handleClick, throttleDelay).bind(this);
  }
  render() {
    const { icon, color, fontSize, className } = this.props;
    const classNames = `iconfont icon-${icon} ${className}`;
    const dynamicStyle = {
      color: color,
      fontSize: strRemoveUnit(fontSize + '') + 'px'
    };
    return (
      <i className={classNames} style={dynamicStyle} onClick={this.handleClick}></i>
    );
  }

  private handleClick(e: MouseEvent<HTMLDivElement>): void {
    this.props.onClick && this.props.onClick(e);
  }
}

export default SIcon;