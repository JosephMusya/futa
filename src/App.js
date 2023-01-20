import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Matches from './pages/Matches';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Matches/>}/>
      </Routes>
    </div>
  );
}

export default App;
