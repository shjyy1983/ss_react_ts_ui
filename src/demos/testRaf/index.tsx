import React, { MouseEvent, ReactElement } from 'react';
import SButton from '@components/SButton';
import raf from 'raf';

interface State {
  width: number;
  height: number;
}

class TestModal extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      width: 100,
      height: 100
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render(): ReactElement {
    const { width, height } = this.state;

    const dynamicStyle = {
      width: `${width}px`,
      height: `${height}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee'
    };
    return (
      <>
        <div className="page page-test-button">
          <div className="page-content">
            <SButton title={'点击显示 Raf'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleClick}></SButton>
            <div style={dynamicStyle}><span>box</span></div>
          </div>
        </div>
      </>
    );
  }
  private handleClick(e: MouseEvent<HTMLDivElement>) {
    let c = 0;
    const dosome = () => {
      if (++c < 100) {
        this.setState({
          width: 100 + c,
          height: 100 + c
        });
        raf(dosome);
      } else {
        console.log('完成');
      }
    };

    raf(dosome);
  }
}

export default TestModal;