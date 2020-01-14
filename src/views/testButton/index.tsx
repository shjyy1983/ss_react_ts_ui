import React, { MouseEvent, ReactElement } from 'react';
import SButton from '@components/SButton';
import { throttle } from '@utils/func';

interface Props {}
interface State {}

class TestButton extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleClick = throttle(this.handleClick, 2000).bind(this);
  }
  render(): ReactElement {
    return (
      <div className="page page-test-button">
        <div className="page-content">
          <SButton title={'hello'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} icon={"icon-email"} onClick={this.handleClick}></SButton>
        </div>
      </div>
    );
  }
  private handleClick(e: MouseEvent<HTMLDivElement>) {
    console.log(e);
  }
}

export default TestButton;