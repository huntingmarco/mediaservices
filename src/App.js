import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Photo from './components/pages/Photo';
import Video from './components/pages/Video';
import Promotion from './components/pages/Promotion';
import Commercial from './components/pages/Commercial';
import Livestream from './components/pages/Livestream';
import Portfolio from './components/pages/Portfolio';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
   <>
   <Router>

    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services' exact component={Services} />
      <Route path='/photo' exact component={Photo} />
      <Route path='/video' exact component={Video} />
      <Route path='/promotion' exact component={Promotion} />
      <Route path='/commercial' exact component={Commercial} />
      <Route path='/livestream' exact component={Livestream} />
      <Route path='/portfolio' exact component={Portfolio} />
      <Route path='/contactus' exact component={ContactUs} />
    </Switch>
   </Router>
   </>
  );
}

export default App;
