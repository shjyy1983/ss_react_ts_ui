import * as React from "react";
import './hello.less';
import logo from '../assets/images/1.png';
import foxLogo from '../assets/images/fox.jpg';

interface HelloProps { compiler: string; framework: string }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
class Hello extends React.Component<HelloProps, {}> {
  constructor(props: HelloProps) {
    super(props);
    this.dosome();
  }
  render() {
    return (
      <div className="page-hello">
        <div className="red big">Hello from {this.props.compiler} and {this.props.framework}!</div>
        <i className="iconfont icon-card"></i>
        <img className="logo" src={logo}></img>
        <img className="logo" src={foxLogo}></img>
        <div className="logo2"></div>
        <div className="logo3"></div>
      </div>
    );
  }
  dosome() {

  }
}

export {
  HelloProps,
  Hello
};