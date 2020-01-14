import * as React from 'react';

interface Props {
  title: string;
}

class Page1 extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.demo();
  }
  render() {
    return (
      <div>
        hello page1
      </div>
    );
  }
  demo() {
  }
}

export {
  Props,
  Page1
};