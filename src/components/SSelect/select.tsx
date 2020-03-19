import React, { MouseEvent } from 'react';
import ClickOutside from 'react-click-outside';
import SOption from './option';
import './style.less';

interface Props {
  options: Record<string, any>[];
}
interface State {}

class SSelect extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { options } = this.props;
    const optionComps = options.map(option => {
      return (
        <div key={option.value}>
          {option.label}
        </div>
      );
    });

    return (
      <div className="s-select">
        <input className="s-select__input" type="text" defaultValue={"xxx"}></input>
      </div>
    );
  }
}
export default SSelect;