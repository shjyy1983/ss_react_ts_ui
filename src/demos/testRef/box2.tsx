import React, { MouseEvent } from 'react';

interface Props {}
interface State {
  info: string;
}

class Box2 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      info: ''
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div className="box">
        <div>box2</div>
        <div>{info}</div>
      </div>
    );
  }
  changeInfo() {
    this.setState({
      info: Math.floor(Math.random() * 1000) + ''
    });
  }
}
export default Box2;