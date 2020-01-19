import React, { MouseEvent, TouchEvent } from 'react';
import { increaseBrightness, throttle } from '@utils/func';
import SIcon from '../SIcon';
import './style.less';

// 使用泛型进行 Props 的类型定义
interface Props {
  // 文本色
  color?: string;
  // 背景色
  bgColor?: string;
  // 标题
  title: string;
  // 图标，如：icon-email
  icon?: string;
  // 字体大小，如：14px
  fontSize?: string;
  // 宽度，如：100px 100%
  width?: string;
  // 函数节流的延迟时间，单位 ms，如：1000
  throttleDelay?: number;
  // 点击事件
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
 };

// 定义一个接口,规范数据类型,通过泛型传入到类中
 interface State {
  bgColor: string;
 }

class SButton extends React.Component<Props, State> {
  public readonly state: Readonly<State> = {
    bgColor: this.props.bgColor
  }

  public constructor(props: Props) {
    super(props);
    const { throttleDelay } = props;
    if (throttleDelay) {
      this.handleClick = throttle(this.handleClick, throttleDelay).bind(this);
    } else {
      this.handleClick = this.handleClick.bind(this);
    }
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  public componentDidMount() {
  }

  public componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }

  public render() {
    const { color, fontSize, icon, width } = this.props;
    const dynamicStyle = {
      width: width || 'auto',
      color: color || 'red',
      fontSize: fontSize || '14px',
      backgroundColor: this.state.bgColor || '#fff'
    };
    return (
      <div
        className="s-button"
        style={dynamicStyle}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        { icon && <SIcon icon={icon} color={ dynamicStyle.color } fontSize={ dynamicStyle.fontSize }></SIcon> }
        <span>{this.props.title}</span>
      </div>
    );
  }

  private handleClick(e: MouseEvent<HTMLDivElement>): void {
    this.props.onClick && this.props.onClick(e);
    this.setState({
      bgColor: this.props.bgColor
    });
  }

  private handleTouchStart(e: TouchEvent<HTMLDivElement>): void {
    this.setState({
      bgColor: increaseBrightness(this.props.bgColor, -0.1)
    });
  }

  private handleTouchEnd(e: TouchEvent<HTMLDivElement>): void {
    this.setState({
      bgColor: this.props.bgColor
    });
  }
}

export default SButton;