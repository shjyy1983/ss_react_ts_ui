import React, { MouseEvent } from 'react';
import Box1 from './box1';
import Box2 from './box2';

interface Props {
}
interface State {
  timer?: NodeJS.Timeout | null;
  date: Date;
}

/**
 * https://blog.logrocket.com/pure-functional-components-in-react-16-6/
 *
 * https://www.jianshu.com/p/b3d07860b778
 *
 * 包装函数：React.memo()，用于函数组件。
 * React.memo()是一个高阶函数，它与 React.PureComponent类似，但是一个函数组件而非一个类。
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      date: new Date(),
      timer: null
    };
  }
  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
    this.setState({
      timer: timer
    });
  }
  componentWillUnmount() {
    this.state.timer && clearInterval(this.state.timer);
  }
  componentDidUpdate() {
    console.log('parent update');
  }
  render() {
    return (
      <div className="page-test-memo">
        <div>{this.state.date.toString()}</div>
        {/* 由于 Box 是 PureComponent，所以不会每次都跟着父组件进行渲染 */}
        <Box1></Box1>
        {/* 通过高阶函数 memo，使得该函数组件变成 PureComponent */}
        <Box2 name={'box2'}></Box2>
      </div>
    );
  }
}
export default Page;