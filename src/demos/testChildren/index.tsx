import React, { MouseEvent } from 'react';
import Box1 from './box1';

interface Props {}
interface State {}

/**
 * https://reactjs.org/docs/react-api.html#reactchildrenforeach
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="page-test-children">
        <Box1>
          {/* child 1 */}
          <div>abc</div>
          {/* child 2 */}
          <div>
            <span>hello</span>
            <span>world</span>
          </div>
        </Box1>
      </div>
    );
  }
}
export default Page;