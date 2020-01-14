import React, {  MouseEvent, TouchEvent } from 'react';
import SIcon from '../SIcon';
import './style.less';

interface Props {
  title?: string;
  subTitle?: string;
  bgColor?: string;
  hightlightBgColor?: string;
  accessory?: boolean;
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

  componentDidMount() {
    this.setState({
      bgColor: this.props.bgColor || '#fff'
    });
  }

  render() {
    const dynamicStyle = {
      backgroundColor: this.state.bgColor
    };
    const { title, subTitle, accessory } = this.props;
    const children = [];
    const titleCmp = (
      <div className="s-cell-content-title" key="title">
        {this.props.title}
      </div>
    );
    const subTitleCmp = (
      <div className="s-cell-content-subtitle" key="subTitle">
        {this.props.subTitle}
      </div>
    );
    const accessoryCmp = accessory && (
      <div className="s-cell-accessory" key="accessory">
        <SIcon icon={"icon-arrow-right"} color={'gray'} fontSize={'20px'}></SIcon>
      </div>
    );
    title && children.push(titleCmp);
    subTitle && children.push(subTitleCmp);
    return (
      <div
        className="s-cell"
        style={ dynamicStyle }
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        <div className="s-cell-content">
          {children}
        </div>
        {accessoryCmp}
      </div>
    );
  }

  private handleClick(e: MouseEvent<HTMLDivElement>): void {
    this.props.onClick && this.props.onClick(e);
  }

  private handleTouchStart(e: TouchEvent<HTMLDivElement>): void {
    this.setState({
      bgColor: this.props.hightlightBgColor
    });
  }

  private handleTouchEnd(e: TouchEvent<HTMLDivElement>): void {
    this.setState({
      bgColor: this.props.bgColor || '#fff'
    });
  }
}

export default SCell;