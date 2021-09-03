import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Listing from './pages/Listing/Listing';
import Navbar from "./components/Navbar/navbar";
import Error from "./pages/Error/ErrorPage";
import Movie from './pages/Movie/Movie';
import { connect } from 'react-redux';

function App({access}) {
  return (<>
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Listing}/>
          {access === true ? <Route exact path="/details" component={Movie}/> : ''}
          <Route path='*' component={Error}/>
      </Switch>
    </Router>
  </>);
}

const mapStateToProps = (state) => {
  return {
    access: state.access
  }
}

export default connect(mapStateToProps)(App);
