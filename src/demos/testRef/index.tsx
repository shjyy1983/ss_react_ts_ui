import React, { MouseEvent } from 'react';
import SButton from '@components/SButton';
import Box2 from './box2';
import './style.less';

interface Props {}
interface State {
  box1Ref: React.RefObject<HTMLDivElement>;
  box2Ref: React.RefObject<Box2>;
  sayHello: (param: string) => void;
}

class TestRef extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      box1Ref: React.createRef(),
      box2Ref: React.createRef(),
      sayHello: this.sayHello
    };
    this.onDosome = this.onDosome.bind(this);
    this.onDosome2 = this.onDosome2.bind(this);
  }
  render() {
    const { sayHello } = this.state;
    return (
      <div className="page-test-ref">
        <SButton title={'获取box1引用'} width={'160px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.onDosome}></SButton>
        <div className="box" ref={this.state.box1Ref}>box</div>
        <SButton title={'调用box2方法'} width={'160px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.onDosome2}></SButton>
        <Box2 ref={this.state['box2Ref']}></Box2>
      </div>
    );
  }
  onDosome() {
    console.log(this.state.box1Ref);
  }
  onDosome2() {
    this.state.box2Ref.current.changeInfo();
  }
  sayHello(param: string) {
    console.log('子组件调用了父组件的 sayHello: ' + param);
  }
}
export default TestRef;