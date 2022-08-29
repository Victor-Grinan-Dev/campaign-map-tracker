//import './App.css';
import './styles/main.css';
import './styles/cards.css';
import './styles/home.css';
import './styles/browser.css'
//import './styles/newCampaign.css';
import './styles/tile.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateMap from './components/CreateMap';

import Home from './components/Home';
import NewCampaign  from './components/NewCampaign';
import Profile from './components/Profile';
import MyArmies from './components/MyArmies';
import About from './components/About';
import Conctact from './components/Conctact';
import ShowMap from './components/ShowMap';
import DrawMap from './components/DrawMap';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/newcampaign"> New Campaign </Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/myarmy">My Army</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<Home />} />
          
          <Route path="/newcampaign" element={<NewCampaign />} />
          <Route path="newcampaign/:map" element={<ShowMap />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/createmap" element={<CreateMap />} />
          <Route path="/myarmy" element={<MyArmies />} />
          <Route path='/contact' element={<Conctact />} />
          <Route path='/about' element={<About />} />
          <Route path='/drawmap' element={<DrawMap />} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
