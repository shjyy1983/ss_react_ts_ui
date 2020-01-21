import React, { MouseEvent } from 'react';
import { Transition } from 'react-transition-group';
import STransition from '@components/Base/STransition';
import SView from '@components/Base/SView';
import './style.less';

interface Props {
  visible?: boolean;
}
interface State {}

/**
 * https://reactcommunity.org/react-transition-group/transition
 */
class Box3 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { visible } = this.props;

    const duration = {
      appear: 500,
      enter: 300,
      exit: 500,
    };
    return (
      <Transition
        in={visible}
        timeout={duration}
        unmountOnExit={true}
        appear={true} // 为true  渲染的时候就直接执行动画，默认false，
      >
        { state => {
          // console.log(state, transitionClass, transitionClass[state]);
          const clsName = `${state} el-notification el-notification-fade-${state}`;
          console.log(clsName);
          return (
            <SView show={visible}>
              <div className={clsName}>
                <SView>
                  <div>hello</div>
                </SView>
              </div>
            </SView>
          );
        }}
      </Transition>
    );
  }
  // render() {
  //   const { visible } = this.props;

  //   const duration = 3000;

  //   const defaultStyle = {
  //     transition: `opacity ${duration}ms ease-in-out`,
  //     opacity: 0,
  //   };

  //   const transitionClass: Record<string, any> = {
  //     exiting: 'el-notification-fade-leave-active',
  //     exited: 'el-notification-fade-enter',
  //     // entering: 'el-notification-fade-enter',
  //   };
  //   return (
  //     <STransition
  //       unmountOnExit={true}
  //       transitionClass={transitionClass}
  //       appear={true}
  //       in={visible}>
  //       <SView show={visible}>
  //         <div className="el-notification">
  //           Hello2
  //         </div>
  //       </SView>
  //     </STransition>
  //   );
  // }
}
export default Box3;