
import HeroCard from './HeroCard';
import Data from './Data.json';
import './heroStyle.css'


function App() {
  return (
    <div className="container">
        {Data.slice(0,9).map(hero => <HeroCard key={hero.id} hero={hero} />)}
    </div>
  );
}

export default App;
