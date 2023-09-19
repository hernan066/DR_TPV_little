import Dashboard2 from "pages/dashboard2";
import RequireAuth from "./RequireAuth";
import Dashboard1 from "pages/dashboard";
import Dashboard3 from "pages/dashboard3";
import ListUsers from "pages/users/list-users";
import CreateNewUser from "pages/users/new-user";
import EditUser from "pages/users/edit-user";
import EditPasswordUser from "pages/users/change-password";

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
  /* usuario  */
  {
    route: "/usuarios/lista",
    component: (
      <RequireAuth>
        <ListUsers />
      </RequireAuth>
    ),
  },
  {
    route: "/usuarios/nuevo",
    component: (
      <RequireAuth>
        <CreateNewUser />
      </RequireAuth>
    ),
  },
  {
    route: "/usuarios/editar/:id",
    component: (
      <RequireAuth>
        <EditUser />
      </RequireAuth>
    ),
  },
  {
    route: "/usuarios/editar/password/:id",
    component: (
      <RequireAuth>
        <EditPasswordUser />
      </RequireAuth>
    ),
  },
];

export default routes;
