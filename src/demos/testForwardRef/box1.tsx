import React, { MouseEvent, forwardRef } from 'react';

interface Props {
  ref?: React.RefObject<HTMLInputElement>;
}
interface State {

}

class Box1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="box">
        <input type="text" ref={this.props.ref}></input>
      </div>
    );
  }
}
export default Box1;