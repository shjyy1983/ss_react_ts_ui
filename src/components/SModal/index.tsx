import React, { MouseEvent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Position, NumberOrString, NoneFunc } from '@utils/definition';
import { strRemoveUnit } from '@utils/func';
import SMask from '@components/SMask';
import './style.less';

interface Props {
  visible: boolean;
  position: Position;
  onHide?: NoneFunc;
  width?: string;
  height?: string;
}

interface State {}

class SModal extends React.PureComponent<Props, State> {
  static defaultProps = {
    width: '100%',
    height: '100%',
  }
  constructor(props: Props) {
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
  }
  render() {
    const { visible, children, position, width, height } = this.props;
    const clsName = `present-${position}`;
    let dynamicStyle = {
      width,
      height
    };
    switch (position) {
    case Position.Top:
      dynamicStyle = Object.assign(dynamicStyle, {
        top: 0,
        bottom: 'auto'
      });
      break;
    case Position.Bottom:
      dynamicStyle = Object.assign(dynamicStyle, {
        top: 'auto',
        bottom: 0
      });
      break;
    case Position.Left:
      dynamicStyle = Object.assign(dynamicStyle, {
        top: 'auto',
        bottom: 'auto',
        left: 0
      });
      break;
    case Position.Right:
      dynamicStyle = Object.assign(dynamicStyle, {
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 0
      });
      break;
    case Position.Center:
      dynamicStyle = Object.assign(dynamicStyle, {
        top: '50%',
        left: '50%',
        bottom: 'auto',
        right: 'auto',
        marginLeft: `${-strRemoveUnit(width) / 2}px`,
        marginTop: `${-strRemoveUnit(height) / 2}px`
      });
      break;
    }
    console.log('dynamicStyle', dynamicStyle, clsName);
    const maskComp = (
      <SMask visible={visible}></SMask>
    );
    return (
      <div className="s-modal" onClick={this.handleHide}>
        {maskComp}
        <CSSTransition
          in={visible}
          timeout={300}
          classNames={clsName}
          unmountOnExit
        >
          <div className="s-modal-content-wrapper" style={dynamicStyle}>
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