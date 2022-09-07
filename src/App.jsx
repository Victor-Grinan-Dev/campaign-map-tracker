import { BrowserRouter, Routes, Route } from 'react-router-dom';

/********* styles **********/
import './styles/main.css';
import './styles/cards.css';
import './styles/browser.css'
import './styles/tile.css';

/****** components ******/
import About from './components/About';
import Conctact from './components/Conctact';
import DrawMap from './components/DrawMap';
import Hall from './components/Hall';
import HallSingle from './components/HallSingle';
import Home from './components/Home';
import MyArmies from './components/MyArmies';
import NewCampaign  from './components/NewCampaign';
import Profile from './components/Profile';
import ShowMap from './components/ShowMap';
import Game from './components/game_components/Game';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/newcampaign" element={<NewCampaign />} />
          <Route path="newcampaign/:map" element={<ShowMap />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myarmy" element={<MyArmies />} />
          <Route path='/contact' element={<Conctact />} />
          <Route path='/about' element={<About />} />
          <Route path='/drawmap' element={<DrawMap />} />
          <Route path='/hall' element={<Hall />} />
          <Route path='/game' element={<Game />} />
          <Route path='/hall/:campaign' element={<HallSingle />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;


