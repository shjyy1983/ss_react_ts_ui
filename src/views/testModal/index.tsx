import React, { MouseEvent, ReactElement } from 'react';
import SButton from '@components/SButton';
import SModal from '@components/SModal';


class TestModal extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render(): ReactElement {
    return (
      <div className="page page-test-button">
        <div className="page-content">
          <SButton title={'点击显示Modal'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleClick}></SButton>
        </div>
      </div>
    );
  }
  private handleClick(e: MouseEvent<HTMLDivElement>) {

  }
}

export default TestModal;