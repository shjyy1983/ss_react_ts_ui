import React, { MouseEvent, createRef, forwardRef } from 'react';
import Box1 from './box1';

interface Props {

}
interface State {
  inputRef?: React.RefObject<HTMLInputElement>;
}

/**
 * https://reactjs.org/docs/react-api.html#reactforwardref
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputRef: createRef()
    };
  }
  render() {
    const { inputRef } = this.state;

    return (
      <div className="page-test-forwardref">

      </div>
    );
  }
}
export default Page;