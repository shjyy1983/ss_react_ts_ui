import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './messageBox';


function next(props: Record<string, any>): Promise<any> {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    console.log('here');

    const component = React.createElement(MessageBox, Object.assign({}, props, {
      promise: { resolve, reject },
      willUnmount: () => {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        document.body.style.removeProperty('overflow');
      }
    }));

    ReactDOM.render(component, div);
  });
}

function alert() {
  return next({});
}

export default {
  alert
};