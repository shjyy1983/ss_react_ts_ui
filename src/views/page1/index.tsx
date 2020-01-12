import * as React from 'react';

interface Props {
  title: string;
}

class Page1 extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        hello page1
      </div>
    );
  }
}

export {
  Props,
  Page1
};