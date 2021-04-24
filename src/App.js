import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/">
      <Home/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
