import logo from '../logo.svg';

const gamer = "https://source.unsplash.com/R_6kw7NUTLY";
const visitor = "https://source.unsplash.com/BoISbSP0HVk";
const admin = "https://source.unsplash.com/1vC4ZwkJNdA";

function Home(){
    return (
        <div>
            <header className="homeHeader">
                <img src={logo} className="App-logo" alt="logo" />             
                <p>Welcome to the Campaing Tracker.</p>               
                <p>Powered by Web-Hexes</p>    
            </header>

            <div className="gates">
                <img className="gate" src={gamer} alt="boardgamer" />
                <img className="gate" src={visitor} alt="visitor" />
                <img className="gate" src={admin} alt="admin" />
            </div>

        </div>

    );
}

export default Home;