import React, { MouseEvent } from 'react';

interface Props {}
interface State {}

/**
React.createElement(
  type,
  [props],
  [...children]
)
 */
class Box1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const catCmp = React.createElement('div', {
      key: 'cat', // key
      className: 'red '
    }, 'cat');
    const dogCmp = React.createElement('div', {
      key: 'dog',
      className: 'blue'
    }, 'dog');
    return (
      React.createElement('div', { className: 'box'}, ['box1', catCmp, dogCmp])
    );
  }
}
export default Box1;