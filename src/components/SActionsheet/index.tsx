import React, { ReactElement } from 'react';
import SModal from '@components/SModal';
import { Position, ButtonType } from '@utils/definition';
import './style.less';

interface Props {
  visible: boolean;
  title?: string;
  buttons: Array<Record<string, string | number>>;
  onHide?: () => void;
  onSelected?: (index: number, type: ButtonType) => void;
}

interface State {
  modalVisible: boolean;
}

class SActionsheet extends React.Component<Props, State> {
  static defaultProps = {
    title: '',
    visible: false
  }
  readonly state: Readonly<State> = {
    modalVisible: this.props.visible
  }
  constructor(props: Props) {
    super(props);
  }
  render(): ReactElement {
    const { visible, buttons, title, onSelected } = this.props;

    // 分组
    const groupedActions: Array<Array<Record<string, string | number>>> = [];
    groupedActions.push(buttons.filter(e => (e.type === ButtonType.Normal || e.type === ButtonType.Text))); // 文本 && 普通
    groupedActions.push(buttons.filter(e => e.type === ButtonType.Cancel)); // 取消
    groupedActions.push(buttons.filter(e => e.type === ButtonType.Ok)); // 确定

    const actions = groupedActions.map((group, i) => {
      if (group && group.length > 0) {
        return (
          <div className="s-actionsheet__actions" key={i}>
            {
              group.map(item => {
                let titleColor = '#333';
                let titleFont = '16px';
                switch (item.type) {
                case ButtonType.Text:
                  titleColor = '#999999';
                  titleFont = '13px';
                  break;
                case ButtonType.Cancel:
                  titleColor = '#0fc37c';
                  break;
                case ButtonType.Ok:
                  titleColor = '#f5222d';
                  break;
                }
                const dynamicStyle = {
                  color: titleColor,
                  fontSize: titleFont
                };
                return (
                  <div className="s-actionsheet__action" style={dynamicStyle} key={item.index} onClick={() => onSelected(item.index as number, item.type as ButtonType)}>{item.title}</div>
                );
              })
            }
          </div>
        );
      }
    });

    const header = title ? (
      <div className="s-actionsheet__header">
        <div>{title}</div>
      </div>
    ) : null;

    return (
      <SModal visible={visible} position={Position.Bottom} width={'100%'} backgroundColor={'transparent'} onHide={() => this.props.onHide()}>
        <div className="s-actionsheet">
          <div className="s-actionsheet__actions-group">
            {header}
            {actions}
          </div>
        </div>
      </SModal>
    );
  }
}

export default SActionsheet;