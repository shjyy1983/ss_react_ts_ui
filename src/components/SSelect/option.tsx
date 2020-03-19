import React, { MouseEvent } from 'react';

interface Props {
  visible: boolean;
  index: number;
}
interface State {}

class SOption extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="s-option">op1</div>
    );
  }
}
export default SOption;