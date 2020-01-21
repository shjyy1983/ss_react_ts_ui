import React, { MouseEvent } from 'react';
import { Transition } from 'react-transition-group';
import SView from '../SView';

type noneFun = () => void ;

interface Props {
  onEnter?: noneFun;
  onEntering?: noneFun;
  onEntered?: noneFun;
  onExit?: noneFun;
  onExiting?: noneFun;
  onExited?: noneFun;
  addEndListener?: noneFun;
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  duration?: number;
  transitionClass?: Record<string, any>;
}
interface State {}

class STransition extends React.Component<Props, State> {
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
      addEndListener,
      unmountOnExit,
      appear,
      duration,
      mountOnEnter,
      transitionClass
    } = this.props;
    return (
      <Transition
        onEnter={() => onEnter && onEnter()}
        onEntering={() => onEntering && onEntering()}
        onEntered={() => onEntered && onEntered()}
        onExit={() => onExit && onExit()}
        onExiting={() => onExiting && onExiting()}
        onExited={() => onExited && onExited()}
        addEndListener={() => addEndListener && addEndListener()}
        in={inProp}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
        appear={appear}
        timeout={duration}>
        {
          state => {
            console.log(state, transitionClass[state]);
            return (
              <SView className={transitionClass[state]}>
                {this.props.children}
              </SView>
            );
          }
        }
      </Transition>
    );
  }
}
export default STransition;