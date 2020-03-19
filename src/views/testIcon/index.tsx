/*
 * @Author: SHEN
 * @Date: 2020-03-19 15:46:21
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-03-19 16:53:36
 */

import React, { MouseEvent, ReactElement } from 'react';
import SIcon from '@components/SIcon';

class TestIcon extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render(): ReactElement {
    return (
      <div className="page page-test-icon">
        <div className="page-content">
          <SIcon icon={"email"} fontSize={30}></SIcon>
          <SIcon icon={"voice"} fontSize={30} color={'blue'}></SIcon>
          <SIcon icon={"avatar"} fontSize={30} color={'orange'} throttleDelay={1000} onClick={this.handleClick}></SIcon>
          <SIcon icon={"email"} fontSize={30} className={"classnotexsited"}></SIcon>
        </div>
      </div>
    );
  }

  private handleClick(e: MouseEvent<HTMLDivElement>) {
    console.log('点击了', e);
  }
}

export default TestIcon;