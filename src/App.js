import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { playerList } from "./data/data";
import ListPlayers from './component/ListPlayers';


function App() {
  return (
    // discription of steps in file README.md
    <div >
      <header className="App-header">
        <ListPlayers playerList={playerList} />
      </header>
    </div>
  );
}

export default App;
