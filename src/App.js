import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './screens/Home';
import Questionnaire from './screens/Questionnaire';
import LeaderBoard from './screens/LeaderBoard';
import Error from './screens/Error';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/questionnaire" element={<Questionnaire/>} />
            <Route path="/leaderboard" element={<LeaderBoard/>} />
            <Route component={Error}/>
          </Routes>
        </div> 
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
