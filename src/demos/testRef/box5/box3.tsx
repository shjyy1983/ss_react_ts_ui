import React, { MouseEvent } from 'react';
import Box31 from './box3_1';
import '../style.less';

interface Props {}
interface State {
}

class Box2 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="box3">
        <div>box3</div>
        <Box31></Box31>
      </div>
    );
  }
}
export default Box2;