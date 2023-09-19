import Dashboard2 from "pages/dashboard2";
import RequireAuth from "./RequireAuth";
import Dashboard1 from "pages/dashboard";
import Dashboard3 from "pages/dashboard3";

const routes = [
  //dashboard
  {
    route: "/dashboard/totales",
    component: (
      <RequireAuth>
        <Dashboard1 />
      </RequireAuth>
    ),
  },
  {
    route: "/dashboard/reparto",
    component: (
      <RequireAuth>
        <Dashboard2 />
      </RequireAuth>
    ),
  },
  {
    route: "/dashboard/cajones_de_pollo",
    component: (
      <RequireAuth>
        <Dashboard3 />
      </RequireAuth>
    ),
  },
];

export default routes;
