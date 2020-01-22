import React, { MouseEvent, ReactElement } from 'react';
import { SButton, SModal } from '@components/index';
import { Position } from '@utils/definition';
import "./style.less";

interface State {
  modalVisible: boolean;
  position: Position;
}

class TestModal extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      modalVisible: false,
      position: Position.Bottom
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
  }
  render(): ReactElement {
    const { modalVisible, position } = this.state;
    const datas = [];
    for (let i = 0; i < 50; i++) {
      datas.push(i);
    }
    let width = '100%';
    let height = '300px';
    if (position === Position.Left || position === Position.Right) {
      width = '300px';
      height = '100%';
    }
    if (position === Position.Center) {
      width = '300px';
      height = '300px';
    }
    return (
      <div className="page page-test-modal">
        <div className="page-content">
          <SButton title={'底部显示Modal'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleClick1}></SButton>
          <SButton title={'顶部显示Modal'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={this.handleClick2}></SButton>
          <SButton title={'左侧显示Modal'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={(e) => this.handleClick3(e)}></SButton>
          <SButton title={'右侧显示Modal'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={(e) => this.handleClick4(e)}></SButton>
          <SButton title={'居中显示Modal'} width={'100px'} color={'#fff'} bgColor={'#54a7fd'} fontSize={'14px'} onClick={(e) => this.handleClick5(e)}></SButton>
        </div>
        <SModal visible={modalVisible} position={position} width={width} height={height} onHide={() => this.setState({modalVisible: false})}>
          <div>
            {
              datas.map(data => {
                return (
                  <div key={data}>{data}</div>
                );
              })
            }
          </div>
        </SModal>
      </div>
    );
  }
  private handleClick1(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      modalVisible: true,
      position: Position.Bottom
    });
  }
  private handleClick2(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      modalVisible: true,
      position: Position.Top
    });
  }
  private handleClick3(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      modalVisible: true,
      position: Position.Left
    });
  }
  private handleClick4(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      modalVisible: true,
      position: Position.Right
    });
  }
  private handleClick5(e: MouseEvent<HTMLDivElement>) {
    this.setState({
      modalVisible: true,
      position: Position.Center
    });
  }
}

export default TestModal;