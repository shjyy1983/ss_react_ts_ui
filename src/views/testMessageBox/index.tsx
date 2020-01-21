import React, { MouseEvent, ReactElement } from 'react';
import SButton from '@components/SButton';
import SMessageBox from '@components/SMessageBox';
import { throttle } from '@utils/func';


class TestButton extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.handleClick = throttle(this.handleClick, 2000).bind(this);
  }
  render(): ReactElement {
    return (
      <div className="page page-test-button">
        <div className="page-content">
          <SButton title={'点击显示'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleClick}></SButton>
        </div>
      </div>
    );
  }
  private handleClick(e: MouseEvent<HTMLDivElement>) {
    console.log(SMessageBox);
    SMessageBox.alert('title');
  }
}

export default TestButton;