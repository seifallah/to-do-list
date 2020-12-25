import './App.css';
import NavBar from './components/nav/Nav';
import {  Switch,  Route} from "react-router-dom";
import routes from './routes/baseRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <section>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.component />}
            />
          ))}
        </Switch>
      </section>

    </div>
  );
}

export default App;
