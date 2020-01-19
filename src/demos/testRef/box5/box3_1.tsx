import React, { MouseEvent } from 'react';
import '../style.less';

interface Props {}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="box3_1">box3_1</div>
    );
  }
}
export default Page;