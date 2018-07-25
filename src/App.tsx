import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Layout from './layout/Layout';
import * as Pages from "./pages";

const App = () => (
  <Router>
    <Layout>
      <Route exact={true} path="/" component={Pages.Main} />
    </Layout>
  </Router>
)

export default App;
