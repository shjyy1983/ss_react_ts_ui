import React, { MouseEvent } from 'react';
import SButton from '@components/SButton';
import Box1 from './box1';
import Box2 from './box2';
import Box3 from './box3';
import Box4 from './box4';

interface Props {}
interface State {
  box1Name: string;
  box2Name: string;
  box1Ref: any;
  sayHello: (param: string) => void;
}

class TestPassParam extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      box1Name: 'box1',
      box2Name: 'box2',
      box1Ref: React.createRef(),
      sayHello: this.sayHello
    };
    this.handleGetBox1State = this.handleGetBox1State.bind(this);
    this.handlePassParamToChildren = this.handlePassParamToChildren.bind(this);
  }
  render() {
    const { sayHello } = this.state;
    const { box1Name, box2Name} = this.state;
    return (
      <div className="page-test-pass-param">
        <div className="ctrls">
          <SButton title={'调用子组件box1方法'} width={'160px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleGetBox1State}></SButton>
          <SButton title={'传递参数给子组件'} width={'160px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handlePassParamToChildren}></SButton>
        </div>
        <Box1 name={box1Name} ref={this.state.box1Ref}></Box1>
        <Box2 name={box2Name}></Box2>

        <div>父类方法通过 prop 传入，子组件调用父组件方法</div>
        <Box3 sayHello={sayHello}></Box3>
        <div>父组件传递this到子组件</div>
        <Box4 parent={this}></Box4>
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
  sayHello(param: string) {
    console.log('子组件调用了父组件的 sayHello: ' + param);
  }
}
export default TestPassParam;