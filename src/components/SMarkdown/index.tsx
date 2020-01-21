import React, { MouseEvent } from 'react';
import Marked from 'marked';

interface Props {}
interface State {
  content: string;
}

class SMarkdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: ''
    };
  }
  componentDidMount() {
    const html = Marked('# Marked in browser\n\nRendered by **marked**.');
    this.setState({
      content: html
    });
  }
  render() {
    const { content } = this.state;
    return (
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    );
  }
}
export default SMarkdown;