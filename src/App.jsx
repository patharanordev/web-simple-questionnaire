import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import LeaderBoard from './screens/LeaderBoard';
import Error from './screens/Error';
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
          <div>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home/>} exact/>
              <Route path="/quiz" element={<Quiz/>} />
              <Route path="/leaderboard" element={<LeaderBoard/>} />
              <Route component={Error}/>
            </Routes>
          </div> 
        </BrowserRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
