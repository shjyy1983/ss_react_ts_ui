import React, { MouseEvent } from 'react';
import View from '@components/Base/SView';
import './style.less';

interface Props {}
interface State {}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="page-test-view">
        <View className="super-box blue" show={true}>
          <View>
            <div>hello</div>
          </View>
        </View>
      </div>
    );
  }
}
export default Page;