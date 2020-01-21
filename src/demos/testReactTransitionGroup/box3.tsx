import React, { MouseEvent } from 'react';
import { Transition } from 'react-transition-group';

interface Props {
  visible?: boolean;
}
interface State {}

/**
 * https://juejin.im/entry/5b3e14e86fb9a04fc4369f1e
 */
class Box3 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onEnter = this.onEnter.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExit = this.onExit.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.addaddEndListener = this.addaddEndListener.bind(this);
  }
  onEnter(node: HTMLElement, isAppearing: boolean) {
    console.log('onEnter', isAppearing);
  }
  onEntering(node: HTMLElement, isAppearing: boolean) {
    console.log('onEntering', isAppearing);
  }
  onEntered(node: HTMLElement, isAppearing: boolean) {
    console.log('onEntered', isAppearing);
  }
  onExit(node: HTMLElement) {
    console.log('onExit');
  }
  onExiting(node: HTMLElement) {
    console.log('onExiting');
  }
  onExited(node: HTMLElement) {
    console.log('onExited');
  }
  addaddEndListener(node: HTMLElement, done: () => void) {
    node.addEventListener('transitionend', this.done, false);
  }
  done() {
    console.log('结束了');
  }
  render() {
    const { visible } = this.props;
    const defaultStyle = {
      transition: `transform ${300}ms ease-in-out, opacity ${300}ms ease-in-out`,
      transform: 'translateX(100px)',
      opacity: '0',
      width: '100px',
      height: '100px',
      backgroundColor: '#eee'
    };

    const transitionStyles: Record<string, any> = {
      entering: { transform: 'translateX(100px)', opacity: '0'},
      entered:  { transform: 'translateX(0px)', opacity: '1' },
      exiting: {transform: 'translateX(0px)', opacity: '1'},
      exited: {transform: 'translateX(0px)', opacity: '0'}
    };
    const duration = {
      enter: 300,
      exit: 300,
    };
    return (
      <Transition
        in={visible}
        unmountOnExit={true} // 为true 代表退出的时候移除dom
        appear={true} // 为true  渲染的时候就直接执行动画，默认false，
        timeout={duration}
        onEnter={this.onEnter}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
        addEndListener={this.addaddEndListener}
      >
        {
          state => {
            console.log(state); //你可以很直观的看到组件加载和卸载时候的状态
            return(
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                {this.props.children}
              </div>
            );
          }
        }
      </Transition>
    );
  }
}
export default Box3;