
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, BrowserRouter, HashRouter, Switch, Redirect } from "react-router-dom";
import Home from '@views/home';
import TestButton from '@views/testButton';
import TestMessageBox from '@views/testMessageBox';
import TestModal from '@views/testModal';
import { PageError } from '@views/error';

import TestRaf from '@demos/testRaf';
import TestReactTransitionGroup from '@demos/testReactTransitionGroup';
import TestUseState from '@demos/testUseState';
import TestPassParam from '@demos/testPassParam';
import TestRef from '@demos/testRef';
import '@/assets/less/app.less';

// 使用默认的确认函数
// const getUserConfirmation = function (message: string, callback: func) {
//   const allowTransition = window.confirm(message);
//   console.log('allowTransition', allowTransition);
//   callback(allowTransition);
// };

const routes = (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" render={() =>
        <Redirect to="/home"></Redirect>
      }></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/testButton" component={TestButton}></Route>
      <Route exact path="/testMessageBox" component={TestMessageBox}></Route>
      <Route exact path="/testModal" component={TestModal}></Route>
      <Route exact path="/testRaf" component={TestRaf}></Route>
      <Route exact path="/testReactTransitionGroup" component={TestReactTransitionGroup}></Route>
      <Route exact path="/testUseState" component={TestUseState}></Route>
      <Route exact path="/testPassParam" component={TestPassParam}></Route>
      <Route exact path="/testRef" component={TestRef}></Route>
      <Route exact path="/page3" render={() => {
        return (
          <div>Hello page3</div>
        );
      }}></Route>
      <Route component={PageError}></Route>
    </Switch>
  </HashRouter>
);

ReactDOM.render(routes, document.getElementById("app"));