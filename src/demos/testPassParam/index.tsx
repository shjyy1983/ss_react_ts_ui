import React, { MouseEvent } from 'react';
import SButton from '@components/SButton';
import Box1 from './box1';
import Box2 from './box2';

interface Props {}
interface State {
  box1Name: string;
  box2Name: string;
  box1Ref: any;
}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      box1Name: 'box1',
      box2Name: 'box2',
      box1Ref: React.createRef()
    };
    this.handleGetBox1State = this.handleGetBox1State.bind(this);
    this.handlePassParamToChildren = this.handlePassParamToChildren.bind(this);
  }
  render() {
    const { box1Name, box2Name} = this.state;
    return (
      <div className="page">
        <div className="ctrls">
          <SButton title={'调用子组件box1方法'} width={'160px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleGetBox1State}></SButton>
          <SButton title={'传递参数给子组件'} width={'160px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handlePassParamToChildren}></SButton>
        </div>
        <Box1 name={box1Name} ref={this.state.box1Ref}></Box1>
        <Box2 name={box2Name}></Box2>
      </div>
    );
  }
  handleGetBox1State() {
    this.state.box1Ref.current.changeExtra();
  }
  handlePassParamToChildren() {
    const random = Math.floor(Math.random() * 1000);
    this.setState({
      box1Name: 'box1_' + random,
      box2Name: 'box2_' + random
    });
  }
}
export default Page;