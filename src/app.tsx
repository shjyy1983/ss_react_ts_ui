import 'react-app-polyfill/ie9';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, BrowserRouter, HashRouter, Switch, Redirect } from "react-router-dom";
import Home from '@views/home';
import TestButton from '@views/testButton';
import TestMessageBox from '@views/testMessageBox';
import TestModal from '@views/testModal';
import TestView from '@views/testView';
import TestTransition from '@views/testTransition';
import TestSelect from '@views/testSelect';
import TestInput from '@views/testInput';
import TestIcon from '@views/testIcon';
import TestActionsheet from '@views/testActionsheet';
import { PageError } from '@views/error';

import TestRaf from '@demos/testRaf';
import TestReactTransitionGroup from '@demos/testReactTransitionGroup';
import TestReactTransitionGroup2 from '@demos/testReactTransitionGroup2';
import TestUseState from '@demos/testUseState';
import TestPassParam from '@demos/testPassParam';
import TestRef from '@demos/testRef';
import TestCreateElement from '@demos/testCreateElement';
import TestCloneElement from '@demos/testCloneElement';
import TestSFC from '@demos/testSFC';
import TestMemo from '@demos/testMemo';
import TestChildren from '@demos/testChildren';
import TestFragment from '@demos/testFragment';
import TestForwardRef from '@demos/testForwardRef';
import TestReactClickOutside from '@demos/testReactClickOutside';
import '@/assets/less/app.less';

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
      <Route exact path="/testView" component={TestView}></Route>
      <Route exact path="/testTransition" component={TestTransition}></Route>
      <Route exact path="/testSelect" component={TestSelect}></Route>
      <Route exact path="/testInput" component={TestInput}></Route>
      <Route exact path="/testIcon" component={TestIcon}></Route>
      <Route exact path="/testActionsheet" component={TestActionsheet}></Route>

      <Route exact path="/testRaf" component={TestRaf}></Route>
      <Route exact path="/testReactTransitionGroup" component={TestReactTransitionGroup}></Route>
      <Route exact path="/testReactTransitionGroup2" component={TestReactTransitionGroup2}></Route>
      <Route exact path="/testUseState" component={TestUseState}></Route>
      <Route exact path="/testPassParam" component={TestPassParam}></Route>
      <Route exact path="/testRef" component={TestRef}></Route>
      <Route exact path="/testCreateElement" component={TestCreateElement}></Route>
      <Route exact path="/testCloneElement" component={TestCloneElement}></Route>
      <Route exact path="/testSFC" component={TestSFC}></Route>
      <Route exact path="/testMemo" component={TestMemo}></Route>
      <Route exact path="/testChildren" component={TestChildren}></Route>
      <Route exact path="/testFragment" component={TestFragment}></Route>
      <Route exact path="/testForwardRef" component={TestForwardRef}></Route>
      <Route exact path="/testReactClickOutside" component={TestReactClickOutside}></Route>
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