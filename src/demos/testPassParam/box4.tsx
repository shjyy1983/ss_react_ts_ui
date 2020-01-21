import React, { MouseEvent } from 'react';
import TestPassParam from './index';
import './style.less';

interface Props {
  parent: TestPassParam; // 父组件引用
}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.dosome = this.dosome.bind(this);
  }
  render() {
    return (
      <div className="box4" onClick={e => this.dosome()}>box4</div>
    );
  }
  dosome() {
    this.props.parent.sayHello('box4');
  }
}
export default Page;