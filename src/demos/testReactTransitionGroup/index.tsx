import React, { MouseEvent, ReactElement } from 'react';
import SButton from '@components/SButton';
import Box1 from './box1';
import Box2 from './box2';
import Box3 from './box3';
import Box4 from './box4';
import './style.less';

interface Props {}

interface State {
  box1Visible: boolean;
  box2Visible: boolean;
  box3Visible: boolean;
  box4Visible: boolean;
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
      box1Visible: false,
      box2Visible: false,
      box3Visible: false,
      box4Visible: false
    };
    this.handleShowBox1 = this.handleShowBox1.bind(this);
    this.handleShowBox2 = this.handleShowBox2.bind(this);
    this.handleShowBox3 = this.handleShowBox3.bind(this);
    this.handleShowBox4 = this.handleShowBox4.bind(this);
  }
  render() {
    const { box1Visible, box2Visible, box3Visible, box4Visible } = this.state;
    return (
      <div className="page-test-react-transition-group">
        <SButton title={'点击显示box1'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleShowBox1}></SButton>
        <Box1 visible={box1Visible}></Box1>

        <SButton title={'点击显示box2'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleShowBox2}></SButton>
        <Box2 visible={box2Visible}></Box2>

        <SButton title={'点击显示box3'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleShowBox3}></SButton>
        <Box3 visible={box3Visible}></Box3>

        <SButton title={'点击显示box4'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleShowBox4}></SButton>
        <Box4 visible={box4Visible}></Box4>
        <div>footer</div>
      </div>
    );
  }
  private handleShowBox1(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      box1Visible: !this.state.box1Visible
    });
  }
  private handleShowBox2(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      box2Visible: !this.state.box2Visible
    });
  }
  private handleShowBox3(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      box3Visible: !this.state.box3Visible
    });
  }
  private handleShowBox4(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      box4Visible: !this.state.box4Visible
    });
  }

}

export default TestReactTransitionGroup;