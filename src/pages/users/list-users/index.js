/* eslint-disable prettier/prettier */
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useGetUsersQuery } from "api/userApi";
import Loading from "components/DRLoading";
import { Alert } from "@mui/material";
import TableListUsers from "./TableListUsers";

function ListUsers() {
  const { data: listUsers, isLoading, error } = useGetUsersQuery();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Lista de usuarios
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {isLoading && <Loading />}
                {error && <Alert severity="error">{error.error}</Alert>}
                {listUsers && <TableListUsers users={listUsers} />}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default ListUsers;
