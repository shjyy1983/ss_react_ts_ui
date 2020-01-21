import React, { MouseEvent } from 'react';

interface Props {
  name: string;
}
interface State {}

class Cat extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div className="cat">hello {name}</div>
    );
  }
}
export default Cat;