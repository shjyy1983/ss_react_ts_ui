import React, { MouseEvent } from 'react';
import Box from './box';

interface Props {}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="page-test-transition">
        <Box></Box>
      </div>
    );
  }
}
export default Page;