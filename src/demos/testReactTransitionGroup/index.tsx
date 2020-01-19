import React, { MouseEvent, ReactElement } from 'react';
import SButton from '@components/SButton';
import Box1 from './box1';
import './style.less';

interface Props {}

interface State {
  box1Visible: boolean;
}

/**
 * https://github.com/reactjs/react-transition-group
 * https://reactcommunity.org/react-transition-group/
 *
 * https://reactcommunity.org/react-transition-group/css-transition
 */
class TestReactTransitionGroup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      box1Visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { box1Visible } = this.state;
    return (
      <div className="page">
        <SButton title={'点击显示'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleClick}></SButton>
        <Box1 visible={box1Visible}></Box1>
        <div>footer</div>
      </div>
    );
  }
  private handleClick(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      box1Visible: !this.state.box1Visible
    });
  }
}

export default TestReactTransitionGroup;