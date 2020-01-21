import React, { MouseEvent } from 'react';
import SButton from '@components/SButton';
const babelCore = require('@babel/standalone');

interface Props {}
interface State {}

/**
 * https://developerdoc.com/quick-start/Babel教程/Babel入门教程/
 *
 * 在浏览器环境中跑babel
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="page-babel-standalone">
        <SButton title={'测试'} color={'#fff'} bgColor={'#54a7fd'} throttleDelay={2000} fontSize={'14px'} onClick={this.handleClick}></SButton>
      </div>
    );
  }
  handleClick() {
    const code = babelCore.transform(`
    class Demo extends React.Component {
      render() {
        return (
          <div>hello</div>
        )
      }
    }
    ReactDOM.render(<Demo {...context.props} />, document.getElementById('demo'))
  `, {
      presets: ['es2015', 'react']
    }).code;
    console.log(code);
  }
}
export default Page;