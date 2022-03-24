import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import MainMenu from './components/admin/MainMenu';
import ProductManagerFeature from './features/Admin/ProductManager';
import NavHeader from "./components/admin/NavHeader";
import AccountManagerFeature from "./features/Admin/AccountManager";
import OrderManegerFeature from "./features/Admin/OrderManager";




function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div id="wrapper">
      <header>
        <div>
          {loading ? (
            <div>
              <Skeleton variant="rect" height={60}></Skeleton>
              <Box marginTop={1}>
                <Grid container>
                  {/* <Grid ><Skeleton variant='rect' width={270} height={900}></Skeleton></Grid> */}
                  <Grid item>
                    <Box marginLeft={8} marginBottom={2}>
                      <Skeleton
                        variant="circle"
                        width={160}
                        height={160}
                      />
                    </Box>
                    <Box marginBottom={1}>
                      <Skeleton
                        variant="rect"
                        width={260}
                        height={70}
                      />
                    </Box>
                    <Skeleton variant="rect" width={260} height={70} />
                  </Grid>

                  <Grid item xs={6}>
                    <Box marginLeft={3} marginTop={2}>
                      <Skeleton
                        variant="rect"
                        width={1595}
                        height={880}
                      ></Skeleton>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </div>
          ) : (
            <div id="wrapper">
              {/* <NotiProvider> */}

              <NavHeader />
              <MainMenu />
              <Switch>
                <Route path="/" exact component={ProductManagerFeature} />
                <Route
                  path="/admin/products"
                  component={ProductManagerFeature}
                ></Route>
                <Route
                  path="/admin/accounts"
                  component={AccountManagerFeature}
                ></Route>
                <Route
                  path="/admin/orders"
                  component={OrderManegerFeature}
                ></Route>
              </Switch>
              {/* </NotiProvider> */}
            </div>
          )}
        </div>


      </header>
    </div>
  );
}


export default App;
