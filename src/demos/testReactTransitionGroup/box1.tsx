import React, { useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import './style.less';

interface Props {
  visible?: boolean;
}
interface State {}

/**
 * https://reactcommunity.org/react-transition-group/css-transition
 *
 * 使用 CSSTransition
 */
class Box1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onEnter = this.onEnter.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExit = this.onExit.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  render() {
    const { visible } = this.props;

    return (
      <CSSTransition
        unmountOnExit
        in={visible}
        timeout={1000}
        classNames="fade"
        onEnter={() => this.onEnter()}
        onEntering={() => this.onEntering()}
        onEntered={() => this.onEntered()}
        onExit={() => this.onExit()}
        onExiting={() => this.onExiting()}
        onExited={() => this.onExited()}>
        <div className="some-box1">
          Hello world
        </div>
      </CSSTransition>
    );
  }
  onEnter() {
    console.log('onEnter');
  }
  onEntering() {
    console.log('onEntering');
  }
  onEntered() {
    console.log('onEntered');
  }
  onExit() {
    console.log('onExit');
  }
  onExiting() {
    console.log('onExiting');
  }
  onExited() {
    console.log('onExited');
  }
}

export default Box1;