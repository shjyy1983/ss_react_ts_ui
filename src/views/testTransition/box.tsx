import React, { MouseEvent } from 'react';
import STransition from '@components/Base/STransition';
import SView from '@components/Base/SView';
import "./style.less";

interface Props {}
interface State {
  visible: boolean;
}

/**
 * Notification.jsx
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { visible } = this.state;
    const transitionClass: Record<string, any> = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 },
      exited:  { opacity: 0 }
    };
    return (
      <div>
        <STransition transitionClass={transitionClass} in={visible}>
          <div className="somesomebox">jjjjjjjjjhhhhh</div>
        </STransition>

        <h1 onClick={() => this.handleClick()}>显示</h1>
      </div>
    );
  }
  handleClick() {
    console.log('handleClick', this.state.visible);
    this.setState({
      visible: !this.state.visible
    });
  }
}
export default Page;