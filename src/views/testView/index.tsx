import React, { MouseEvent } from 'react';
import View from '@components/Base/SView';
import SIcon from '@components/SIcon';
import './style.less';

class Page extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <div className="page-test-view">
        <View className="super-box blue" show={true}>
          <View className={'box1'}>
            <SIcon icon={"email"} fontSize={30}></SIcon>
          </View>
        </View>
      </div>
    );
  }
}
export default Page;