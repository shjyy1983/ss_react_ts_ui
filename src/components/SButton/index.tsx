import React, { MouseEvent, TouchEvent } from 'react';
import { increaseBrightness } from '@utils/func';
import SIcon from '@components/SIcon';
import './style.less';

// 使用泛型进行 Props 的类型定义
interface IProps {
  // 文本色
  color?: string;
  // 背景色
  bgColor?: string;
  // 标题
  title: string;
  // 点击事件
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
 };

// 定义一个接口,规范数据类型,通过泛型传入到类中
 interface IState {
  bgColor: string;
 }

class SButton extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    bgColor: this.props.bgColor
  }

  public constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  public componentDidMount() {
  }

  public componentWillUnmount() {
  }

  public render() {
    const dynamicStyle = {
      color: this.props.color || 'red',
      backgroundColor: this.state.bgColor || '#fff'
    };
    return (
      <div
        className="s-button"
        style={dynamicStyle}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        <SIcon icon={"icon-avatar"} color={'teal'}></SIcon>
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