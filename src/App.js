import { BrowserRouter ,Route,Switch } from "react-router-dom"; //importion de notre router
import './index.css';

import NavBar from './NavBar';
import AddBloc from "./newbloc/AddBloc";
import Bloc from './Bloc';
import GetBlocDetail from "./GetBlocDetail";
import Page404 from "./Page404";
import UpDateBloc from "./update/UpDateBloc";
import Login from "./Login";
import Inscription from "./Inscription";


function App() {
  return (<div >
              <BrowserRouter>
                <Switch>
                  <Route exact path={'/'}>
                   <Login />
                  </Route>
                  <Route  path={'/Inscription'}>
                   <Inscription />
                  </Route>

                  <Route exact path={'/Bloc'}>
                     <NavBar />
                    <Bloc />
                  </Route>
                   <Route   path={'/Bloc/:id'}>
                     <NavBar />
                     <GetBlocDetail /> 
                  </Route>
      
                  <Route  path={'/newbloc/addBloc'}>
                     <NavBar />
                     <AddBloc /> 
                  </Route>

                   <Route  path={'/update/UpDateBloc/:id'}>
                     <NavBar />
                     <UpDateBloc />
                  </Route>

                  <Route  path={'*'}>
                     <Page404 />
                  </Route>

                </Switch>
              </BrowserRouter>      
          </div>
    );
}

export default App;
