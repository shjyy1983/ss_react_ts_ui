import React, { MouseEvent } from 'react';

interface Props {
  name?: string;
}
interface State {}

class Box1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div className="box">{name}</div>
    );
  }
}
export default Box1;