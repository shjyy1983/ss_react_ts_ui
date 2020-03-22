/*
 * @Author: SHEN
 * @Date: 2020-03-22 01:56:22
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-03-22 22:18:27
 */

import React, { MouseEvent, ReactElement } from 'react';
import SCell from '@components/SCell';

class TestCell extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  render(): ReactElement {
    const rightButtons = ['按钮1', '按钮2'];
    return (
      <div className="page page-test-cell">
        <div className="page-content">
          {
            [...Array(10)].map((v, i) => {
              return <SCell key={i} title={`标题标题标题标题标题标题标题-${i}`} subTitle="子标题" height={50} bgColor='#fff' hightlightBgColor='#ddd' rightButtons={rightButtons} accessory></SCell>;
            })
          }
        </div>
      </div>
    );
  }
}

export default TestCell;