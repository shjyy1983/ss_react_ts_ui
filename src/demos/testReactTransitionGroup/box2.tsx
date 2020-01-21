import React, { MouseEvent } from 'react';
import { Transition } from 'react-transition-group';
import './style.less';

interface Props {
  visible?: boolean;
}
interface State {}

/**
 * http://reactcommunity.org/react-transition-group/transition-group
 *
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { visible } = this.props;

    const duration = 1000;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    };

    const transitionStyles: Record<string, any> = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 },
      exited:  { opacity: 0 },
    };
    return (
      <Transition in={visible} timeout={duration} unmountOnExit={true}>
        { state => {
          console.log(state);
          return (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }} className="some-box2">box2</div>
          );
        }}
      </Transition>
    );
  }
}
export default Page;