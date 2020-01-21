import React, { MouseEvent } from 'react';

interface Props {}
interface State {}

class Page extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  componentDidUpdate() {
    console.log('box updated');
  }
  render() {
    console.log('box1 render ...');
    return (
      <div className="box">box</div>
    );
  }
}
export default Page;