import React, { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import "./style.less";

interface Props {
  visible: boolean;
  onClick?: () => void;
}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { visible } = this.props;
    return (
      <CSSTransition in={visible} timeout={300} classNames="mask mask" unmountOnExit onClick={this.handleClick}>
        <div className="s-mask"></div>
      </CSSTransition>
    );
  }
  handleClick() {
    this.props.onClick && this.props.onClick();
  }
}
export default Page;