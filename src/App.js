import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
