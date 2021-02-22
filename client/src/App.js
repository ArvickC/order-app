import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import ContactUs from './components/Pages/ContactUs';
import Order from './components/Pages/Order';
import ThankYou from './components/Pages/ThankYou';
import Error from './components/Pages/Error';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{height: "100vh", display: "flex", flexDirection: 'column'}}>
          <Header/>

          <div style={{flex: 1, marginLeft: 0, fontFamily: 'Lato', fontSize: 40}}>
            <Router>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/contact" component={ContactUs} exact/>
                <Route path="/order" component={Order}/>
                <Route path="/thanks" component={ThankYou} exact/>
                <Route component={Error} exact/>
              </Switch>
            </Router>
          </div>

          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
