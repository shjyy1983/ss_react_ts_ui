import React, { MouseEvent } from 'react';
import Box1 from './box1';
import './style.less';

interface Props {}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="page-test-create-element">
        <Box1></Box1>
      </div>
    );
  }
}
export default Page;