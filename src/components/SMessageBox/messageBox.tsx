import React, { MouseEvent } from 'react';
import { Position } from '@utils/definition';
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
    const { title } = this.props;
    const { visible } = this.state;
    return (
      <SModal position={Position.Center} width={'300px'} height={'200px'} visible={visible} onHide={() => this.handleHide()}>
        <h1 onClick={(e) => this.handleContentClick(e)}>{title}</h1>
      </SModal>
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