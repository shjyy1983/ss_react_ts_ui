import React, { MouseEvent } from 'react';
import SSelect from '@components/SSelect';

interface Props {}
interface State {
  options: Record<string, any>[];
}

class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    this.setState({
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }]
    });
  }
  render() {
    const { options } = this.state;
    return (
      <div className="page-test-select">
        <SSelect options={options}></SSelect>
      </div>
    );
  }
}
export default Page;