import React, { MouseEvent } from 'react';
import Box from './box';

interface Props {}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const listComp = [];
    for (let i = 0; i < 30; i++) {
      listComp.push(
        <div key={i}>{i}</div>
      );
    }
    return (
      <div className="page-react-click-outside">
        <Box name={'box1'}></Box>
        {listComp}
        <Box name={'box2'}></Box>
      </div>
    );
  }
}
export default Page;