import React, { MouseEvent } from 'react';
import SButton from '@components/SButton';
import Mask from './mask';

interface Props {
}
interface State {
  box1Visible: boolean;
}

/**
 * http://reactcommunity.org/react-transition-group/css-transition
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      box1Visible: false
    };
    this.handleShowBox1 = this.handleShowBox1.bind(this);
    this.hideMask = this.hideMask.bind(this);
  }
  render() {
    const { box1Visible } = this.state;
    return (
      <div className="page-test-react-transitin-group2">
        <SButton title={'点击显示box1'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleShowBox1}></SButton>

        <Mask visible={box1Visible} hideMask={this.hideMask}>
          <h1>hello</h1>
        </Mask>

        <div>footer</div>
      </div>
    );
  }
  handleShowBox1() {
    console.log('click');
    this.setState({
      box1Visible: !this.state.box1Visible
    });
  }
  hideMask(v: boolean) {
    this.setState({
      box1Visible: !v
    });
  }
}
export default Page;