import React, { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.less';

interface Props {
  visible: boolean;
  hideMask?: (v: boolean) => void;
}
interface State {}

class Box extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);

    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
  }
  render() {
    const { visible, children } = this.props;
    return (
      <div>
        <CSSTransition in={visible} timeout={300} classNames="mask mask" unmountOnExit>
          <div></div>
        </CSSTransition>

        <CSSTransition
          in={visible}
          timeout={500}
          classNames="alert alert"
          unmountOnExit
          onEnter={this.onEnter}
          onExit={this.onExit}>
          <div className="msg-box-content-wrapper"  onClick={this.handleHide}>
            <div className="msg-box-content" onClick={e => this.handleContentClick(e)}>
              {children}
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
  handleHide() {
    this.props.hideMask(true);
  }
  handleContentClick(e: MouseEvent) {
    e.stopPropagation();
    console.log('handleContentClick');
  }
  onEnter(node: HTMLElement, isAppearing: boolean) {
    console.log('onEnter', isAppearing);
  }
  onExit(node: HTMLElement) {
    console.log('onExit');
  }
}
export default Box;