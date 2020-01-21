import React, { MouseEvent, ReactElement } from 'react';
import { SButton, SModal } from '@components/index';

interface State {
  modalVisible: boolean;
}

class TestModal extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render(): ReactElement {
    const { modalVisible } = this.state;
    return (
      <div className="page page-test-button">
        <div className="page-content">
          <SButton title={'点击显示Modal'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleClick}></SButton>
        </div>
        <SModal visible={modalVisible} position={'bottom'} onHide={() => this.setState({modalVisible: false})}>
          <h1>hello</h1>
        </SModal>
      </div>
    );
  }
  private handleClick(e: MouseEvent<HTMLDivElement>) {
    console.log('handleClick');
    this.setState({
      modalVisible: true
    });
  }
}

export default TestModal;