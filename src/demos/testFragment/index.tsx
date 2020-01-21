import React, { MouseEvent } from 'react';
import Box1 from './box1';

interface Props {}
interface State {}

/**
 * https://reactjs.org/docs/react-api.html#reactfragment
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="page-test-fragment">
        <Box1></Box1>
      </div>
    );
  }
}
export default Page;