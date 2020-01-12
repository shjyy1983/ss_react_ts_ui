import * as React from 'react';
import "./style.less";

interface Props {
  title: string;
}

class PageError extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="page page-error">
        <div className="page-content">
          <p className="title">Error Page</p>
        </div>
      </div>
    );
  }
}

export {
  Props,
  PageError
};