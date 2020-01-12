import React, { SFC } from 'react';
import { string } from 'prop-types';
import './style.less';

interface IProps {
  title?: string;
  subTitle?: string;
}

interface IState {

}

class SCell extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="s-cell">
        <div className="s-cell-title">{this.props.title}</div>
        <div className="s-cell-subtitle">{this.props.subTitle}</div>
      </div>
    );
  }
}

export default SCell;