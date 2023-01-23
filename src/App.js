import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Matches from './pages/Matches';
import Table from './pages/Table';
import {SeasonProvider} from './SeasonProvider/SeasonProvider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SeasonProvider>
        <Matches/>
          <Routes>
          <Route path='/' element={<Table/>}/>
        </Routes>
      </SeasonProvider>
      
    </div>
  );
}

export default App;
