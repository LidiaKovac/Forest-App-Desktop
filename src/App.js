import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/">
      <Home/>
      <Footer/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
