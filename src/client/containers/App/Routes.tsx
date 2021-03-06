import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProductLayout from '../Products';
import SigninLayout from '../Signin';
import SignupLayout from '../Signup';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path='/' render={() => <div>Home page</div>} />
      <Route path='/signin' component={SigninLayout} />
      <Route path='/signup' component={SignupLayout} />
      <Route path='/products' component={ProductLayout} />
      <Route render={() => <div>error page</div>} />
    </Switch>
  );
};

export default Routes;
