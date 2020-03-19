import React, { MouseEvent } from 'react';
import ClickOutside from 'react-click-outside';

interface Props {
  name: string;
}
interface State {}

class Box extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="box">
        <h1>hello {this.props.name}</h1>
      </div>
    );
  }
  handleClickOutside() {
    console.log('handleClickOutside', this.props.name);
  }
}
export default ClickOutside(Box);