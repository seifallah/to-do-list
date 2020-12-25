import './App.css';
import NavBar from './components/nav/Nav';
import {  Switch,  Route, Redirect} from "react-router-dom";
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
            route.protected===true
            ?<PrivateRoute 
                path={route.path}
                key={index}
                exact={route.exact}
              >
                <route.component />
              </PrivateRoute>
            :<Route 
                key={index}
                path={route.path}
                exact={route.exact}
              >
                <route.component />
              </Route>
          ))}
        </Switch>
      </section>

    </div>
  );
}
const PrivateRoute =({ children, ...rest })  => {
console.log(" localStorage.getItem--logged)",  localStorage.getItem("logged"))
  return (
    <Route
      {...rest}
      render={({ location }) =>
       localStorage.getItem("loggedUser")==="loggedIn" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default App;
