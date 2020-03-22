/*
 * @Author: SHEN
 * @Date: 2020-03-22 01:56:22
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-03-22 21:48:40
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
            [...Array(50)].map((v, i) => {
              return <SCell key={i} title="标题标题标题标题标题标题标题00" subTitle="子标题" bgColor='#eee' hightlightBgColor='#ddd' rightButtons={rightButtons} accessory></SCell>;
            })
          }
        </div>
      </div>
    );
  }
}

export default TestCell;