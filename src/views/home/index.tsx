import React, { MouseEvent } from 'react';
import SButton from '@components/SButton';
import SIcon from '@components/SIcon';
import SCell from '@components/SCell';
import SInput from '@components/SInput';
import { number } from 'prop-types';
import service from './service';

interface IProps {
  title?: string;
  history: any;
}

interface IState {
  count: number;
}

class Home extends React.PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }
  public render() {
    const datas = service.getDatas();
    const listCells = datas.map(item => {
      return (<SCell key={item.id} title={item.title} subTitle={item.subTitle}></SCell>);
    });

    return (
      <div className="page page-home">
        <div className="page-content">
          home {this.state.count}
          <SButton title={'hello'} color={'#fff'} bgColor={'#54a7fd'} onClick={this.handleClick}></SButton>
          <SButton title={'导航'} color={'#fff'} bgColor={'#54a7fd'} onClick={this.navigateTo}></SButton>
          <SIcon icon={"icon-card"}></SIcon>
          {listCells}
          <SInput placeholder={"输入..."} default={"abc"} autofocus={false} width={'200px'} padding={'0 4px'} fontSize={14}></SInput>
        </div>
      </div>
    );
  }

  private handleClick(e: MouseEvent<HTMLDivElement>): void {
    this.setState({
      count: this.state.count + 1
    });
  }

  private navigateTo(): void {
    this.props.history.push('/page1');
  }
}

export {
  IProps,
  Home
};