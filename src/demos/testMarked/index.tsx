import React, { MouseEvent } from 'react';
import SButton from '@components/SButton';
import SMarkdown from '@components/SMarkdown';

interface Props {}
interface State {}

/**
 * https://github.com/markedjs/marked
 */
class Page extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <SMarkdown></SMarkdown>
    );
  }
}
export default Page;