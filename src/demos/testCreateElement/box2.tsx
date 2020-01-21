import React, { MouseEvent } from 'react';

interface Props {}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="box">box</div>
    );
  }
}
export default Page;