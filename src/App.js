import React from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Form from './Components/Form/Form';
import Results from './Components/Results/Results';
import DummyNavbar from './Components/DummyNavbar/DummyNavbar';
import DiseaseIndividual from './Components/Results/DiseaseIndividual'

function App() {
  return (
    <BrowserRouter>
      <div style={{ margin: 0, fontFamily: 'Open Sans' }} >
        <DummyNavbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/form" component={Form} />
          <Route path="/results" component={Results} />
          <Route path="/detailed-results" component={DiseaseIndividual} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
