import React, { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import SMask from '@components/SMask';
import './style.less';

interface Props {
  visible: boolean;
  position: 'top' | 'bottom';
  onHide?: () => void;
}

interface State {}

class SModal extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
  }
  render() {
    const { visible, children } = this.props;
    const maskComp = (
      <SMask visible={visible}></SMask>
    );
    return (
      <div className="s-modal" onClick={this.handleHide}>
        {maskComp}
        <CSSTransition
          in={visible}
          timeout={300}
          classNames="present-bottom"
          unmountOnExit
        >
          <div className="s-modal-content-wrapper" >
            <div className="s-modal-content" onClick={e => this.handleContentClick(e)}>
              {children}
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
  handleHide() {
    console.log('handleHide');
    this.props.onHide && this.props.onHide();
  }
  handleContentClick(e: MouseEvent) {
    e.stopPropagation();
    console.log('handleContentClick');
  }
}

export default SModal;