import { Container, Grid } from '@material-ui/core';
import { React } from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Portafolio from './pages/Portafolio/Portafolio';
import Resumen from './pages/Resumen/Resumen';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile/>
        </Grid>
        <Grid item xs>
          <Header/>
            <Router>
              <Switch>
                <Route path='/portafolio'>
                  <Portafolio/>
                </Route>
                <Route path='/'>
                  <Resumen/>
                </Route>
              </Switch>
            </Router>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
