import React, { MouseEvent } from 'react';

interface Props {
  sayHello: (param: string) => void;
}
interface State {}

class Box3 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { sayHello } = this.props;
    return (
      <div className="box3" onClick={e => sayHello('box3')}>box3 点击</div>
    );
  }
}
export default Box3;