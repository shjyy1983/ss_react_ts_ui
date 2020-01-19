import React, { MouseEvent } from 'react';
import  "./style.less";

interface Props {
  name: string;
}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div className="some-big-box">{name}</div>
    );
  }
}
export default Page;