import React, { SFC } from 'react';

interface Props {
  name: string;
}

function Tip(props: Props) {
  return (
    <div>{props.name}</div>
  );
}

const Box: SFC<Props> = ({ name }: Props) => {
  return (
    <div className="box">
      <Tip name={'tip'}></Tip>
    </div>
  );
};

export default Box;