import React, { FocusEvent } from 'react';
import './style.less';

interface IProps {
  placeholder?: string;
  default?: string;
  autofocus?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: number;
}

interface IState {
  value: string;
}

class SInput extends React.PureComponent<IProps, IState> {
  private inputRef = React.createRef<HTMLInputElement>();

  public constructor(props: IProps) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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
    const { width, height, padding, fontSize } = this.props;
    const dynamicStyle = {
      width: width || '100%',
      height: height || '32px'
    };

    const dynamicInputStyle = {
      padding: padding || '0',
      fontSize: fontSize || 14 + 'px'
    };
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
      </div>
    );
  }

  private handleFocus(e: FocusEvent<HTMLInputElement>): void {
    console.log(e);
  }

  private handleBlur(e: FocusEvent<HTMLInputElement>): void {
    console.log(e);
  }
}

export default SInput;