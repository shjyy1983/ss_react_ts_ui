import React from 'react';
import './style.less';

interface Props {

}

interface State {

}

class SMessageBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="s-message-box">
        <h1>box</h1>
      </div>
    );
  }
}

export default SMessageBox;