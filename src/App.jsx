import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Routers from "./router/Router";
import { loadTokensFromLocalStorage } from './store/slice/authSlice';
import { useDispatch } from "react-redux";
import {loginUser} from "./store/slice/authSlice";


const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const tokens = loadTokensFromLocalStorage();
  //   if (tokens.accessToken && tokens.refreshToken) {
  //     dispatch(loginUser({ tokens }));
  //   }
  // }, [dispatch]);
  return (
    <>
      <Layout>
        <Routers />
      </Layout>
    </>
  );
};

export default App;
