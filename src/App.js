import './App.css';
import HomePage from './Pages/HomePage';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import NotFound from './Pages/NotFound';
import Header from './companents/Header'
import Detail from './Pages/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
