import React, { MouseEvent } from 'react';
import SInput from '@components/SInput';

class Page extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <div className="page-test-input padding10">
        <SInput placeholder={"输入..."} default={"Hello"} autofocus={false} width={'200px'} padding={'0 4px'} borderWidth={1} borderColor={"#ddd"}></SInput>
      </div>
    );
  }
}
export default Page;