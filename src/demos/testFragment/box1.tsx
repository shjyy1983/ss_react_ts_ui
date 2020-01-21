import React, { MouseEvent } from 'react';
import Cat from './cat';

interface Props {
}
interface State {}

class Box1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const catComps = [];
    const cat = <Cat name={'cat'}></Cat>;
    for (let i = 0; i < 5; i++) {
      catComps.push(React.cloneElement(cat, {
        key: i,
        name: `cat_${i}`
      }));
    }
    return (
      <React.Fragment>
        {catComps}
      </React.Fragment>
    );
  }
}
export default Box1;