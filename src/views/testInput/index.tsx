import React, { MouseEvent } from 'react';
import SInput from '@components/SInput';

interface Props {}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="page-test-input">
        <SInput placeholder={"输入..."} default={"Hello"} autofocus={false} width={'200px'} padding={'0 4px'} borderWidth={2} borderColor={"#ddd"}></SInput>
      </div>
    );
  }
}
export default Page;