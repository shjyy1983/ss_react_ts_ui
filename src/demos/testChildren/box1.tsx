import React, { MouseEvent } from 'react';

interface Props {}
interface State {}

class Box1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const children = this.props.children;
    const copyedChildCmps = React.Children.map(children, child => {
      return child;
    });

    return (
      <div className="box">
        {children}
        {copyedChildCmps}
      </div>
    );
  }
}
export default Box1;