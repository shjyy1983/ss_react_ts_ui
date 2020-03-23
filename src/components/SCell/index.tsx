import React, {  MouseEvent, TouchEvent } from 'react';
import ClickOutside from 'react-click-outside';
import SIcon from '../SIcon';
import './style.less';

interface Props {
  title?: string;
  subTitle?: string;
  bgColor?: string;
  hightlightBgColor?: string;
  accessory?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  rightButtons?: Array<string>;
  height?: number;
}

interface State {
  bgColor?: string;
}

const initialState =  {
  bgColor: '#fff'
};

class SCell extends React.PureComponent<Props, State> {
  private nodeRef: React.RefObject<HTMLDivElement>;
  private contentRef: React.RefObject<HTMLDivElement>;
  private rightRef: React.RefObject<HTMLDivElement>;
  private rightWidth = 0
  private direction = 'none';
  private dragging = false
  private opened = false;
  private swiping = false;
  private offsetLeft = 0
  private startPos = {x: 0, y: 0}
  private rightDefaultTransform = ''

  static defaultProps = {
    title: '',
    subTitle: '',
    bgColor: '#ff',
    hightlightBgColor: '#ff',
    accessory: false,
    rightButtons: [] as Array<string>,
    height: 44
  }

  constructor(props: Props) {
    super(props);
    this.initialize();
    this.state = initialState;
    this.nodeRef = React.createRef();
    this.contentRef = React.createRef();
    this.rightRef = React.createRef();
  }

  private initialize() {
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this.setState({
      bgColor: this.props.bgColor || '#fff'
    });

    this.rightWidth = this.rightRef.current.getBoundingClientRect().width;
    this.rightDefaultTransform = this.translate3d(this.rightWidth);
    this.rightRef.current.style.webkitTransform = this.rightDefaultTransform;
    this.rightRef.current.style.webkitTransition = 'transform 0ms ease-in-out';

    document.addEventListener('touchstart', this.hide,  false);
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.hide, false);
  }

  private hide(e: KeyboardEvent) {
    if (this.nodeRef.current.contains(e.target as Node)) {
      return;
    }
    this.swipeMove(0);
    // console.log('this.nodeRef.current.childNodes',  this.nodeRef.current.contains(e.target));
    // console.log(this.nodeRef.current.contains(e.target as Node));
  }

  private handleClick(e: MouseEvent<HTMLDivElement>): void {
    this.props.onClick && this.props.onClick(e);
  }

  private handleTouchStart(e: TouchEvent<HTMLDivElement>): void {
    this.setState({
      bgColor: this.props.hightlightBgColor
    });

    const touch = e.touches[0];

    this.dragging = true;
    this.startPos = { x: touch.pageX, y: touch.pageY };
    this.direction = 'none';

  }

  private handleTouchMove(e: TouchEvent<HTMLDivElement>): void {
    if (this.opened) {
      if (!this.swiping) {
        this.swipeMove(0);
        this.setAnimations('');
      }
      this.opened = false;
    }
    if (!this.dragging) {
      return;
    }
    const { startPos } = this;
    const touch = e.touches[0];
    const offsetTop = touch.pageY - startPos.y;
    const offsetLeft = touch.pageX - startPos.x;

    if (this.opened) {
      this.offsetLeft = -(offsetLeft + this.rightWidth);
    } else {
      this.offsetLeft = offsetLeft;
    }

    const x = Math.abs(offsetLeft);
    const y = Math.abs(offsetTop);

    this.setAnimations('0ms');
    if (this.direction === 'none') {
      this.direction = x > y ? 'horizonal' : 'vertical';
    }
    if (this.direction === 'horizonal') {
      e.preventDefault();
      e.stopPropagation(); // android 必须
      const swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
      if (!swiping) {
        return;
      }
      if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) ||
        (offsetLeft < 0 && !this.rightWidth)) {
      } else {
        this.swipeMove(offsetLeft);
      }
    }
  }

  private handleTouchEnd(e: TouchEvent<HTMLDivElement>): void {
    this.setState({
      bgColor: this.props.bgColor || '#fff'
    });

    this.direction = '';
    this.setAnimations('');
    if (!this.swiping) return;
    this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1);

  }

  private resetSwipeStatus() {
    this.swiping = false;
    this.offsetLeft = 0;
    this.opened = true;
  }

  private swipeMove(offset: number) {
    this.contentRef.current.style.webkitTransform = this.translate3d(offset);
    this.rightRef.current.style.webkitTransform = this.translate3d(this.rightWidth + offset);
    offset && (this.swiping = true);
  }

  private swipeLeaveTransition(direction: number) {
    setTimeout(() => {
      if (direction > 0 && -this.offsetLeft > this.rightWidth * 0.5) {
        this.swipeMove(-this.rightWidth);
        this.resetSwipeStatus();
        return;
      }

      this.swipeMove(0);
      this.contentRef.current.style.webkitTransform = '';
      this.rightRef.current.style.webkitTransform = this.rightDefaultTransform;
    }, 0);
  }

  private setAnimations(val: string) {
    this.contentRef.current.style.transitionDuration = val;
    this.rightRef.current.style.transitionDuration = val;
  }

  private translate3d(offset: number) {
    return `translate3d(${Math.ceil(offset)}px, 0, 0)`;
  }

  render() {
    const { title, subTitle, accessory, rightButtons, height} = this.props;
    const dynamicStyle = {
      backgroundColor: this.state.bgColor,
      height: height + 'px'
    };
    const children = [];
    const titleCmp = (
      <div className="s-cell__content-title" key="title">
        {this.props.title}
      </div>
    );
    const subTitleCmp = (
      <div className="s-cell__content-subtitle" key="subTitle">
        {this.props.subTitle}
      </div>
    );
    const accessoryCmp = accessory && (
      <div className="s-cell__accessory" key="accessory">
        <SIcon icon={"arrow-right"} color={'gray'} fontSize={'20px'}></SIcon>
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
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        ref={this.nodeRef}>
        <div className="s-cell__content" ref={this.contentRef}>
          {children}
        </div>
        {accessoryCmp}
        <div className="s-cell__right" ref={this.rightRef}>
          {
            rightButtons.map((item, i) => {
              return (
                <div key={i} className="s-cell__right-btn">{item}</div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default SCell;