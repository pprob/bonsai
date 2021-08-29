import React from 'react';
import {Switch, Route} from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path='/' render={() => <div>Home page</div>} />
      <Route path='/signup' render={() => <div>Signup</div>} />
      <Route render={() => <div>error page</div>} />
    </Switch>
  );
};

export default Routes;
