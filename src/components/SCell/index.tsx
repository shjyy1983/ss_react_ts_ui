import React, {  MouseEvent, TouchEvent } from 'react';
import { increaseBrightness } from '@utils/func';
import { string } from 'prop-types';
import './style.less';

interface Props {
  title?: string;
  subTitle?: string;
  bgColor?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

interface State {
  bgColor?: string;
}

const initialState =  {
  bgColor: '#fff'
};

class SCell extends React.PureComponent<Props, State> {
  readonly state: State = initialState;

  constructor(props: Props) {
    super(props);
    this.initialize();
  }

  private initialize() {
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  render() {
    const dynamicStyle = {
      backgroundColor: this.state.bgColor
    };
    return (
      <div
        className="s-cell"
        style={ dynamicStyle }
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        <div className="s-cell-title">{this.props.title}</div>
        <div className="s-cell-subtitle">{this.props.subTitle}</div>
      </div>
    );
  }

  private handleClick(e: MouseEvent<HTMLDivElement>): void {
    this.props.onClick && this.props.onClick(e);
  }

  private handleTouchStart(e: TouchEvent<HTMLDivElement>): void {
    this.setState({
      bgColor: increaseBrightness(this.props.bgColor || '#fff', -0.1)
    });
  }

  private handleTouchEnd(e: TouchEvent<HTMLDivElement>): void {
    this.setState({
      bgColor: this.props.bgColor || '#fff'
    });
  }
}

export default SCell;