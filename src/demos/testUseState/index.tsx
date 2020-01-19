import React, { MouseEvent } from 'react';
import LessText from './LessText';

interface Props {}
interface State {}

class Box extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <LessText
          text={`专注、努力是成功的真正关键。把你的眼睛盯在目标上，然后朝着目标迈出下一步`}
          trimLength={20}
        />
      </div>
    );
  }
  private handleClick(e: MouseEvent<HTMLDivElement>) {

  }
}
export default Box;