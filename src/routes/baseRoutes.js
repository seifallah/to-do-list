import NotFound from "../components/404";
import LoginPage from "../pages/Login";
import TodoPage from "../pages/Todos";

const routes = [
    {
      path: "/",
      exact:true,
      component: LoginPage
    },
    {
      path: "/todos",
      component: TodoPage,
    },
    {
        path: "*",
        component: NotFound,
      }
  ];

export default routes;