import React, { MouseEvent } from 'react';
import Box1 from './box1';

interface Props {}
interface State {}

/**
 * https://reactjs.org/docs/react-api.html#cloneelement
 *
React.cloneElement(
  element,
  [props],
  [...children]
)
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const box1Comp = (<Box1 name={"box1"}></Box1>);
    const box2Comp = React.cloneElement(box1Comp, {
      name: 'box2 copy from box1'
    });
    const box3Comp = React.cloneElement(box1Comp, {
      name: 'box3 copy from box1'
    });

    console.log(React.isValidElement(box1Comp)); // true
    console.log(React.isValidElement(box2Comp)); // true
    console.log(React.isValidElement(box3Comp)); // true
    return (
      <div className="page-test-clone-element">
        {box1Comp}
        {box2Comp}
        {box3Comp}
      </div>
    );
  }
}
export default Page;