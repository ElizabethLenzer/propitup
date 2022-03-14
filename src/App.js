import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard FirstName="Jane" LastName="Doe" age={45} HairColor="Black" />
      <PersonCard FirstName="John" LastName="Smith" age={88} HairColor="Brown" />
      <PersonCard FirstName="Millard" LastName="Fillmore" age={50} HairColor="Brown" />
      <PersonCard FirstName="Maria" LastName="Smith" age={62} HairColor="Brown" />
    </div>
  );
}

export default App;