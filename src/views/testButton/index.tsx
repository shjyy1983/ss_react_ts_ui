import React, { MouseEvent, ReactElement } from 'react';
import SButton from '@components/SButton';

interface Props {}
interface State {}

class TestButton extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render(): ReactElement {
    return (
      <div className="page page-test-button">
        <div className="page-content">
          <SButton title={'hello'} color={'#fff'} bgColor={'#54a7fd'} onClick={this.handleClick}></SButton>
        </div>
      </div>
    );
  }
  private handleClick(e: MouseEvent<HTMLDivElement>) {
    console.log(e);
  }
}

export default TestButton;