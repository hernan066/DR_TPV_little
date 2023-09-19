import RequireAuth from "./RequireAuth";
import Dashboard1 from "pages/dashboard";

const routes = [
  {
    route: "/dashboard/totales",
    component: (
      <RequireAuth>
        <Dashboard1 />
      </RequireAuth>
    ),
  },
];

export default routes;
