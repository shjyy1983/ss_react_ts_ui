import React from 'react';
import { string } from 'prop-types';

interface Props {
  show?: boolean;
  className?: string;
  children?: any;
  style?: any;
}

class SView extends React.Component<Props, {}> {
  render() {
    const classNames = [];
    const { show = true, className = '', children } = this.props;
    const mixed: Record<string, any> = {
      style: {
        ...children.props.style
      }
    };
    if (!show) {
      mixed.style.display = 'none';
    }
    if (children.props.className) {
      classNames.push(children.props.className);
    }
    if (className) {
      classNames.push(className);
    }
    mixed.className = classNames.join(' ');
    return React.cloneElement(React.Children.only(children), mixed);
  }
}
export default SView;