import {BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Top } from '../components/Page/Top';
import { Users } from '../components/Page/Users';
import { DefaultLayout } from '../components/templates/DefaultLayout';
import { HeaderOnly } from '../components/templates/HeaderOnly';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <DefaultLayout>
           <Top />
          </DefaultLayout>
        </ Route>
        <Route path='/users'>
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </ Route>
      </Switch>
    </BrowserRouter>
  )
}