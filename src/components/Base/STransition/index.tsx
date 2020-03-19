import React, { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import SView from '../SView';

type noneFun = () => void ;

interface Props {
  onEnter?: noneFun;
  onEntering?: noneFun;
  onEntered?: noneFun;
  onExit?: noneFun;
  onExiting?: noneFun;
  onExited?: noneFun;
  in?: boolean;
  unmountOnExit?: boolean;
  duration?: number;
  animation?: string;
}
interface State {}

class STransition extends React.Component<Props, State> {
  static defaultProps = {
    in: false,
    duration: 300,
    unmountOnExit: true,
    animation: 'fade'
  }

  constructor(props: Props) {
    super(props);
  }
  render() {
    const {
      in: inProp,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      unmountOnExit,
      duration,
      animation
    } = this.props;
    return (
      <CSSTransition
        in={inProp}
        onEnter={() => onEnter && onEnter()}
        onEntering={() => onEntering && onEntering()}
        onEntered={() => onEntered && onEntered()}
        onExit={() => onExit && onExit()}
        onExiting={() => onExiting && onExiting()}
        onExited={() => onExited && onExited()}
        unmountOnExit={unmountOnExit}
        timeout={duration}
        classNames={animation}>
        {
          state => {
            return (
              <SView>
                {this.props.children}
              </SView>
            );
          }
        }
      </CSSTransition>
    );
  }
}
export default STransition;