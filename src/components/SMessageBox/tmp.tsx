import React, { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import SMask from '@components/SMask';
import SModal from '@components/SModal';
import './style.less';

interface Props {
  title?: string;
  willUnmount?: () => void;
}

interface State {
  visible: boolean;
}

class SMessageBox extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleHide = this.handleHide.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  componentDidMount() {
    this.setState({
      visible: true
    });
  }
  render() {
    const { children, title } = this.props;
    const { visible } = this.state;
    const maskComp = (
      <SMask visible={visible}></SMask>
    );
    return (
      <div className="s-message-box">
        {maskComp}
        <CSSTransition
          in={visible}
          timeout={500}
          classNames="alert alert"
          unmountOnExit
          onExited={this.onExited}>
          <div className="msg-box-content-wrapper" onClick={this.handleHide}>
            <div className="msg-box-content" onClick={e => this.handleContentClick(e)}>
              <h1>{title}</h1>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
  handleHide() {
    this.setState({
      visible: false
    });
  }
  handleContentClick(e: MouseEvent) {
    e.stopPropagation();
    console.log('handleContentClick');
  }
  onExited(node: HTMLElement) {
    this.props.willUnmount();
  }
}

export default SMessageBox;