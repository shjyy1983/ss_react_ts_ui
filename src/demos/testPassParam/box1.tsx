import React, { MouseEvent } from 'react';
import SButton from '@components/SButton';
import  "./style.less";

interface Props {
  name: string;
}
interface State {
  info: string;
}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      info: ''
    };
    this.handlePassParamToParent = this.handlePassParamToParent.bind(this);
  }
  render() {
    const { name } = this.props;
    const { info } = this.state;
    return (
      <div className="some-big-box">
        <div>name: {name}</div>
        <div>info: {info}</div>
        <SButton title={'传递给父组件'} width={'120px'} color={'#fff'} bgColor={'teal'} fontSize={'12px'} onClick={this.handlePassParamToParent}></SButton>
      </div>
    );
  }
  private changeExtra() {
    this.setState({
      info: Math.floor(Math.random() * 10000) + ''
    });
  }
  handlePassParamToParent() {

  }
}
export default Page;