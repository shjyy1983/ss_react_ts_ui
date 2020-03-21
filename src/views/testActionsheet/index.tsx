import React, { ReactElement, MouseEvent } from 'react';
import SButton from '@components/SButton';
import SActionsheet from '@components/SActionsheet';
import { ButtonType } from '@utils/definition';
import './style.less';

interface State {
  visible: boolean;
  buttons: Array<Record<string, string | number>>;
}

class TestActionsheet extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      visible: true,
      buttons: [
        { title: 'action 1', index: 0, type: ButtonType.Normal },
        { title: 'action 2', index: 1, type: ButtonType.Normal },
        { title: 'action 3', index: 2, type: ButtonType.Normal },
        { title: '取消', index: 3, type: ButtonType.Cancel },
        { title: '确定', index: 4, type: ButtonType.Ok }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  render(): ReactElement {
    const title = 'hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world, end';
    return (
      <div className="page page-test-actionsheet">
        <div className="page-content">
          <SButton title={'显示actionsheet'} color={'#fff'} bgColor={'#54a7fd'} onClick={this.handleClick}></SButton>
        </div>
        <SActionsheet visible={this.state.visible} title={title} buttons={this.state.buttons} onSelected={(index, type) => this.handleSelect(index, type)} onHide={() => this.setState({visible: false})}></SActionsheet>
      </div>
    );
  }
  private handleClick(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      visible: !this.state.visible
    });
  }
  private handleSelect(index: number, type: ButtonType) {
    if (index === 3 || index === 4) {
      this.setState({visible: false});
    }
    console.log(index, type);
  }
}

export default TestActionsheet;