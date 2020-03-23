import React, { MouseEvent } from 'react';
import STransition from '@components/Base/STransition';
import SIcon from '@components/SIcon';
import "./style.less";

interface State {
  visible: boolean;
  animation: string;
}

class Page extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      visible: false,
      animation: 'fade'
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  render() {
    const { visible, animation } = this.state;
    return (
      <div className="page-test-transition">
        <h1 onClick={() => this.handleClick1()}>fade效果</h1>
        <STransition in={visible} unmountOnExit={true} animation={animation} duration={300}>
          <div className="somesomebox">
            <div>Hello world </div>
            <SIcon icon={"voice"} fontSize={30} color={'blue'}></SIcon>
          </div>
        </STransition>
        <h1 onClick={() => this.handleClick2()}>alert效果</h1>

      </div>
    );
  }
  handleClick1() {
    this.setState({
      visible: !this.state.visible,
      animation: 'fade'
    });
  }
  handleClick2() {
    this.setState({
      visible: !this.state.visible,
      animation: 'alert'
    });
  }
}
export default Page;