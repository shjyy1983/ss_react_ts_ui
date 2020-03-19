import React, { FocusEvent, TouchEvent, MouseEvent } from 'react';
import SIcon from '@components/SIcon';
import './style.less';

interface Props {
  // placeholder
  placeholder?: string;
  // 默认值
  default?: string;
  // 是否自动焦点
  autofocus?: boolean;
  // 宽度
  width?: string;
  // 高度
  height?: string;
  // 输入框内边距
  padding?: string;
  // 字体大小
  fontSize?: number;
  // 边框宽度
  borderWidth?: number;
  // 边框颜色
  borderColor?: string;
  // 是否有清空按钮
  clearable?: boolean;
}

interface State {
  value: string;
}

class SInput extends React.PureComponent<Props, State> {
  // Props 默认值
  static defaultProps = {
    placeholder: '输入...',
    default: '',
    autofocus: false,
    width: '100%',
    height: '28px',
    padding: '0 4px',
    fontSize: '12px',
    borderWidth: 1,
    borderColor: '#333',
    clearable: true
  }

  public readonly state: Readonly<State> = {
    value: this.props.default
  }
  private inputRef = React.createRef<HTMLInputElement>();

  public constructor(props: Props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handlerClear = this.handlerClear.bind(this);
  }

  public componentDidMount(){
    if(this.props.autofocus) {
      this.inputRef.current.focus();
    }
    this.setState({
      value: this.props.default
    });
  }

  public render() {
    const { width, height, padding, fontSize, borderWidth, borderColor } = this.props;

    const dynamicStyle = {
      width: width,
      height: height,
      border: borderWidth ? `${borderWidth}px solid ${borderColor}` : '0'
    };

    const dynamicInputStyle = {
      padding: padding,
      fontSize: fontSize + 'px'
    };

    const clearIconComp = this.state.value.length > 0 ?
      <SIcon className={'s-input-clear'} icon={'clear'} fontSize={20} color={'#eee'} onClick={this.handlerClear}></SIcon> : '';

    return (
      <div className="s-input" style={dynamicStyle}>
        <input
          type="text"
          ref={this.inputRef}
          style={dynamicInputStyle}
          value={this.state.value}
          placeholder={this.props.placeholder || ''}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={e => this.setState({ value: e.target.value })}></input>
        {clearIconComp}
      </div>
    );
  }

  private handleFocus(e: FocusEvent<HTMLInputElement>): void {
    console.log(e);

  }

  private handleBlur(e: FocusEvent<HTMLInputElement>): void {
    console.log(e);
  }

  private handlerClear(e: MouseEvent<HTMLDivElement>): void {
    this.setState({
      value: ''
    });
  }
}

export default SInput;