import NotFound from "../components/404";
import LoginPage from "../pages/Login";
import TodoPage from "../pages/Todos";

const routes = [
    {
      path: "/",
      exact:true,
      component: LoginPage,
      protected:false

    },
    {
      path: "/todos",
      component: TodoPage,
      protected:true
    },
    {
        path: "*",
        component: NotFound,
        protected:false

      }
  ];

export default routes;