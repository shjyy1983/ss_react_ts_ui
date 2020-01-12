
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Route, BrowserRouter, HashRouter, Switch, Redirect} from "react-router-dom";
import {Home} from '@views/home';
import {Page1} from '@views/page1';
import {Page2} from '@views/page2';
import {PageError} from '@views/error';
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
      <Route exact path="/page1" component={Page1}></Route>
      <Route exact path="/page2" component={Page2}></Route>
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