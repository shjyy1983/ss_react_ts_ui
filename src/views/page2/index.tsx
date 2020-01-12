import * as React from 'react';

interface Props {
  title: string;
}

class Page2 extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        hello page2
      </div>
    );
  }
}

export {
  Props,
  Page2
};