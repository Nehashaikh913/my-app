import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from "./Components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/todos/:userId' Component={Login} />
        <Route exact path='/todos' Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
